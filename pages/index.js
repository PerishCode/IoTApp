const {
  globalData: { statusBarHeight, navigationBarHeight },
} = getApp()

Component({
  data: {
    messageQueue: [
      {
        producer: 'airPurifier',
        message: 'airPurifier has been turn off.',
        consumer: 'people',
      },
      {
        producer: 'airPurifier',
        message: 'airPurifier has been turn off.',
        consumer: 'people',
      },
      {
        producer: 'airPurifier',
        message: 'airPurifier has been turn off.',
        consumer: 'people',
      },
    ],
  },
  ready() {
    const { back, to } = this.__proto__

    wx.$ = {}
    wx.$.navigation = {
      back: back.bind(this),
      to: to.bind(this),
    }

    this.setData({
      statusBarHeight,
      navigationBarHeight,
      pageStack: ['home', 'message'],
      currentPage: 'message',
      parameters: {
        uid: 'e2f1eccd-9191-46ea-971b-2a565143a4c8',
      },
    })

    wx.onSocketMessage(({ data }) => {
      const { messageQueue } = this.data
      messageQueue.push(JSON.parse(data))

      console.log(data)
      this.setData({
        messageQueue,
      })
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
    to(page, parameters) {
      this.setData({
        parameters,
        pageStack: this.data.pageStack.concat([page]),
        currentPage: page,
      })
    },
  },
})
