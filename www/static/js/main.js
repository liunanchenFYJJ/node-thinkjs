/*
 * @Author: peterqin 
 * @Date: 2017-09-05 10:07:05 
 * @Last Modified by: peter_qin@hw-iot.com
 * @Last Modified time: 2017-09-06 18:33:28
 */

//  自执行函数，避免污染全局环境
(function(){

  // layui使用方法
 layui.use(["element", "layer", "util"], function () {
  var util = layui.util;
  var layer = layui.layer;
  var element = layui.element;
  var ishide = false;
  var $ = layui.$;
  

  

  $("#showandhide").on('click',function(){

    if (!ishide) {
      $(".layui-side").animate({
        left: "-200px"
      });
      $(".layui-body").animate({
        left: "0px"
      });
      $(".layui-footer").animate({
        left: "0px"
      });
      var tishi = layer.msg("鼠标移动至左侧显示!", {
        time: 1000
      });
      layer.style(tishi, {
        top: "auto",
        bottom: "50px"
      });

      ishide = true;
    } else {
      $(".layui-side").animate({
        left: "0px"
      });
      $(".layui-body").animate({
        left: "200px"
      });
      $(".layui-footer").animate({
        left: "200px"
      });
      ishide = false;
    }

    // window.eventDispatcher.trigger("Onanimate", {}, {});

  });
  util.fixbar({
    bar1: "&#xe63c",
    // bar2:'&#xe611',
    bgcolor: "#aaa",
    css: {
      bottom: "45px",
      right: "45px",
      height: "24px",
      width: "24px"
    },
    click: function (type) {
      if (type === "bar1") {
        layer.prompt({title: '运维日志助手', formType: 2}, function(pass, index){
          layer.close(index);
        
        });
      }
    }
  });

  $(document).mousemove(function (e) {
    if (e.pageX == 0 && ishide) {
      $(".layui-side").animate({
        left: "0px"
      });
      $(".layui-body").animate({
        left: "200px"
      });
      // $(".layui-footer").animate({
      //   left: "200px"
      // });
      ishide = false;
      window.eventDispatcher.trigger("Onanimate", {}, {});
    }
  });

  $(".layui-nav-child a").click(function (e) {
    e.preventDefault();

    var href = e.target.attributes.href.value;

    var token = sessionStorage.getItem("token");
    console.log("token:" + token);
    console.log("get:" + href);
    if (href != "#") {
      // window.eventDispatcher.trigger("onClickMenu", href, {});
     // $("#wrapp").load(href);
      $.get(href, {}, function (result) {
        //console.log(result);
       // $("#wrapp").html(result);
       var elem = $('<div>'+ result +"</div>");

    $("#wrapp").empty().html(elem);
       // $("#wrapp").empty().html(result);
      });
    }
  });

  /**
   * 只显示一级菜单
   */
  var initShowOneMenu =function()
  {
    var lis = $('#nav_list').children("li");
    lis.each(function () {
      $(this).on('click', function () {
          $(this).siblings().removeClass('layui-nav-itemed');
      });
  });
  }
  

  $("#logout").click(function () {
    layer.confirm(
      "您是是否要退出系统？", {
        btn: ["否", "是"], //按钮
        icon: 6
      },
      function (index) {
        layer.close(index);
      },
      function () {
        $.post("/home/login/logout", {}, function (token) {
          console.log(token);
          sessionStorage.setItem("token", {});
          window.location.href = "/";
        });
      }
    );
  });
  var index=0;

  var thems=['Aqua Marine',
            'Reef',
            'Scooter',
            'Turquoise flow',
            'Visions of Grandeur'
          ];

  var colorThem=['linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)',
                'linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)',
                'linear-gradient( 140deg, #65FDF0 10%, #1D6FA3 100%)',
                'linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)',
                'linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)',
                'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)'
              ]
          
  $('#themset').click(function(){
    
    var i= Math.random()*(colorThem.length-0)+0;
    console.log(i);
    var x = parseInt(i);
    console.log(thems[x]);
  //   $("body").css({
  //     "background": "url('static/img/"+thems[x]+".jpg')no-repeat center center fixed"
  // });
   $("body").css("background-image",colorThem[x]);
  });

  var treeMobile = $('.site-tree-mobile')
  ,shadeMobile = $('.site-mobile-shade')

  treeMobile.on('click', function(){
    $('body').addClass('site-mobile');
   // alert("ok");
  });

  shadeMobile.on('click', function(){
    $('body').removeClass('site-mobile');
  });

  $("#voice").click(function () {
    layer.prompt({
      title: "输入您要播报的内容",
      formType: 2
    }, function (pass, index) {
      Jarvis.say(pass);
      
    });
    
  });



  $('#wrapp').on('unload',function(){
    console.log("wrapp unload");
  })

 ///$("#wrapp").load('/power/index/index');

  $.get("/power/index/index", {}, function (result) {
    //$("#wrapp").html(result);
    var elem = $('<div>'+ result +"</div>");

    $("#wrapp").empty().html(elem);
  });

  
  initShowOneMenu();

  

  
});

})();
