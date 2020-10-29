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
        // console.log(devices)

        const device = devices.find((d) => d.uid === this.properties.uid)

        // console.log(device)

        wx.request({
          url: device.gateway + '/api',
          success: ({ data: methods }) => {
            this.setData({
              device,
              methods: Array.isArray(methods) ? methods : [],
            })
          },
          header: {
            Context: '',
          },
          fail: (err) => console.log(err),
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
    submit({
      currentTarget: {
        dataset: { url },
      },
      detail: {
        value: { command },
      },
    }) {
      wx.request({
        url: this.data.device.gateway + url + `?value=${command}`,
        method: 'POST',
        success: (res) => {
          // console.log(methods)
          // this.setData({
          //   device,
          //   methods: Array.isArray(methods) ? methods : [],
          // })
          // console.log(res)
        },
      })
    },
  },
})
