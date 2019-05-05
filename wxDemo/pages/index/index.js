//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    name:"",
    leftImg:[
      {image:"/images/post/s1.jpg",id:1,content:"特价包贼便宜",price:999999},
      {image:"/images/post/s3.jpg",id:2,content:"店主推荐奢华享受",price:998},
      {image:"/images/post/s4.jpg",id:3,content:"实在编不出来了..",price:19888}
    ],
    rightImg: [
      { image: "/images/post/product4.png", id: 5, content: "海外精品", price: 45999},
      { image: "/images/post/product1.png", id: 6, content: "编不下去了...", price: 89999 },
      
    ],
    kaquan:[
      {youhui:"8折优惠卡券"},
      {youhui:"6折优惠卡券" },
      {youhui:"5折优惠卡券" }
      ]
    
  },
  onLoad: function (options) {
   wx.request({
     url: 'https://localhost:8443/aaaa/bbb',
     method:'get',
     success:function(res){
       console.log(res);
     }
   })
  
  },
  onShareAppMessage:function(){
    return {
      title: 'luma交易平台',
      path: '/pages/index/index?id=123' // 路径，传递参数到指定页面。
    }
  },
  onDetail:function(event){
    var id= event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'goods-detail/goods-detail?id='+id,
    })
  },
  onKaquan:function(event){
    wx.navigateTo({
      url: 'kaquan/kaquan',
    })
  },
  onBindfocus:function(event){
    wx.navigateTo({
      url: '../order/more/more',
    })
  }
})
