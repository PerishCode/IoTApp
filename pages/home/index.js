//index.js
//获取应用实例
const {
  globalData: { serverAddress },
} = getApp()

Page({
  data: {
    devices: [],
  },
  onLoad: function () {
    wx.request({
      url: `${serverAddress}/api/devices`,
      method: 'GET',
      success: ({ data }) => {
        this.setData({
          devices: data,
        })
      },
    })
  },
  toDetail({ detail: id }) {
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}`,
    })
  },
})
