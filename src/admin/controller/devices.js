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

  async delAction() {
    let model = this.model('devices');
    let post = this.post();
    let delId = await model.where({
      id: post.id
    }).delete();
    return this.success(delId);
  }

  async updateAction() {
    let model = this.model('devices');
    let post = this.post();
    console.log(post);
    let updateId = await model.where({
      id: post.id
    }).update({
      devCode: post.devCode,
      catelogCode: post.catelogCode,
      devType: post.devType,
      alias: post.alias,
      name: post.name,
      manufactures: post.manufactures,
      gbName: post.gbName
    });
    return this.success(updateId)
    // let data = await model.where({
    //   id: updateId
    // }).find();
    // return this.json({
    //   code: 0,
    //   msg: 'success',
    //   count: 1,
    //   data: data
    // });
  }

  async addAction() {
    let model = this.model('devices');
    let post = this.post();
    let addId = await model.add({
      devCode: post.devCode,
      catelogCode: post.catelogCode,
      devType: post.devType,
      alias: post.alias,
      name: post.name,
      manufactures: post.manufactures,
      gbName: post.gbName
    })
  }
}