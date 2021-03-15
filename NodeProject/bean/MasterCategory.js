var BaseBean = require('./BaseBean');
class MasterCategory extends BaseBean {
    constructor() {
        super();
        this.name = '';
        this.description = "";
    }

    populateResult(res) {
        this.id = res.ID;
        this.name = res.NAME;
        this.description = res.DESCRIPTION;
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

        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = MasterCategory;