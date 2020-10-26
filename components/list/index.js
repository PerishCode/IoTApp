Component({
  properties: {
    source: { type: Array, value: [] },
  },
  methods: {
    onItemTap({
      target: {
        dataset: { id },
      },
    }) {
      this.triggerEvent('itemTap', id)
    },
  },
  externalClasses: ['side-class'],
})
