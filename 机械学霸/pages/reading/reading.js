//index.js
//获取应用实例


const app = getApp()

Page({
  data: {
    //文章列表先用对象数组存起来
    articleList:[
      {
        link:"https://mp.weixin.qq.com/s/SIPPiIez4LKVkukR9n_-8A",
        title:"动图展示常见金属加工成型工艺，简单易懂",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_gif/ZxmmZHbMicpYBial3KiaJNHAUzDnjFjRVMnohF5qib8FGmogK0sVY2bIBTAGaRyFSacBaMJolfUrgjTlzFaw7Mb5dA/640?tp=webp&wxfrom=5&wx_lazy=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/trkSu3glvk8Pg5KFSIXEdQ",
        title:"以神的名义命名的金属到底有多强？",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_gif/mxlhF49U3zSk6Y91FaB3c4VHWwM6DtSBnojVJFEA1ta7blCqgC8mg1Xo3syZZTP3Z8OFzwB07kfB1GibIAMP74w/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/Wozg28XQA-Tvd2dS4cS-FA",
        title:"七大类47种工控仪表原理，一看就懂！",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_gif/vSABwyURAViaqHicOZKFSqPfMOt4bC2icWIFMQWHoCWVWVeLYib4MtYaoWwp1TZkuAnqsT6s1HABhlq6hmbPSx6qog/640?tp=webp&wxfrom=5&wx_lazy=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/tWO5d1umrsNEA9CjTXmgCQ",
        title:"机械干了一辈子，你知道表面粗糙度为什么用0.8, 1.6, 3.2？",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_jpg/3PE7rXJ1K6mFjeMm8fz2u07FLDXSrDYCdibCEyVKvAseXQOMv9qMTLrdEictHm7iciaQGjEP4MGql8eHC5TwRYoYXA/640?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/c9suN-2mbxcE769ntXAtjQ",
        title:"机械工程师生存现状挥泪解析：不忍直视",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_jpg/8P5TsHXeRdOZ8xZh5wduAWcib9a86L6Pr3HNXfkCHaQsianJqbZb7icH9eu7DRM13M720nwL8lLyUnQpdicF4WNVnA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/EEVqDhydw5ytNQoE-1Ht_w",
        title:"螺纹相关知识，看这一篇就够了！",
        imgsrc:"https://mmbiz.qpic.cn/mmbiz_jpg/PVFbKWRaEmO0pBhdlPq3kzZFfd2cFch5C4kJzLKph2XicYa8Kg8hB4STTPtocWWicI3CGibArmeYOk4iaxwkylopTQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"       
      },
      {
        link:"https://mp.weixin.qq.com/s/D4Ipkp_SX1OD6eSvrbemwA",
        title:"从单缸到64缸的发动机，你都见过吗？",
        imgsrc:"http://mmbiz.qpic.cn/mmbiz_png/uoZqmPwljJNv43k6Ou37ttsbAq0GghdG9MVYRqjckw7X1722vyJzFJ1icqO3QhxYxwLhdR19HAEQZBgpc66bGFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"       
      },
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
