var UserService = require("./UserService");
var MasterCategoryService = require("./MasterCategoryService");
var SubCategoryService = require("./SubCategoryService")
var ProductService = require("./ProductService")
class ServiceLocator {
  constructor() {
    this.db = 'MySQL';
  }
  static getUserService() {
    return new UserService();
  }
  static getMasterCategoryService() {
    return new MasterCategoryService();
  }
  static getSubCategoryService() {
    return new SubCategoryService();
  }
  static getProductService() {
    return new ProductService();
  }


}
module.exports = ServiceLocator;