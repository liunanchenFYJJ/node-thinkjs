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

  async getlistAction() {
    let model = this.model('devices');
    let page = this.post('page');
    let limit = this.post('limit');
    let post = this.post();
    console.log(post);
    let data = await model.page(page, limit).countSelect();
    // 把取到数据按照layui-table默认的格式传回
    return this.json({
      count: data.count,
      data: data.data,
      code: 0,
      msg: 'success'
    });
  }
}