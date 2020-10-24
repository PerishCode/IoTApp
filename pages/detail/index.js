Page({
  data: {
    device: null,
  },
  onLoad({ id }) {
    wx.request({
      url: `http://192.168.31.29:7777/api/devices/${id}`,
      success: ({ data }) => {
        this.setData({
          device: data,
        })
      },
    })
  },
})
