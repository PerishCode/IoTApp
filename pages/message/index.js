Page({
  data: {
    messageQueue: ['请求打印机'],
  },
  onLoad() {
    wx.onSocketMessage((message) => {
      console.log(message)
    })
  },
})
