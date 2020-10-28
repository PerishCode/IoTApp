Component({
  properties: {
    title: {
      type: String,
    },
  },
  data: {
    collapse: false,
  },
  methods: {
    changeMode() {
      this.setData({
        collapse: !this.data.collapse,
      })
    },
  },
})
