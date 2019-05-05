
Page({

  data: {

  },
  onLoad: function (options) {

  },
  onAddress:function(event){
    wx.navigateTo({
      url: '../../users/address/address',
    })
  },
  onSubmit:function(event){
    var flag = true;
    wx.showToast({
      title: flag ? "提交成功" : "提交失败",
    });
    setTimeout(function () {
     wx.redirectTo({
       url: '../../users/order/order',
     })
    }, 1000) 
  }
})