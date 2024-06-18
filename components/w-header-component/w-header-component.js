// pages/movie/components/w-child-top/w-child-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(event) {
      const index = event.target.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('handlerTabControlEvent',{index:index},{})
    }
  }
})
