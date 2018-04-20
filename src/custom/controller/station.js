'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    mainAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async getprojectAction() {
        let model = this.model('projects');
        let post = this.post();
        let data = await model.where({
            prjCode: post.prjCode
        }).select();
        return this.success(data);
    }

    dataviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    systemviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    gongkuangviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    deviceviewAction() {
        //auto render template file index_index.html
        return this.display();
    }

    viewlistAction() {
        //auto render template file index_index.html
        return this.display();
    }

    workplanAction() {
        //auto render template file index_index.html
        return this.display();
    }
}