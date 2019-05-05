// pages/users/new-evaluate/new-evaluate.js
Page({

  data: {
    stars:[0,0,0,0,0],
    wuliuStars: [0, 0, 0, 0, 0], 
    fuwuStars: [0, 0, 0, 0, 0],
    name:"",
    wuliuName:"",
    fuwuName:""
  },
  onLoad: function (options) {

  },
  onStar:function(event){
    var index = event.currentTarget.dataset.index;
    if(index==0) {
      this.setData({
        stars:[1,0,0,0,0],
        name:"很差"
      })
      return;
    };
    if (index ==1){
      this.setData({
        stars:[1,1,0,0,0],
        name:"较差"
      })
      return;
    };
    if (index ==2) {
      this.setData({
        stars: [1,1,1,0,0],
        name:"一般"
      })
      return;
    };
    if (index ==3) {
      this.setData({
        stars: [1,1,1,1,0],
        name:"满意"
      })
      return;
    };
    if (index ==4) {
      this.setData({
        stars: [1,1,1,1,1],
        name:"非常满意"
      })
      return;
    };
  },
  onWuliuStar:function(event){
    var index = event.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        wuliuStars: [1, 0, 0, 0, 0],
        wuliuName:"很差"
      })
      return;
    };
    if (index == 1) {
      this.setData({
        wuliuStars: [1, 1, 0, 0, 0],
        wuliuName:"较差"
      })
      return;
    };
    if (index == 2) {
      this.setData({
        wuliuStars: [1, 1, 1, 0, 0],
        wuliuName:"一般"
      })
      return;
    };
    if (index == 3) {
      this.setData({
        wuliuStars: [1, 1, 1, 1, 0],
        wuliuName:"满意"
      })
      return;
    };
    if (index == 4) {
      this.setData({
        wuliuStars: [1, 1, 1, 1, 1],
        wuliuName:"非常满意"
      })
      return;
    };
  },
  onFuwuStar:function(event){
    var index = event.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        fuwuStars: [1, 0, 0, 0, 0],
        fuwuName:"很差"
      })
      return;
    };
    if (index == 1) {
      this.setData({
        fuwuStars: [1, 1, 0, 0, 0],
        fuwuName:"较差"
      })
      return;
    };
    if (index == 2) {
      this.setData({
        fuwuStars: [1, 1, 1, 0, 0],
        fuwuName:"一般"
      })
      return;
    };
    if (index == 3) {
      this.setData({
        fuwuStars: [1, 1, 1, 1, 0],
        fuwuName:"满意"
      })
      return;
    };
    if (index == 4) {
      this.setData({
        fuwuStars: [1, 1, 1, 1, 1],
        fuwuName:"非常满意"
      })
      return;
    };
  },
  bindFormSubmit(e) {
    console.log(e.detail.value.textarea)
  }
})