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

  // getlist && query
  // async getlistAction() {
  //   let model = this.model('users');
  //   let page = this.post('page');
  //   let limit = this.post('limit');
  //   let post = this.post();
  //   console.log(post);
  //   if (!post.devCode) {
  //     post = '1=1';
  //   }
  //   let data = await model.where(post).page(page, limit).countSelect();
  //   // 把取到数据按照layui-table默认的格式传回
  //   return this.json({
  //     count: data.count,
  //     data: data.data,
  //     code: 0,
  //     msg: 'success'
  //   });
  // }

  async getlistAction() {
    let model = this.model('users');
    let page = this.post('page');
    let limit = this.post('limit');
    // 搜索框填了才有
    let post = this.post();
    if (!post.devCode) {
      let data = await model.page(page, limit).countSelect();
      return this.json({
        count: data.count,
        data: data.data,
        code: 0,
        msg: 'success'
      });
    } else {
      let data = await model.where({
        devCode: post.devCode
      }).page(page, limit).countSelect();
      return this.json({
        count: data.count,
        data: data.data,
        code: 0,
        msg: 'success'
      });
    }          
    // 把取到数据按照layui-table默认的格式传回
    // return this.json({
    //   count: data.count,
    //   data: data.data,
    //   code: 0,
    //   msg: 'success'
    // });
  }

  // del
  async delAction() {
    let model = this.model('users');
    let post = this.post();
    let delId = await model.where({
      id: post.id
    }).delete();
    return this.success(delId);
  }

  // update
  async updateAction() {
    let model = this.model('users');
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

  // add
  async addAction() {
    let model = this.model('users');
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
    return this.success(addId);
  }

  async queryAction() {
    let model = this.model('users');
    let post = this.post();
    console.log(post);
    if (!post.devCode) {
      post = '1=1';
    }
    let data = await model.where(post).page(1, 10).select();
    return this.success(data);
  }
}