var Product = require("../bean/Product");
var BaseService = require("./BaseService");
var subCategoryService = require("../services/SubCategoryService")
class ProductService extends BaseService {

    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM Product WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Product(), function (err, bean) {
            callback(err, bean);
        });
    };

    search(bean, pageNo, callback) {
        var sql = "SELECT * FROM Product where 1=1 ";

        if (bean.name) {
            sql += " and NAME = '" + bean.name + "'";
        }

        super.executeSQLForList(sql, {
            "pageNo": pageNo
        }, new Product(), function (err, list) {
            callback(err, list);
        });
    }

    add(bean, callback, ctx) {
        var sql = "INSERT INTO Product (NAME,PRICE,CATEGORY2_ID,CATEGORY2_NAME) " +
            " VALUES (?,?,?,?)";
        var params = [bean.name, bean.price, bean.category2_ID, bean.category2_Name];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                var subCategoryService = new subCategoryService()
                subCategoryService.findByPk(bean.category_ID, function (cErr, result) {
                    if (!cErr) {
                        var upateSql = "UPDATE product SET CATEGORY2_NAME=? WHERE ID = ?";
                        var params = [result.name, pk];
                        masterCategory.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        })
                    }
                }, ctx)
            }
        });
    };

    update(bean, callback) {
        var sql = "UPDATE Product SET NAME=?,PRICE=?,CATEGORY2_ID=?,CATEGORY2_NAME=? WHERE ID=?"
        var params = [bean.name, bean.price, bean.category2_ID, bean.category2_Name, bean.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    delete(id, callback, ctx) {
        super.delete(id, 'Product', callback, ctx);

    }

}
module.exports = ProductService;