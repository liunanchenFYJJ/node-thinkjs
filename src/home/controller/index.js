'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    //auto render template file index_index.html
    // 检查是否有session存在
    let userinfo = await this.session('userinfo');
    if (!think.isEmpty(userinfo)) {
      this.assign('userinfo', userinfo);
    } else {
      return this.redirect('login');
    }
    return this.display();
  }

  // 登录
  async loginAction() {
    var self = this;

    //页面post
    if (self.isPost()) {
      console.log('login')
      let name = self.post('name');
      let age = self.post('age');
      let model = self.model('user');

      let data = await model.where({
        user_name: name,
        user_age: age
      }).find();
      if (think.isEmpty(data)) {
        return self.error(403, '填写错误！');
      } else {
        // 登录成功，加入session
        self.session('userinfo', data);
        return this.redirect('add');
      }
    }
    return self.display();

  }

  // 注销用户
  async logoutAction() {
    await this.session();
    return this.redirect('login');
  }

  // 新增一个用户
  async addAction() {
    let model = this.model('user');
    let formData = this.post();
    let insertId = await model.add({
      user_name: formData.user,
      user_age: formData.age,
      create_date: ['exp', 'CURRENT_TIMESTAMP()']
    });
    return this.display();
  }

  // 删除一个用户
  async delAction() {
    let model = this.model('user');
    let insertId = await model.where({
      user_name: 'jolin'
    }).delete();
    return this.display();
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