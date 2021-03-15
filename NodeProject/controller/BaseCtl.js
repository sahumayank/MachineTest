var Response = require("../bean/Response");
class BaseCtl {

    constructor() { };

    validate(request) {
        return true;
    };

    preload(request, response) {
    };

    getBean(request) {
        return null;
    };

    getService() {
        return null;
    };

    get(req, res) {
        var service = this.getService();
        var id = req.params.id;
        service.findByPk(id, function (err, bean) {
            var r = new Response(err, bean);;
            res.json(r);
        });
    };


    delete(req, res) {
        var service = this.getService();
        var id = req.params.id;
        service.delete(id, function (err, bean) {
            var r = new Response(err, bean);;
            res.json(r);
        });
    };

 
    search(req, res) {
        var service = this.getService();
        var bean = this.getBean(req);
        var pageNo = 0;
        if (req.body.pageNo) {
            pageNo = req.body.pageNo;
        }
        service.search(bean, req.body.pageNo, function (err, result) {
            //result.pageNo = pageNo;
            var r = new Response(err, result);
            res.json(r);
        });
    };

   
}

module.exports = BaseCtl;
