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

  // header 获取 userinfo
  async getuserinfoAction() {
    let userInfo = await this.session('userInfo');
    return this.success(userInfo);
  }

  echartsAction() {
    //auto render template file index_index.html
    return this.display();
  }


}