const app = getApp()

Page({
  /**    * 页面的初始数据    */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },
  /**    * 生命周期函数--监听页面加载    */
  onLoad: function (options) {
    var currentTab = options.currentTab;
    this.setData({
      currentTab: currentTab
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onNewRefund:function(event){
    wx.navigateTo({
      url: '../new-refound/new-refound',
    })
  },
  onSale:function(event){
    wx.navigateTo({
      url: '../sale/sale',
    })
  },
  onNewEvaluate:function(event){
    wx.navigateTo({
      url: '../new-evaluate/new-evaluate',
    })
  }
})