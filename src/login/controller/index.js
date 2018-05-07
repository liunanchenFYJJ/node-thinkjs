'use strict';

import Base from './base.js';
var md5 = require('md5');
var jwt = require('jsonwebtoken');
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {

//     const Influx = require('influx');
//   let influx = new Influx.InfluxDB({
//  host: '39.108.76.49',
//  port:8086,
//  database: 'hz'
  
// })

//    influx.query("select * from power limit 10").then(function(data){
//      console.log(data);
//    });

   //console.log(data);
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
            // 生成token && 解析token
            const secret = 'aaa';
            const token = jwt.sign({
              name: 123
            }, secret, {
              expiresIn: 60 //到期时间
            });
            console.log(token);
            jwt.verify(token, secret, function (err, decoded) {
              if (!err) {
                console.log(decoded.name);
              }
            });
            var decoded = jwt.decode(token, {complete: true});
            console.log(decoded.header);
            console.log(decoded.payload);
            console.log(decoded.signature);
            return self.session('userInfo', data);

            const Influx = require('influx');
            let influx = new Influx.InfluxDB({
           host: '39.108.76.49',
           port:8086,
           database: 'hz'
            
          })
          
             var data =  influx.query("select * from power limit 10")
            //    console.log(data);
            //  });
          
             //console.log(data);
              //auto render template file index_index.html

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