(function () {
  layui.use(["element", "layer", "util"], function () {
    var util = layui.util;
    var layer = layui.layer;
    var ishide = false;
    var element = layui.element;
    var $ = layui.$;

    util.fixbar({
      bar1: "&#xe60f",
      // bar2:'&#xe611',
      bgcolor: "transparent!important",
      css: {
        top: "5px",
        left: "200px",
        height: "24px",
        width: "24px"
      },
      click: function (type) {
        if (type === "bar1") {
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
        // window.eventDispatcher.trigger("Onanimate", {}, {});
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
        $.get(href, {}, function (result) {
          var elem = $('<div>' + result + "</div>");

          $("#wrapp").empty().html(elem);
        });
      }
    });

    /**
     * 只显示一级菜单
     */
    var initShowOneMenu = function () {
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
          $.post("/login/logout", {}, function (token) {
            console.log(token);
            sessionStorage.setItem("token", {});
            window.location.href = "/";
          });
        }
      );
    });

    var treeMobile = $('.site-tree-mobile'),
      shadeMobile = $('.site-mobile-shade')

    treeMobile.on('click', function () {
      $('body').addClass('site-mobile');
      // alert("ok");
    });

    shadeMobile.on('click', function () {
      $('body').removeClass('site-mobile');
    });

    $("#voice").click(function () {

      console.log('clcik...')
      layer.prompt({
        title: "输入您要播报的内容",
        formType: 2
      }, function (pass, index) {
        Jarvis.say(pass);


      });
    });

    $.get("/custom/station/main", {}, function (result) {

      var elem = $('<div>' + result + "</div>");

      $("#wrapp").empty().html(elem);
      // $("#wrapp").empty();
      // $("#wrapp").html(result);
      //$("#wrapp").empty().append(result);
    });


    initShowOneMenu();


  });

})();