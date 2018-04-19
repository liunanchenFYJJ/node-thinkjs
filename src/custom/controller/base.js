'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  // 登陆验证 (其他的controller都是继承base controller)
  async __before() {
    console.log('登陆验证>>>session')
    //部分 action 下不检查
    // let blankActions = ['login'];
    // if (blankActions.indexOf(this.http.action) >= 0) {
    //   return;
    // }
    let userInfo = await this.session('userInfo');
    console.log(userInfo);
    //判断 session 里的 userInfo
    if (think.isEmpty(userInfo)) {
      return this.redirect('/login/index/index');
    }
  }
}