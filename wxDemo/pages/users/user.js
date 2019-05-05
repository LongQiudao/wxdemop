Page({
  data: {
    leftImg: [
      { image: "/images/post/s1.jpg", id: 1, content: "特价包贼便宜", price: 999999 },
      { image: "/images/post/s3.jpg", id: 2, content: "店主推荐奢华享受", price: 998 },
      { image: "/images/post/s4.jpg", id: 3, content: "实在编不出来了..", price: 19888 },
      { image: "/images/post/product4.png", id: 5, content: "海外精品", price: 45999 },
      { image: "/images/post/product1.png", id: 6, content: "编不下去了...", price: 89999 }
    ],
    rightImg: [
      { image: "/images/post/s4.jpg", id: 3, content: "实在编不出来了..", price: 19888 },
      { image: "/images/post/product1.png", id: 6, content: "编不下去了...", price: 89999 },
      { image: "/images/post/s1.jpg", id: 1, content: "特价包贼便宜", price: 999999 },
      { image: "/images/post/s3.jpg", id: 2, content: "店主推荐奢华享受", price: 998 },
      { image: "/images/post/product4.png", id: 5, content: "海外精品", price: 45999 },
    ]
  },
  onLoad: function (options) {

  },
  onDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/goods-detail/goods-detail?id=' + id,
    })
  }, 
  onEdit:function(event){
    wx.navigateTo({
      url: 'setUp/setUp',
    })
  },
  onView: function (event){
    wx.navigateTo({
      url: 'view/view',
    })
  },
  onShouCang: function (event){
    wx.navigateTo({
      url: 'collect/collect',
    })
  },
  onCategory: function (event){
    wx.switchTab({
      url: '../order/order',
    })
  },
  onMyOrder: function (event){
    wx.navigateTo({
      url: 'order/order?currentTab=' + 0,
    })
  },
  onNopay:function(event){
    wx.navigateTo({
      url: 'order/order?currentTab=' + 1,
    })
  },
  onDeliver: function(event){
   wx.navigateTo({
      url: 'order/order?currentTab=' + 2,
   })
  },
  onShouhuo:function(event){
    wx.navigateTo({
      url: 'order/order?currentTab=' + 3,
    })
  },
  onEvaluate:function(event){
    wx.navigateTo({
      url: 'order/order?currentTab=' + 4,
    })
  },
  onRefund:function(event){
    wx.navigateTo({
      url: 'refund/refund',
    })
  }, 
  onSale:function(event){
    wx.navigateTo({
      url: 'sale/sale',
    })
  },
  onMaintenance:function(event){
    wx.navigateTo({
      url: 'maintenance/maintenance',
    })
  },
  onKaquan:function(event){
    wx.navigateTo({
      url: '../index/kaquan/kaquan',
    })
  }
})
