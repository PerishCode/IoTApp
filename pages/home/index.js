//index.js
//获取应用实例
const {
  globalData: { serverAddress },
} = getApp()

Page({
  data: {
    devices: [],
    mode: 'list',
    gridIconSize: 50,
    listIconSize: 40,
  },
  onLoad() {
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
  onItemTap({
    currentTarget: {
      dataset: { id },
    },
  }) {
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}`,
    })
  },
  changeMode() {
    const { mode } = this.data
    this.setData({
      mode: mode === 'list' ? 'grid' : 'list',
    })
  },
  toMessage() {
    wx.navigateTo({
      url: `/pages/message/index`,
    })
  },
})
