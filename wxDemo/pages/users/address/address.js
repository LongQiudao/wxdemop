// pages/users/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onNewAddress:function(res){
    wx.navigateTo({
      url: '../new-address/new-address',
    })
  },
  onEdit:function(event){
    wx.navigateTo({
      url: '../edit-address/edit-address',
    })
  }

})