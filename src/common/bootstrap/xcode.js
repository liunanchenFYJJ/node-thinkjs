(function () {
    var mqtt = require('mqtt');
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'thinkjs'
    });
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        // console.log('connected as id ' + connection.threadId);
        // console.log(connection.config);
    });

    // connection.query('SELECT * from hz_points where prjCode = "PRJ_001"', function (err, rows) {
    //     console.log(rows);
    // });
    var client = mqtt.connect('ws://hw-iot.com:8083/mqtt')
    var prjCode = 'PRJ_HJSSU74Ez';
    var ptCode = "1"; //ptTid    
    var item = {
        value: Math.random() * (6 - 5) + 5,
        qos: '0',
        ptCode: '1',
        chSubType: '1',
        atime: ''

    }

    client.on('connect', function () {
        client.subscribe("$hz/iot/rt/" + prjCode + "/" + ptCode + "/#");
        // client.publish('presence', 'Hello mqtt')
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString())
        //client.end()
    })

    setInterval(function () {
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/1", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '1',
            atime: ''

        }));
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/2", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '2',
            atime: ''

        }));
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/3", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '3',
            atime: ''

        }));
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/4", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '4',
            atime: ''

        }));
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/5", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '5',
            atime: ''

        }));
        client.publish("$hz/iot/rt/" + prjCode + "/" + ptCode + "/6", JSON.stringify({
            value: Math.random() * (6 - 5) + 5,
            qos: '0',
            ptCode: '1',
            chSubType: '6',
            atime: ''

        }));
    }, 5000);
})()