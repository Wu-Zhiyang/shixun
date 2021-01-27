const stuDao = require('../dao/app1Dao')
const cz = "off"
const iot = require('alibabacloud-iot-device-sdk');
const device = iot.device({
  productKey: 'a14S88M2P8w', //将<productKey>修改为实际产品的ProductKey
  deviceName: 'TEMP',//将<deviceName>修改为实际设备的DeviceName
  deviceSecret: '8fb15d0268a4c7f72926cdf6a51e2607',//将<deviceSecret>修改为实际设备的DeviceSecret
})
device.on('connect', () => {
  //将<productKey> <deviceName>修改为实际值
  device.subscribe('/a14S88M2P8w/TEMP/user/get');
  // console.log('connect successfully!');
  //发送消息给谁
  device.publish('/a14S88M2P8w/TEMP/user/update', 'hello world!');
});
device.on('message', (topic, payload) => {
  //     console.log(topic, payload.toString());
});

module.exports = {
  temp(req, resp) {
    //var t2 = new Date().toLocaleString();
    const id = req.params['id'];
    const values = req.params['values']
    const wen = parseInt(values);
    //console.log(wen)
    var zz = [id, 'temp', values, cz];
    var zzz = [values, cz, id]
    var sq = "INSERT INTO device (id,type,value,cz) VALUES (?,?,?,?)";
    stuDao.getStuDao(sq, zz, function (err, result) {
      if (err) {
        // console.log('[SELECT ERROR] - ',err.message);
        return;
      }
    })

    var sql = 'UPDATE device SET value = ?, cz= ? WHERE id = ?';
    stuDao.getStuDao(sql, zzz, function (err, result) {
      if (err) {
        //console.log('[SELECT ERROR] - ',err.message);
        return;
      }
    })
    device.postProps({
      CurrentTemperature: wen
    }, (res) => {
    });
    resp.end();
  },
}