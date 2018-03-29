(function () {
    layui.use(['layer'], function () {
        var layer = layui.layer;
        var events = window.eventDispatcher;
        var mqtt = null;
        var timer = null;
        var vueMode = {
            prjData: [{
                prjName: '普洛斯20kV变电站',
                cropName: '苏州普洛斯物流园',
                cropType: '服务行业',
                kVa: 1260,
                ckW: 314.56,
                maxkW: 513.48,
                runStatus: 1
            }]
        };
        //vue 实例
        var app1 = new Vue({
            el: '#app',
            data: vueMode,

            filters: {
                time: function (value, formatString) {
                    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
                    return moment(value).format(formatString);
                }
            },
            methods: {

                sensorHistory: function (data) {},
                mydel: function (data) {},
                kpiCheck: function (item) {
                    return 'run'
                }

            }
        });

    });
}());