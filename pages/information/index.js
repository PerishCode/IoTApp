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
    this.request()
    this.setData({
      interval: setInterval(this.request.bind(this), 2000),
    })
  },
  detached() {
    clearInterval(this.data.interval)
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
        // url,
        method: 'POST',
        success: (res) => {
          // console.log(methods)
          // this.setData({
          //   device,
          //   methods: Array.isArray(methods) ? methods : [],
          // })
          console.log(res)

          wx.showToast({
            title: '已成功发起调用',
            icon: 'success',
            duration: 1000,
          })
        },
      })
    },
    request() {
      wx.request({
        url: 'http://114.212.87.5:30822/apis/resource',
        success: ({ data: devices }) => {
          // console.log(devices)

          const device = devices.find(
            (d) => d.uid === '3965a2e2-9655-45c4-b804-7e91469da381'
          )

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
  },
})
