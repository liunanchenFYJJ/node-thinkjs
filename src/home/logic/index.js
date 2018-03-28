'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction() {

  }

  // 对数据进行 预处理 命名方式与controller对应
  async loginAction() {
    console.log('logic')
    var self = this;
    if (self.isPost()) {
      this.allowMethods = 'post'; //只允许POST请求
      // 参数验证
      let rules = {
        name: {
          required: true,
          string: true,
          default: 'jj'
        }
      }
    }
  }
}