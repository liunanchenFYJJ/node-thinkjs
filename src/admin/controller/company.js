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

  async getcompanysAction() {
    let model = this.model('companys');
    let query = this.post();
    let data = await model.where(query).find();
    return this.success(data);
  }

  // 分页查询写法
  async getcompanyspageAction() {
    let page = this.post('page') || 1;
    let limit = this.post("limit") || 10;
    // 查询语句
    let query = this.post('data');
    console.log(query);


    let model = this.model('companys');
    let data = await model.where(query).page(page, limit).countSelect();
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
    let data = this.post();
    console.log(data.id + 'add');
    let result = await model.thenAdd(data, {
      id: data.id
    });
    // return this.redirect('index');            
    // return this.display();
    return this.success(result);
  }

  // // 更新公司信息
  async updateAction() {
    let model = this.model('companys');
    let data = this.post();
    console.log(data);
    let updateId = await model.where({
      id: data.id
    }).update({
      cropName: data.cropName,
      cropShortName: data.cropShortName,
      cropType: data.cropType,
      cropAddress: data.cropAddress,
      cropUrl: data.cropUrl,
      cropNotes: data.cropNotes,
    });
    return this.success(data);
  }

  // 删除公司信息
  async delAction() {
    let model = this.model('companys');
    let data = this.post();
    // console.log(data + '>>>')
    let delId = await model.where({
      id: data.id
    }).delete();
    return this.success(data);
  }
}