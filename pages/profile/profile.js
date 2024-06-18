// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile: {// 用户信息
      userName: '易烊千玺',
      userAvatarUrl: '../../../../assets/images/comment-map/avatar_1.jpeg',
      membershipLevel: '黄金会员',
      membershipLevelImageUrl: '../../../../assets/images/comment-map/crown_icon.png',
      integral: '228',
      discountText: '开通影视卡会员专属8折优惠',
      summary: [
        { text: '已看', total: 800, },
        { text: '想看', total: 300, },
        { text: '讨论', total: 389, },
        { text: '记录', total: 999 }
      ]
    },
    personalCenter:{ //会员中心
      iconUrl: '../../../../assets/images/comment-map/diamand_icon.png',
      content: '会员中心',
      contentDetail: '开通影视卡会员专属8折优惠',
      rightText: '立即开通',
      rightIcon: '../../../../assets/images/comment-map/right_icon.png'   
  },
  menuItems: [// 订单
    {menuTitle: '我的钱包',menuIcon: '../../../../assets/images/comment-map/wallet_icon.png'},
    {menuTitle: '待付款',menuIcon: '../../../../assets/images/comment-map/pay_icon.png'},
    {menuTitle: '待评价',menuIcon: '../../../../assets/images/comment-map/evaluate_icon.png'},
    {menuTitle: '退款',menuIcon: '../../../../assets/images/comment-map/speed_icon.png'},
    {menuTitle: '电影票',menuIcon: '../../../../assets/images/comment-map/movie_a_icon.png'},
    {menuTitle: '演出票',menuIcon: '../../../../assets/images/comment-map/music_icon.png'},
    {menuTitle: '优惠券',menuIcon: '../../../../assets/images/comment-map/coupon_icon.png'},
    {menuTitle: '总积分',menuIcon: '../../../../assets/images/comment-map/wallet_icon.png'}
  ],
  menuCloumnList: [
    {cloumnTitle: '我的收藏',cloumnIcon:'../../../../assets/images/comment-map/collect_icon.png'},
    {cloumnTitle: '我的银行卡',cloumnIcon:'../../../../assets/images/comment-map/movie_card.png'},
    {cloumnTitle: '我的小剧场',cloumnIcon:'../../../../assets/images/comment-map/theatre_icon.png'}
     
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