// pages/users/setUp/setUp.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onAdress:function(event){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  onAbout:function(event){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  onMethod:function(event){
    wx.navigateTo({
      url: '../method/method',
    })
  }
})