// pages/home/home.js
import {HIT, SOON, BOARD} from '../../common/const.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pageNo: 1,
    currentType: 'hit',
    movieColumn: {
      [HIT]: {
        page: 1, 
        list: [
          { id: "001", imageUrl: "../../../../assets/images/scroll-view/movie_1.jpg", text: "八佰", dateDesc: "2020-11-05 上映" },
          { id: "002", imageUrl: "https://pic2.iqiyipic.com/image/20201112/36/c7/v_128042334_m_601_m10_260_360.webp", text: "花木兰", dateDesc: "2020-11-14 上映" },
          { id: "003", imageUrl: "https://pic2.iqiyipic.com/image/20201113/c3/8f/v_131397337_m_601_m20_260_360.webp", text: "急先锋", dateDesc: "2020-11-15 上映" },
          { id: "004", imageUrl: "../../../../assets/images/scroll-view/movie_4.jpg", text: "哈利波特与魔法", dateDesc: "2020-10-08 上映" },
          { id: "005", imageUrl: "../../../../assets/images/scroll-view/movie_5.jpg", text: "寻梦环游记", dateDesc: "2020-10-10 上映" },
          { id: "006", imageUrl: "../../../../assets/images/scroll-view/movie_6.jpg", text: "假面饭店", dateDesc: "2020-10-28 上映" }]
      },
      [SOON]: {
        page: 1, 
        list: [
          { id: "001", imageUrl: "../../../../assets/images/scroll-view/movie_7.jpg", text: "绝地反击", dateDesc: "2020-8-20 上映" },
          { id: "002", imageUrl: "../../../../assets/images/scroll-view/movie_8.jpg", text: "无疯也超浪", dateDesc: "2020-09-10 上映" },
          { id: "003", imageUrl: "../../../../assets/images/scroll-view/movie_9.jpg", text: "站玄武", dateDesc: "2020-10-20 上映" },
          { id: "004", imageUrl: "../../../../assets/images/scroll-view/movie_10.jpg", text: "清平客栈", dateDesc: "2020-10-08 上映" },
          { id: "005", imageUrl: "../../../../assets/images/scroll-view/movie_11.jpg", text: "双龙记", dateDesc: "2020-10-10 上映" },
          { id: "006", imageUrl: "../../../../assets/images/scroll-view/movie_12.jpg", text: "ABOMINABLE", dateDesc: "2020-10-28 上映" }]
      },
      [BOARD]: {
        page: 1, 
        list: [
          { id: "001", imageUrl: "../../../../assets/images/scroll-view/movie_13.jpg", text: "CASINO ROYALE", dateDesc: "2020-8-20 上映" },
          { id: "002", imageUrl: "../../../../assets/images/scroll-view/movie_14.jpg", text: "GOOZILLA", dateDesc: "2020-09-10 上映" },
          { id: "003", imageUrl: "../../../../assets/images/scroll-view/movie_15.jpg", text: "BOB", dateDesc: "2020-10-20 上映" },
          { id: "004", imageUrl: "../../../../assets/images/scroll-view/movie_16.jpg", text: "SCARY MOVIE", dateDesc: "2020-10-08 上映" },
          { id: "005", imageUrl: "../../../../assets/images/scroll-view/movie_17.jpg", text: "JOKER", dateDesc: "2020-10-10 上映" }]
      }
    },
    titles: [
      "真正热播", "即将上映", "排行榜"
    ],
    swiperData: [
      "https://puui.qpic.cn/media_img/lena/PIC9v8c98_580_1680/0",
      "../../assets/images/swiper/swiper_2.jpg",
      "../../assets/images/swiper/swiper_3.jpg",
      "https://puui.qpic.cn/vupload/0/1604629644054_jmntgavqr3.jpg/0",
      "../../assets/images/swiper/swiper_5.jpg",
      "../../assets/images/swiper/swiper_6.jpg",
      "../../assets/images/swiper/swiper_7.jpg",

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
  onLoad: function () {

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
    // 显示标题栏进度条效果
    wx.showNavigationBarLoading();
    setTimeout(() => {
      // 取消标题栏进度条效果
      wx.hideNavigationBarLoading();
      // 取消页面刷新动画
      wx.stopPullDownRefresh();
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let _pageNo = this.data.pageNo + 1;
    this.setData({
      pageNo: _pageNo
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchItemEvent(event) {
    const key = event.detail.index
    let currentType = ''
    switch (key) {
      case 0:
        currentType = HIT
        break;
      case 1:
        currentType = SOON
        break;
      case 2:
        currentType = BOARD
        break;
    }
    this.setData({
      currentType: currentType
    })
  }
})