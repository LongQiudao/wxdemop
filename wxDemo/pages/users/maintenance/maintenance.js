// pages/users/maintenance/maintenance.js
Page({

  data: {

  },
  onLoad: function (options) {

  }
  ,
  onFileUpload: function (event) {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        that.setData({
          img: res.tempFilePaths
        })
      },
    })
  }
})