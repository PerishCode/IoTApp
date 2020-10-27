const {
  globalData: { serverAddress },
} = getApp()

Page({
  data: {
    device: null,
  },
  onLoad({ id }) {
    wx.request({
      url: `${serverAddress}/api/devices/${id}`,
      success: ({ data }) => {
        this.setData({
          device: data,
        })
      },
    })
  },
})
