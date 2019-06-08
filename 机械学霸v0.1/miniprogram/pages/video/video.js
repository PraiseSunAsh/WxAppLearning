//logs.js
const util = require('../../utils/util.js')

const db = wx.cloud.database();
//获取叫articleList的集合
const videos = db.collection('videoList');

Page({
  data: {
    videoList: [  
    ]
  },
  onLoad: function () {
    // // 下面的这段代码注释勿动！！
    videos.add({
      data:{
        link: "w0797c6p8fm",
        title: "看了这台日本机床加工后，估计你都想把自家的机床给砸了",
        imgsrc: "http://puui.qpic.cn/qqvideo_ori/0/w0797c6p8fm_496_280/0"

      },
      success:function(res){
        console.log(res.data);
      }
    });
    var that = this;

    videos.get({
      success: function (res) {
        var tmp = res.data.slice();
        console.log(tmp);
        that.setData({
          videoList: tmp.reverse()
        })
      }
    });
  },
  //实现页面跳转
  f1:function(event){
    var app = getApp();
    //获取点击当前页面传过来的链接
    var linktmp = event.currentTarget.dataset.link;
    //把这个链接存到全局对象中 
    app.globalData.link = linktmp;
    //视频标题同理
    var titletmp = event.currentTarget.dataset.title;
    app.globalData.title = titletmp;
    
    wx.navigateTo({
        url: '../video_detail/video_detail',
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
    });
  }
})
