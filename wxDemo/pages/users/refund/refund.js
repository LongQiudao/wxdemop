// pages/users/refund/refund.js
Page({

  data: {

  },
  onLoad: function (options) {

  },
  onRefundDetail:function(event){
    wx.navigateTo({
      url: '../refund-detail/refund-detail',
    })
  }
})