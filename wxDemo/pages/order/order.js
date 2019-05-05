
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
    allchecked:false,
    fakeDatas: [
      {id:0,goodschecked: false},
      {id:1,goodschecked: false}
      ]  
  },
  onLoad: function (options) {
    
  },
  onShow:function(event){
    // var role = wx.getStorageSync("user-role-msg");
    // console.log("aaaaaaaaaa")
    // if (!role) {
    //   wx.switchTab({
    //     url: '/pages/index/index',
    //   })
    // }
  },
  onDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/goods-detail/goods-detail?id=' + id,
    })
  },
  onClick:function(event){
    var allchecked =this.data.allchecked;
    if (allchecked){
      this.setData({
        allchecked: false,
        fakeDatas: [
          { id: 0, goodschecked: false },
          { id: 1, goodschecked: false }
        ]  
      });
    }else{
      this.setData({
        allchecked: true,
        fakeDatas: [
          { id: 0, goodschecked: true },
          { id: 1, goodschecked: true }
        ]  
      });
    } 
    
  },
  onGoodsClick:function(event){
    var id =event.currentTarget.dataset.id;
    var flag = this.data.fakeDatas[id].goodschecked;
    var allchecked=true;
    var temp = "fakeDatas[" + id + "].goodschecked";
    var goods = this.data.fakeDatas;
      this.setData({
        [temp]: true
      })
    if(flag){
      this.setData({
        [temp]: false
      })
    }
    for (var index in goods) {
      if(!goods[index].goodschecked){
        allchecked=false;
      }
    }
    this.setData({
      allchecked:allchecked
    });
  },
  onOrder:function(event){
    wx.navigateTo({
      url: 'account/account',
    })
  },
  onMore:function(event){
    wx.navigateTo({
      url: 'more/more',
    })
  },
  del: function () {
    wx.showModal({
      title: '提示',
      content: '确定要删除这条信息？',
      success: function (res) {
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },

  // 左滑删除部分的js

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.fakeDatas.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      fakeDatas: this.data.fakeDatas
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.fakeDatas.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      fakeDatas: that.data.fakeDatas
    })
  },

  // 计算滑动角度
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

})
