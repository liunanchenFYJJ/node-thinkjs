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

  // 更新公司信息
  async updateAction() {
    let model = this.model('companys');
    let data = this.post();
    console.log(data);
    let updateId = await model.where({
      id: data.id
    }).update({cropName: 'jj'});
    return this.success(data);
  }

  // 删除公司信息
  async delAction() {
    let model = this.model('companys');
    let data = this.post();
    console.log(data + '>>>')
    let delId = await model.where({
      id: data.id
    }).delete();
    return this.success(data);
  }
}