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

  async viewAction() {
    return this.display();
  }

  async getchartcontentAction() {
    let id = this.get('query');
    let mo = this.model('hz_uviews');
    let data = await mo.where({
      id: id
    }).find();
    if (!data) {
      return this.fail(200, "无法找到");
    } else {
      //console.log(data);
      return this.success(data.content);
    }




  }

  async svgdesignerAction() {
    return this.display();
  }


  async svgAction() {
    return this.display();
  }

  async leafletAction() {
    return this.display();
  }

  async uploadAction() {
    let model = this.model('pic');
    let post = this.post();
    console.log(post);    
    let uploadId = await model.add({'vidPublicUrl': '/static/img/test.png'});
    let data = await model.where({id: uploadId}).find();
    return this.json({
      code: 0,
      msg: "success",
      data: data
    })
  }
}