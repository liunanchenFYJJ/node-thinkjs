'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    testAction() {
        let name = this.post('name');
        let pw = this.post('pw');
        let data = this.model('test').testIn(name, pw);

        this.success(data); //返回数据
        console.log(data)
    }

    __before() {
        console.log('前置方法')
    }

    __after() {
        console.log('后置操作')
    }
}