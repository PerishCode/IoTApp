Component({
  properties: {
    messageQueue: {
      type: Array,
    },
  },
  data: {
    collapsed: false,
    modes: ['text'],
    currentMode: 'text',
  },
  methods: {
    changeMode() {
      this.setData({
        collapse: !this.data.collapse,
      })
    },
  },
})
