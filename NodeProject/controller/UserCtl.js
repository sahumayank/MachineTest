

var BaseCtl = require("../controller/BaseCtl");
var User = require("../bean/User");
var ServiceLocator = require("../services/ServiceLocator");

class UserCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getUserService();
    }

    getBean(request) {
        var user = new User();
        user.populateRequest(request.body);
        return user;
    };

    getService() {
        return this.service;
    };
}
module.exports = UserCtl;