Component({
  properties: {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  data: {
    collapse: false,
  },
  ready() {
    this.setData({
      collapse: this.properties.type !== 'POST',
    })
  },
  methods: {
    changeMode() {
      this.setData({
        collapse: !this.data.collapse,
      })
    },
  },
})
