const {
  globalData: { serverAddress },
} = getApp()

Page({
  data: {
    device: null,
    methods: [
      {
        method: 'getStatus',
        className: 'com.servicematrix.airpurifier_v2.AirPurifierController',
        type: 'GET',
        url: '/api/status',
      },
      {
        method: 'getSpeed',
        className: 'com.servicematrix.airpurifier_v2.AirPurifierController',
        type: 'GET',
        url: '/api/speed',
      },
    ],
  },
  onLoad({ id = 'A' }) {
    wx.request({
      url: `${serverAddress}/api/devices/${id}`,
      success: ({ data }) => {
        this.setData({
          device: data,
        })
      },
    })
  },
  uploadFile() {
    wx.chooseMessageFile({
      success: (res) => {
        console.log(res.tempFilePath)
      },
    })
  },
})
