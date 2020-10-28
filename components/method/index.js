Component({
  properties: {
    title: {
      type: String,
    },
  },
  data: {
    collapse: true,
  },
  methods: {
    changeMode() {
      this.setData({
        collapse: !this.data.collapse,
      })
    },
  },
})
