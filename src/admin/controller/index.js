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

  echartsAction() {
    //auto render template file index_index.html
    return this.display();
  }

  async loginAction() {
    var self = this;
    if (self.isPost()) {
      let username = self.post('username');
      let password = self.post('password');
      let model = await this.model('userinfo');
      return model.where({
        username: username,
        password: password
      }).find().then(function (data) {
        if (isEmpty(data)) {
          return self.error(403, '用户或者密码不正确');
        } else {
          return self.session('userinfo', data);
        }
      }).then(function () {
        return self.redirect('index');
      })
    }
    return self.display();

  }

  async logoutAction() {
    await this.session();
    return this.redirect('login');
  }
}