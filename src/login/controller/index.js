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

  // async loginAction() {
  //   let model = this.model('users');
  //   let post = this.post();
  //   console.log(post);
  //   let data = await model.where({
  //     usName: post.usName
  //   }).find();
  //   return this.success(data);
  // }

  async loginAction() {
    var self = this;
    if (self.isPost()) {
      let usName = self.post('usName');
      let usPassword = self.post('usPassword');
      let model = await this.model('users');
      return model.where({
          usName: usName,
          usPassword: usPassword
        }).find().then(function (data) {
          if (think.isEmpty(data)) {
            return self.error(403, '用户或者密码不正确');
          } else {
            return self.session('userInfo', data);
          }
        })
        .then(function () {
          return self.redirect('/custom/index/index');
        })
    }
    return self.display();

  }

  async logoutAction() {
    await this.session();
    return this.redirect('/login/index/index');
  }
}