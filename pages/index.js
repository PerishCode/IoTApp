const {
  globalData: { statusBarHeight, navigationBarHeight },
} = getApp()

Component({
  properties: {},
  data: {},
  ready() {
    this.setData({
      statusBarHeight,
      navigationBarHeight,
      pageStack: ['test', 'ding'],
      currentPage: 'ding',
    })
  },
  methods: {
    back() {
      const { pageStack } = this.data

      if (pageStack.length > 1) {
        pageStack.splice(-1, 1)
        this.setData({
          pageStack,
          currentPage: pageStack[pageStack.length - 1],
        })
      }
    },
  },
})
