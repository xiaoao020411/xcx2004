//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    list:[],
    page: 1,     // 列表 页号
    pagesize:10,  //列表 大小
  },
  onReachBottom: function () {
    this.data.page++;
    this.getGoodsList();
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  getGoodsList: function () {
    let _this=this;
    //发起网络请求
    wx.request({
      url: 'http://weixin.2004.com/wx/goods',
      data:{
        page:_this.data.page,   //分页 页号
        size:_this.data.pagesize
      },
      header: {
        'content-type': 'application/json'
      },
      success(res){
        console.log(res)
        let new_list = _this.data.list.concat(res.data.data)
        _this.setData({
          list: new_list
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //商品详情
  goodsDetail:function(e)
  {
    //获取被点击的 商品id
    let goods_id = e.currentTarget.dataset.goodsid;
    
    //切换至 详情页
    wx.redirectTo({
      url: '/pages/detail/detail?goods_id='+goods_id
    });
  },
  onLoad: function () {
    this.getGoodsList();
  },
  

})

