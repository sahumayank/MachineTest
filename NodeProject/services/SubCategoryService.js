var SubCategory = require("../bean/SubCategory");
var MasterCategoryService = require("../services/MasterCategoryService")
var BaseService = require("./BaseService");

class SubCategoryService extends BaseService {
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM category2 WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new SubCategory(), function (err, bean) {
            callback(err, bean);
        });
    };
    search(bean, pageNo, callback) {
        var sql = "SELECT * FROM category2 where 1=1 ";

        if (bean.name) {
            sql += " and NAME = '" + bean.name + "'";
        }

        super.executeSQLForList(sql, {
            "pageNo": pageNo
        }, new SubCategory(), function (err, list) {
            callback(err, list);
        });
    }

    add(bean, callback, ctx) {
        var sql = "INSERT INTO category2 (NAME,DESCRIPTION,CATEGORY_ID,CATEGORY_NAME) " +
            " VALUES (?,?,?,?)";
        var params = [bean.name, bean.description, bean.category_ID, bean.category_Name];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                var masterCategory = new MasterCategoryService()
                masterCategory.findByPk(bean.category_ID, function (cErr, result) {
                    if (!cErr) {
                        var upateSql = "UPDATE category2 SET CATEGORY_NAME=? WHERE ID = ?";
                        var params = [result.name, pk];
                        masterCategory.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        })
                    }
                }, ctx)
                //                callback(err, pk);

            }
        });
    };

    update(bean, callback) {
        var sql = "UPDATE category2 SET NAME=?,DESCRIPTION=? ,CATEGORY_ID=?,CATEGORY_Name=? WHERE ID=?"
        var params = [bean.name, bean.description, bean.category_ID, , bean.category_Name, bean.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
       
                callback(err, result.affectedRows);
            
            }
        });
    }

    delete(id, callback, ctx) {
        super.delete(id, 'category2', callback, ctx);
    }

}
module.exports = SubCategoryService;