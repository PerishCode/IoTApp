Component({
  properties: {
    title: {
      type: String,
    },
    defaultCollapse: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    collapse: false,
  },
  ready() {
    this.setData({
      collapse: this.properties.defaultCollapse,
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
