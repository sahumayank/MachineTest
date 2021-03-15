var BaseBean = require('./BaseBean');
class User extends BaseBean{
    constructor() {
        super();
        this.name = '';
        this.email = '';

    }

    populateResult(res) {
        this.id = res.ID;
        this.name = res.NAME;
        this.email = res.EMAIL;
    };

    populateRequest(body) {
        if (body.id) {
            this.id = body.id;
        }
        if (body.name) {
            this.name = body.name;
        }
        if (body.email) {
            this.email = body.email;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = User;









