'use strict';

import Base from './base.js';
const Influx = require('influx');
const influx = new Influx.InfluxDB({
 host: 'localhost',
 database: 'hz'});
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  async testAction()
  {
    
  
  }

  async queryAction()
  {
    let data = await influx.query("select * from power limit 10");
    return this.success(data);
  }

}