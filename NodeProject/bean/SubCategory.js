var BaseBean = require('./BaseBean');
class SubCategory extends BaseBean {
    constructor() {
        super();
        this.name = '';
        this.description = "";
        this.category_ID = 0;
        this.category_Name=""

    }

    populateResult(res) {
        this.id = res.ID;
        this.name = res.NAME;
        this.description = res.DESCRIPTION;
        this.category_ID = res.CATEGORY_ID;
        this.category_Name = res.CATEGORY_NAME;

    };

    populateRequest(body) {
        if (body.id) {
            this.id = body.id;
        }
        if (body.name) {
            this.name = body.name;
        }
        if (body.description) {
            this.description = body.description;
        }
        if (body.category_ID) {
            this.category_ID = body.category_ID;
        }
        if (body.category_Name) {
            this.category_Name = body.category_Name;
        }

        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = SubCategory;