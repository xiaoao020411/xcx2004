// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://img10.360buyimg.com/n7/jfs/t1/137189/32/12192/38057/5f865009Ed0443078/9b111edf1e0a8723.jpg',
      'https://img13.360buyimg.com/n7/jfs/t1/130230/11/15627/101921/5fac9221E9c7f2c69/70879783ee32b26c.jpg',
      'https://img10.360buyimg.com/n7/jfs/t1/120220/38/14828/70240/5f8615efE327bef58/c486de2dc73dfc15.jpg'
  ],
  indicatorDots: true,
  vertical: false,
  autoplay: true,
  interval: 3000,
  duration: 1200,
  iscollect: true,
  // 商品详情介绍
  detailImg: [
    "https://img10.360buyimg.com/n7/jfs/t1/137189/32/12192/38057/5f865009Ed0443078/9b111edf1e0a8723.jpg",
    "https://img13.360buyimg.com/n7/jfs/t1/130230/11/15627/101921/5fac9221E9c7f2c69/70879783ee32b26c.jpg",
    "https://img10.360buyimg.com/n7/jfs/t1/120220/38/14828/70240/5f8615efE327bef58/c486de2dc73dfc15.jpg",
    "https://img10.360buyimg.com/n7/jfs/t1/132643/8/10028/79874/5f61590fEcd4404b6/6acbbbaa835cfc8d.jpg"
   
  ],
  },
/**
 * 
 * 轮播图切换事件
 */
swipperChange:function(e)
  {
    let current = e.detail.current;
    this.setData({
      current:e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://weixin.2004.com/wx/list',
      data:{
        goods_id:options.goods_id
      },
      header:{
        'content-type':'application/json'
      },
      success(res){
        _this.setData({
          data:res.data
        })
      }
    })
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