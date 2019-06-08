const db = wx.cloud.database();
//获取叫articleList的集合
const articles = db.collection('articleList');

const app = getApp();

Page({
  data: {
    //文章列表先用对象数组存起来
    articleList:[
      
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // // 下面的这段代码注释勿动！！
    // articles.add({
    //   data:{
    //     "link": "https://mp.weixin.qq.com/s/CfBbdF8amTzcBIy3IyM_Wg",
    //     "title": "15种金相组织，请研究透塞进脑壳里",
    //     "imgsrc": "https://mmbiz.qpic.cn/mmbiz_jpg/ClS7iaIqI9fb8xiaj5AdZ6n88pvMG0mQm4mE3Vt2SvTibhmwgeuaT1of2ic8C7gLz9hPdQhwgEgu6X519ibK1ib5UYNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1&retryload=1"       
    //   }
    // });
    var that = this;
    
    articles.get({
      success:function(res){
        var tmp = res.data.slice();
        console.log(tmp);
        that.setData({
          articleList:tmp.reverse()
        })
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //实现页面跳转
  f1:function(event){
    var app = getApp();
    //获取点击当前页面传过来的链接
    var linktmp = event.currentTarget.dataset.link;
    //把这个链接存到全局对象中 
    app.globalData.link = linktmp;
    
    wx.navigateTo({
        url: '../reading_detail/reading_detail',
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
    });
  }
  
})
