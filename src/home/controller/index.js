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

  async loginAction() {
    var self = this;

    //页面post
    if (self.isPost()) {
      console.log('login')
      // model负责 处理数据库
      var model = this.model('user');
      let data = await model.select();
      this.success(data);

      //用户登录成功写入Session
      // var name = self.post('name'); //获取post过来的用户名
      // var pwd = self.post('pwd'); //获取post过来的密码
      // return D('User').where({ //根据用户名和密码查询符合条件的数据
      //   name: name,
      //   pwd: md5(pwd)
      // }).find().then(function (data) {
      //   if (isEmpty(data)) {
      //     //用户名或者密码不正确，返回错误信息
      //     return self.error(403, '用户名或者密码不正确');
      //   } else {
      //     return self.session('userInfo', data);
      //   }
      // }).then(function () {
      //   //登录成功跳转
      //   return self.redirect('index');
      // });
    } else {
      //页面加载
      self.assign({
        'title': '管理-登录'
      });
      return self.display();
    }
  }

  async addAction() {
    return this.display();
    // let model = this.model('user');
    // let insertId = await model.add({
    //   user_name: 'jolin',
    //   age: 18,
    //   create_date: ['exp', 'CURRENT_TIMESTAMP()']
    // });
  }

  async adduserAction() {
    let model = this.model('user');
    let formData = this.post();
    let insertId = await model.add({
      user_name: formData.name,
      age: formData.age,
      create_date: ['exp', 'CURRENT_TIMESTAMP()']
    });
  }

}