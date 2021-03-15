var BaseCtl = require("./BaseCtl");
var SubCategory = require("../bean/SubCategory");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");

class SubCategoryCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getSubCategoryService();
    }

    getBean(request) {
        var subCategory = new SubCategory();
        subCategory.populateRequest(request.body);
        return subCategory;
    };

    getService() {
        return this.service;
    };

    preload(request, response) {
        var mcService = ServiceLocator.getMasterCategoryService();
        mcService.search('', null, function (err, result) {
            response.json(result.list)
        })
    };

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






}
module.exports = SubCategoryCtl;