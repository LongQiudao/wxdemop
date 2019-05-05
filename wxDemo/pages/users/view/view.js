// pages/users/view/view.js
Page({
  data: {

  },
  onLoad: function (options) {

  }, 
  onDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/goods-detail/goods-detail?id=' + id,
    })
  }
})