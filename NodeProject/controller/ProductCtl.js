var BaseCtl = require("./BaseCtl");
var Product = require("../bean/Product");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");

class ProductCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getProductService();
    }

    preload(request, response) {
        var mcService = ServiceLocator.getSubCategoryService();
        mcService.search('', null, function (err, result) {
            response.json(result.list)
        })
    };



    getBean(request) {
        var product = new Product();
        product.populateRequest(request.body);
        return product;
    };

    save(req, res) {
        var service = this.getService();
        var bean = this.getBean(req);
        if (bean.name != "") {
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
        } else {
            res.json("name is null");
        }
    };



    getService() {
        return this.service;
    };
    preload(request, response) {
        var scService = ServiceLocator.getSubCategoryService();
        scService.search('', null, function (err, result) {
            response.json(result.list)
        })
    };

}
module.exports = ProductCtl;