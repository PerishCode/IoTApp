//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
  globalData: {
    serverAddress: 'http://192.168.80.124:7777',
  },
})
