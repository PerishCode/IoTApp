const {
  globalData: { serverAddress },
} = getApp()

Component({
  data: {
    devices: [],
    mode: 'list',
    gridIconSize: 50,
    listIconSize: 40,
  },
  ready() {
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
  methods: {},
})
