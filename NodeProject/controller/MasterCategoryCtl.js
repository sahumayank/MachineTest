var Response = require("../bean/Response");
var BaseCtl = require("./BaseCtl");
var MasterCategory = require("../bean/MasterCategory");
var ServiceLocator = require("../services/ServiceLocator");

class MasterCategoryCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getMasterCategoryService();
    }

    save(req, res) {
        var service = this.getService();
        var bean = this.getBean(req);
        if(bean.name!=""){
        if (bean.id && bean.id > 0) {
            service.update(bean, function (err, count) {
                var r = new Response(err, bean.id);
                res.json(r);
            });
        } else {
            service.add(bean, function (err, pk) {
                var r = new Response(err, pk);
                res.json(r);
            });
        }
    }else{
        res.json("name is null");
    }
    };



    getBean(request) {
        var masterCategory = new MasterCategory();
        masterCategory.populateRequest(request.body);
        return masterCategory;
    };

    getService() {
        return this.service;
    };
}
module.exports = MasterCategoryCtl;