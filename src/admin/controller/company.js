'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  // companyList
  async indexAction() {
    return this.display();
  }

  async getcompaysAction() {
    let model = this.model('companys');
    let data = await model.select();
    return this.success(data);
  }

  // 分页查询写法
  async getcompayspageAction() {
    let page = this.post('page') || 1;
    let limit = this.post("limit") || 10;

    let model = this.model('companys');
    let data = await model.page(page, limit).countSelect();
    return this.json({
      code: 0,
      msg: "",
      count: data.count,
      data: data.data
    });
  }

  // addCompany
  async addAction() {
    let model = this.model('companys');
    let company = this.post();
    console.log(company);
    let insertId = await model.add(company);
  }

  async delAction() {
    let model = this.model('companys');
    let id = this.post('id');
    let delId = await model.where({
      id: ['=', id]
    }).delete();
    return
  }
}