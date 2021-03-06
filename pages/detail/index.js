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
      // console.log(command)

      // if (url.includes('turnon'))
      //   url =
      //     'http://114.212.87.5:30810/people/api/toggle?value=turn on the machine'
      // if (url.includes('turnoff'))
      //   url =
      //     'http://114.212.87.5:30810/people/api/toggle?value=turn off the machine'

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
  },
})
