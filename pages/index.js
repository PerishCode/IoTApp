const {
  globalData: { statusBarHeight, navigationBarHeight },
} = getApp()

Component({
  data: {
    // messageQueue: [
    //   {
    //     producer: 'airPurifier',
    //     message: 'airPurifier has been turn off.',
    //     consumer: 'people',
    //   },
    //   {
    //     producer: 'airPurifier',
    //     message: 'airPurifier has been turn off.',
    //     consumer: 'people',
    //   },
    //   {
    //     producer: 'airPurifier',
    //     message: 'airPurifier has been turn off.',
    //     consumer: 'people',
    //   },
    // ],
    messageQueue: [],
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
      // pageStack: ['home', 'message'],
      // currentPage: 'message',
      // pageStack: ['home', 'detail'],
      // currentPage: 'detail',
      pageStack: ['home'],
      currentPage: 'home',
      parameters: {
        uid: '927d4728-d328-4c97-ae54-5fc286cecf38',
      },
    })

    wx.onSocketMessage(({ data }) => {
      // console.log(data)

      const { messageQueue } = this.data

      const message = JSON.parse(data)

      // if (message.consumer != 'mq')

      messageQueue.push(message)

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
