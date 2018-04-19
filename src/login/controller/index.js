'use strict';

import Base from './base.js';
var md5 = require('md5');
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
    if (self.isPost()) {
      let usEmail = self.post('usEmail');
      // 使用md5+base64对密码进行加密
      let usPassword = new Buffer(md5(self.post('usPassword'))).toString('base64');
      // var b = new Buffer(usPassword);
      // var s = b.toString('base64');
      console.log(usPassword);      
      let model = await this.model('users');
      return model.where({
          usEmail: usEmail,
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