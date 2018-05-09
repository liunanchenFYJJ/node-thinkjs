'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async getprojectlistAction() {
        let model = this.model('projects');
        let page = this.post('page');
        let limit1 = this.post('limit');
        let post = this.post();
        if (page) {
            var data = await model.where('1=1').select();
            var count = await model.where('1=1').count();
        } else {
            var data = await model.where(post).select();
            var count = await model.where(post).count();
        }
        return this.json({
            data: data,
            code: 0,
            msg: 'success',
            count: count
        });
    }

    async searchprjAction() {
        let model = this.model('projects');
        let post = this.post();
        let data = await model.where({
            prjShortName: post.prjName
        }).select();
        return this.success(data);
    }
}