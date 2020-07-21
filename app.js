//app.js
App({
  onLaunch: function () {
    require('./sdk-wechat.3.12.0');

    let clientID = '47584ca38534b1d99d46';
    wx.BaaS.init(clientID);
  },
  globalData: {
  }
})