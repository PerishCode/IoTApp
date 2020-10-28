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
      url: 'http://114.212.87.5:30822/apis/resource',
      method: 'GET',
      success: ({ data }) => {
        this.setData({
          devices: data,
        })
      },
      fail: (res) => console.log(res),
    })
  },
  methods: {
    changeMode() {
      this.setData({
        mode: this.data.mode === 'list' ? 'grid' : 'list',
      })
    },
    onItemTap({
      currentTarget: {
        dataset: { uid },
      },
    }) {
      wx.$.navigation.to('detail', { uid })
    },
  },
})
