// pages/home/components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      valur: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemTab(event) {
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("switchItem",{index:index},{})
    }
  }
})
