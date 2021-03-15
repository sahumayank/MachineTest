var BaseBean = require('./BaseBean');
class Product extends BaseBean {
    constructor() {
        super();
        this.name = '';
        this.price = 0;
        this.category2_ID = 0;
        this.category2_Name = "";
        
    }

    populateResult(res) {
        this.id = res.ID;
        this.name = res.NAME;
        this.price = res.PRICE;
        this.category2_ID = res.CATEGORY2_ID;
        this.category2_Name = res.CATEGORY2_NAME;

    };

    populateRequest(body) {
        if (body.id) {
            this.id = body.id;
        }
        if (body.name) {
            this.name = body.name;
        }
        if (body.price) {
            this.price = body.price;
        }

        if (body.category2_ID) {
            this.category2_ID = body.category2_ID;
        }

        if (body.category2_Name) {
            this.category2_Name = body.category2_Name;
        }


        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = Product;