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

  // mapAction(){
  //   //auto render template file index_index.html
  //   return this.display();
  // }

  contentAction() {
    // let model = this.model('projects');
    // let post = this.post();
    // let data = model.where({
    //   id: post.id
    // }).find();
    // return this.success(data);
    return this.display();    
  }

  operatorAction() {
    //auto render template file index_index.html
    return this.display();
  }

  warnsAction() {
    //auto render template file index_index.html
    return this.display();
  }

  reportAction() {
    //auto render template file index_index.html
    return this.display();
  }

  videosAction() {
    //auto render template file index_index.html
    return this.display();
  }
}