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
        let data = await model.select();
        let count = await model.count();
        return this.json({
            data: data,
            code: 0,
            msg: 'success',
            count: count
        });
    }
}