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
        let post = this.post();
        console.log(post);
        let data = await model.where(post).select();
        let count = await model.where(post).count();
        return this.json({
            data: data,
            code: 0,
            msg: 'success',
            count: count
        });
    }
}