// pages/movie/movie.js
import { HIT, SOON, BOARD } from '../../common/const.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 'hit',
    tapControlItem: ["正在热映", "即将上映"],
    detailItems: {
      [HIT]: {
        page: 1,
        list: [{
          movieTitle: '八佰',
          director: '管虎',
          movieImageUrl: 'https://pic0.iqiyipic.com/image/20201102/3b/62/v_112883426_m_601_m15_260_360.jpg',
          toStars: ['黄志忠', '欧豪', '王千源'],
          blocktitles: ['2D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '6分',
          releaseTime: '2020-08-01'

        },
        {
          movieTitle: '我在时间尽头等你',
          director: '妮基·卡罗',
          movieImageUrl: 'https://pic3.iqiyipic.com/image/20201112/5b/cb/v_153975084_m_601_m2_260_360.jpg',
          toStars: ['刘亦菲', '李连杰', '甄子丹'],
          blocktitles: ['3D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '10分',
          releaseTime: '2020-11-25'

        },
        {
          movieTitle: '急先锋',
          director: '徐展雄',
          movieImageUrl: 'https://pic2.iqiyipic.com/image/20201113/c3/8f/v_131397337_m_601_m20_260_360.webp',
          toStars: ['成龙', '杨洋', '艾伦'],
          blocktitles: ['3D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '8分',
          releaseTime: '2020-10-01'
        },

        {
          movieTitle: '哈利伯特与魔法石',
          director: '克里斯·哥伦布',
          movieImageUrl: '../../assets/images/scroll-view/movie_4.jpg',
          toStars: ['丹尼尔', '鲁伯特', '格林特'],
          blocktitles: ['3D', '英语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '10分',
          releaseTime: '2020-10-29'
        },
        {
          movieTitle: '寻梦环游记',
          director: '李·昂克里奇',
          movieImageUrl: '../../assets/images/scroll-view/movie_5.jpg',
          toStars: ['安东尼', '布拉特'],
          blocktitles: ['3D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '10分',
          releaseTime: '2020-10-01'
        }
        ]
      },
      [SOON]: {
        page: 1,
        list: [{
          movieTitle: '假面饭店',
          director: '铃木雅之',
          movieImageUrl: '../../assets/images/scroll-view/movie_6.jpg',
          toStars: ['木村拓哉' ,'长泽雅美'],
          blocktitles: ['2D', '日语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '4分',
          releaseTime: '2020-11-01'

        },
        {
          movieTitle: '中国机长',
          director: '刘伟强',
          movieImageUrl: 'https://image11.m1905.cn/uploadfile/2020/0123/thumb_1_150_203_20200123024910214436.jpg',
          toStars: ['张涵予', '欧豪', '杜江'],
          blocktitles: ['2D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '8分',
          releaseTime: '2020-09-01'

        },
        {
          movieTitle: '无疯也超浪',
          director: '徐展雄',
          movieImageUrl: '../../assets/images/scroll-view/movie_8.jpg',
          toStars: ['前小库', '大飞', '张思思'],
          blocktitles: ['3D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '8分',
          releaseTime: '2020-10-01'
        },

        {
          movieTitle: '战玄武',
          director: '克里斯·哥伦布',
          movieImageUrl: '../../assets/images/scroll-view/movie_9.jpg',
          toStars: ['丹尼尔', '鲁伯特', '格林特'],
          blocktitles: ['3D', '英语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '10分',
          releaseTime: '2020-10-29'
        },
        {
          movieTitle: '清平客栈',
          director: '李·昂克里奇',
          movieImageUrl: '../../assets/images/scroll-view/movie_10.jpg',
          toStars: ['安东尼', '布拉特'],
          blocktitles: ['3D', '国语', '中国巨幕'],
          scortItems: [
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png',
            '../../assets/images/searchbar/star_icon.png'
          ],
          scoreText: '8分',
          releaseTime: '2020-10-01'
        }
        ]
      }
    },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabControlEvent(event) {
    const key = event.detail.index
    let currentIndex = ''
    switch (key) {
      case 0:
        currentIndex = HIT
        break;

      default:
        currentIndex = SOON
        break;
    }
    this.setData({
      currentIndex: currentIndex
    })
  }
})