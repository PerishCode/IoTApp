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
    serverAddress: 'http://172.27.133.39:7777',
  },
})
