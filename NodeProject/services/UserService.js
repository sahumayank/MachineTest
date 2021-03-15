var User = require("../bean/User");
var BaseService = require("./BaseService");

class UserService extends BaseService {

    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM user WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new User(), function (err, bean) {
            callback(err, bean);
        });
    };

    search(user, pageNo, callback) {
        var sql = "SELECT * FROM user where 1=1 ";

        if (user.name) {
            sql += " and NAME = '" + user.name + "'";
        }
        if (user.email) {
            sql += " and EMAIL = '" + user.email + "'";
        }
      
        super.executeSQLForList(sql, {
            "pageNo": pageNo
        }, new User(), function (err, list) {
            callback(err, list);
        });
    }

    add(user, callback, ctx) {

        var sql = "INSERT INTO user (NAME,EMAIL) " +
            " VALUES (?,?,?)";

        var params = [user.name, user.email];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                callback(err, pk);

            }
        });
    };

    update(user, callback) {
        var sql = "UPDATE user SET NAME=?,EMAIL=? WHERE ID=?"
        var params = [user.name, user.email, user.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    delete(id, callback, ctx) {
        super.delete(id, 'user', callback, ctx);
    }



}
module.exports = UserService;