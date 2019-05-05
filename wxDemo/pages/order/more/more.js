
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
    ],
  },
  onLoad: function (options) {

  },
  onDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../index/goods-detail/goods-detail?id=' + id,
    })
  }
})