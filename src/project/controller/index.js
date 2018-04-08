'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    //auto render template file index_index.html
    let model = this.model('projects');
    let data = await model.page(this.get('page'), 10).countSelect();
    this.assign('project', data);
    return this.display();
  }
}