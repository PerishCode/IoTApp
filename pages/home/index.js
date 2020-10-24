//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    devices: [],
  },
  onLoad: function () {
    this.setData({
      success: '已发起请求',
    })

    wx.request({
      url: 'http://192.168.31.29:7777/api/devices',
      method: 'GET',
      success: (res) => {
        this.setData({
          success: '请求成功',
          devices: res.data,
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
