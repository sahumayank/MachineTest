
var pool = require("./MySQLPool");

class BaseService {

    executeSQL(sql, params, callback) {
         pool.getConnection(function (error, connection) {
            if (error) {
                console.error(error);
                callback(error);
                return;
            }
            connection.query(sql, params, function (error, results) {
                callback(error, results);
                connection.release();
            });
        });
    }

    executeSQLForObject(sql, params, bean, callback) {
        this.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else if (result.length > 0) {
                bean.populateResult(result[0]);
                callback(err, bean);
            } else {
                callback("Record not found");
            }
        });
    }

    executeSQLForList(sql, params, beanObj, callback) {

        var self = this;
        var pageSize = 10;

        var sqlWithLimit = sql;

        if (params && params.pageNo > -1) {
            var startIndex = (params.pageNo) * pageSize;
            sqlWithLimit += " limit " + startIndex + "," + pageSize;
        }

        //Count query 
        var sqlCount = "select count(*) as ct " + sql.substring(sql.toLocaleLowerCase().indexOf('from'));

        self.executeSQL(sqlWithLimit, params, function (err, result) {
            if (err) {
                callback(err);
                return;
            }

            //Create list of objects
            var list = [];
            result.forEach(function (e) {
                //Create clone of bean
                var bean = Object.create(beanObj);
                bean.populateResult(e);
                list.push(bean);
            });

            //Get count of records and add at the last of list
            self.executeSQL(sqlCount, params, function (err, result) {
                callback(err, {
                    "list": list,
                    "count": result[0].ct
                });
            });
        });
    }

    delete(id, table, callback,ctx){
        var sql = "DELETE FROM " + table + " WHERE ID=?";
        var params = [id];
        var self = this;
        this.findByPk(id, function (err, bean) {
            if (err) {
                callback(err); 
            } else {
                self.executeSQL(sql, params, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, bean);
                    }
                });
            }
        });
    }

}

module.exports = BaseService;

