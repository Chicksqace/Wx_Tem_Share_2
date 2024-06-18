// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    headerItems: ['电影院'],
    navItems:[
      {title:'区域',imageUrl: '../../assets/images/searchbar/option_icon.png'},
      {title:'品牌',imageUrl: '../../assets/images/searchbar/option_icon.png'},
      {title:'距离',imageUrl: '../../assets/images/searchbar/option_icon.png'},
      {title:'筛选',imageUrl: '../../assets/images/searchbar/option_icon.png'}
    ],
    movieCardData: [
      {
        movieTitle: "人气影院",
        addresTitle: "嘉年华国际影城(北路店)",
        popTitle: "人气5000",
        addresDetail: "北京市昌平区",
        shopTitle1: "零食",
        shopTitle2: "MAX厅",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "1.1km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥19.9起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      },
      {
        movieTitle: "知名影院",
        addresTitle: "万达国际影城(北路店)",
        popTitle: "人气6000",
        addresDetail: "北京市昌平区",
        shopTitle1: "美甲",
        shopTitle2: "MAX厅",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "2.8km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥39.9起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      },
      {
        movieTitle: "火热影院",
        addresTitle: "嘉年华国际影城(北路店)",
        popTitle: "人气9890",
        addresDetail: "北京市昌平区",
        shopTitle1: "洗浴",
        shopTitle2: "午夜DJ",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "3.2km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥29.99起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      },
      {
        movieTitle: "人气影院",
        addresTitle: "嘉年华国际影城(北路店)",
        popTitle: "人气5000",
        addresDetail: "北京市昌平区",
        shopTitle1: "零食",
        shopTitle2: "MAX厅",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "1.1km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥19.99起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      },
      {
        movieTitle: "人气影院",
        addresTitle: "嘉年华国际影城(北路店)",
        popTitle: "人气5000",
        addresDetail: "北京市昌平区",
        shopTitle1: "零食",
        shopTitle2: "MAX厅",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "1.1km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥19.99起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      },
      {
        movieTitle: "人气影院",
        addresTitle: "嘉年华国际影城(北路店)",
        popTitle: "人气5000",
        addresDetail: "北京市昌平区",
        shopTitle1: "零食",
        shopTitle2: "MAX厅",
        shopTitle3: "中国剧目",
        shopTitle4: "停车场",
        distanse: "1.1km",
        discount1: "开通会员8折购票",
        discount2: "组团购票优惠8折起",
        price: "￥19.99起",
        gloryLableImageUrl: "../../assets/images/movie-card/fire_icon.png",
        proLableImageUrl: "../../assets/images/movie-card/rank_icon.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})