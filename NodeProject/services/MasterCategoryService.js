var MasterCategory = require("../bean/MasterCategory");
var BaseService = require("./BaseService");

class MasterCategoryService extends BaseService {
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM category1 WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new MasterCategory(), function (err, bean) {
            callback(err, bean);
        });
    };
    search(bean, pageNo, callback) {
        var sql = "SELECT * FROM category1 where 1=1 ";

        if (bean.name) {
            sql += " and NAME = '" + bean.name + "'";
        }

        super.executeSQLForList(sql, {
            "pageNo": pageNo
        }, new MasterCategory(), function (err, list) {
            callback(err, list);
        });
    }

    add(bean, callback, ctx) {
        var sql = "INSERT INTO category1 (NAME,DESCRIPTION) " +
            " VALUES (?,?)";
        var params = [bean.name, bean.description];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                callback(err, pk);

            }
        });
    };

    update(bean, callback) {
        var sql = "UPDATE category1 SET NAME=?,DESCRIPTION=? WHERE ID=?"
        var params = [bean.name, bean.description, bean.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    delete(id, callback, ctx) {
        super.delete(id, 'category1', callback, ctx);

    }

}
module.exports = MasterCategoryService;