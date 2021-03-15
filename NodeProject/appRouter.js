var UserCtl = require("./controller/UserCtl");
var ProductCtl = require("./controller/ProductCtl");
var MasterCategoryCtl = require("./controller/MasterCategoryCtl");
var SubCategoryCtl = require("./controller/SubCategoryCtl");

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    next();

})

router.all('/:usecase/:operation/:id?', function (request, response) {
    var op = request.params.operation;
    
    if ('POST' == request.method) {
        if ('get' == op || 'preload' == op) {
            response.status(400).send('Http Post is not allowed');
            return;
        }
    }

    if ('GET' == request.method) {
        if ('save' == op) {
            response.status(400).send('Http Get is not allowed');
            return;
        }
    }
    var usecase = request.params.usecase + "Ctl()";
    var ctl = eval("new " + usecase); //create controller
    console.log(usecase);

    var exp = "ctl." + op + "(request, response)";
    eval(exp);
});

module.exports = router;