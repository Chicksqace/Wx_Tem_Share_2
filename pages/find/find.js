// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerItems: ['发现'],
    navItems: [
      { title: '精选电影', imageUrl: '../../assets/images/searchbar/option_icon.png' },
      { title: 'VIP会员', imageUrl: '../../assets/images/searchbar/option_icon.png' },
      { title: '综艺节目', imageUrl: '../../assets/images/searchbar/option_icon.png' },
      { title: '海外剧', imageUrl: '../../assets/images/searchbar/option_icon.png' }
    ],
    videoItems: [
      {
        videoPath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        posterPath: 'http://pic1.win4000.com/wallpaper/2019-01-15/5c3d796632508.jpg',
        title: '神探蒲松龄',
        headPhotos: [
          'http://m.imeitou.com/uploads/allimg/201114/3-2011141F133-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020111109/2rim0cysapx-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020110210/wze1ae0riqj-lp.jpg'
        ],
        likeIcon: '../../assets/images/comment-map/like_icon.png',
        likeTitle: '9240点赞',
        shareIcon: '../../assets/images/comment-map/share_icon.png',
        shareTitle: '949分享',
        alignmentIcon: '../../assets/images/comment-map/evaluate_2_icon.png',
        alignmentTitle: '1228评论'
      },
      {
        videoPath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        posterPath: 'http://pic1.win4000.com/wallpaper/2019-05-17/5cde7e8ad2778.jpg',
        title: '哥斯拉',
        headPhotos: [
          'http://img.touxiangwu.com/uploads/allimg/200312/-1_0312140F25547.jpg',
          'http://img.touxiangwu.com/uploads/allimg/200312/-1_03121406442351.jpg',
          'http://img.touxiangwu.com/uploads/allimg/200312/-1_0312141152C43.jpg'
        ],
        likeIcon: '../../assets/images/comment-map/like_icon.png',
        likeTitle: '1988点赞',
        shareIcon: '../../assets/images/comment-map/share_icon.png',
        shareTitle: '689分享',
        alignmentIcon: '../../assets/images/comment-map/evaluate_2_icon.png',
        alignmentTitle: '328评论'
      },
      {
        videoPath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        posterPath: 'https://img.ivsky.com/img/bizhi/pre/201909/14/lucky_star.jpg',
        title: '福星高照朱小八',
        headPhotos: [
          'http://m.imeitou.com/uploads/allimg/2020111109/vfhoqk3ldhq-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020111109/o3zvr5vqs5h-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020111109/0c4kiurabfe-lp.jpg'
        ],
        likeIcon: '../../assets/images/comment-map/like_icon.png',
        likeTitle: '650点赞',
        shareIcon: '../../assets/images/comment-map/share_icon.png',
        shareTitle: '889分享',
        alignmentIcon: '../../assets/images/comment-map/evaluate_2_icon.png',
        alignmentTitle: '9928评论'
      },
      {
        videoPath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        posterPath: 'https://img.ivsky.com/img/bizhi/pre/201911/02/pets_united-006.jpg',
        title: '宠物联盟',
        headPhotos: [
          'http://m.imeitou.com/uploads/allimg/2020111109/azi4yvvzpti-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020111109/yv3yox134oq-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/201114/3-2011141FI6-lp.jpg'
        ],
        likeIcon: '../../assets/images/comment-map/like_icon.png',
        likeTitle: '550点赞',
        shareIcon: '../../assets/images/comment-map/share_icon.png',
        shareTitle: '989分享',
        alignmentIcon: '../../assets/images/comment-map/evaluate_2_icon.png',
        alignmentTitle: '628评论'
      },
      {
        videoPath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        posterPath: 'https://img.ivsky.com/img/bizhi/pre/201910/12/ne_zha_nezha_birth_of_the_demon_child-002.jpg',
        title: '哪吒',
        headPhotos: [
          'http://m.imeitou.com/uploads/allimg/201114/3-2011141F133-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020111109/2rim0cysapx-lp.jpg',
          'http://m.imeitou.com/uploads/allimg/2020110210/wze1ae0riqj-lp.jpg'
        ],
        likeIcon: '../../assets/images/comment-map/like_icon.png',
        likeTitle: '9240点赞',
        shareIcon: '../../assets/images/comment-map/share_icon.png',
        shareTitle: '949分享',
        alignmentIcon: '../../assets/images/comment-map/evaluate_2_icon.png',
        alignmentTitle: '1228评论'
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
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000)

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

  },
  // 视频播放完成
  videoEndCallback: function (params) {
    console.log(params);
    console.log("视频播放完成");
  },
  // 视频播放失败
  videoErrorCallback: function (params) {
    console.log(params)
    console.log("视频播放失败");
  }
})