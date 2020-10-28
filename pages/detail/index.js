const {
  globalData: { serverAddress },
} = getApp()

Component({
  properties: {
    uid: {
      type: String,
    },
  },
  data: {
    device: {},
    methods: [],
  },
  ready() {
    wx.request({
      url: 'http://114.212.87.5:30822/apis/resource',
      success: ({ data: devices }) => {
        const device = devices.find((d) => d.uid === this.properties.uid)

        wx.request({
          url: device.gateway + '/api',
          success: ({ data: methods }) => {
            console.log(methods)
            this.setData({
              device,
              methods,
            })
          },
        })
      },
    })
  },
  methods: {
    uploadFile() {
      wx.chooseMessageFile({
        success: (res) => {
          console.log(res.tempFilePath)
        },
      })
    },
  },
})
