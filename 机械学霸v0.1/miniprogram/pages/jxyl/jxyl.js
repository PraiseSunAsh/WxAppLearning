const db = wx.cloud.database();
//获取叫articleList的集合
const articles = db.collection('jxyl');

const app = getApp();

Page({
  data: {
    //文章列表先用对象数组存起来
    articleList: [

    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // // 下面的这段代码注释勿动！！
    // articles.add({
    //   data:{
    //     "link": "https://mp.weixin.qq.com/s/1KsGkWqrJrz7zYfE5r3svg",
    //     "title": "不会区分各类轴承？图文展示13种轴承的特点、区别和用途",
    //     "imgsrc": "https://mmbiz.qpic.cn/mmbiz_jpg/x2ibicfEaJtibdww36LQ3d0Na3nNhyWu04EzM2ib8LDBVWN7SHicuGYyVJ6mr6vteqJJSBv9icoyU2P4ic37kq8B2O54A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"       
    //   }
    // });

    var that = this;
    articles.get({
      success: function (res) {
        that.setData({
          articleList: res.data
        })
      }
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //实现页面跳转
  f1: function (event) {
    var app = getApp();
    //获取点击当前页面传过来的链接
    var linktmp = event.currentTarget.dataset.link;
    //把这个链接存到全局对象中 
    app.globalData.link = linktmp;

    wx.navigateTo({
      url: '../reading_detail/reading_detail',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
    });
  }

})
