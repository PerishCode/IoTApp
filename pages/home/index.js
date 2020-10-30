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
    this.request()
    this.setData({
      interval: setInterval(this.request.bind(this), 2000),
    })
  },
  detached() {
    clearInterval(this.data.interval)
  },
  methods: {
    request() {
      wx.request({
        // url: 'http://114.212.87.5:30822/apis/resource',
        url: 'http://114.212.87.5:30810/people/api/deviceList',
        method: 'GET',
        success: ({ data: visibleList }) => {
          const visibleSet = new Set(visibleList)

          console.log(visibleSet)

          wx.request({
            url: 'http://114.212.87.5:30822/apis/resource',
            method: 'GET',
            success: ({ data: devices }) => {
              this.setData({
                devices: devices.filter((d) => visibleSet.has(d.uid)),
              })
            },
          })
        },
      })
    },

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
    toMessage() {
      wx.$.navigation.to('message')
    },
  },
})
