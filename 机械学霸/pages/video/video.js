//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    videoList: [
        {
            link:"x0870oan3jp",
            title:"让机器人走路更像人Atlas做到了！",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/x0870oan3jp_496_280/0"       
        },
        {
            link:"n0870k5ssqm",
            title:"机器人扫地、使用吸尘器清洁地板、搬动、整理仓库",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/n0870k5ssqm_496_280/0"       
        },
        {
            link:"y0870tj3i88",
            title:"Atlas 机器人已经能够通过自主规划在狭窄的地形上行走",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/y0870tj3i88_496_280/0"       
        },
        {
            link:"a0800jw5iaz",
            title:"一堆没用的零件，随便一焊都是工艺品",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/a0800jw5iaz_496_280/0"       
        },
        {
            link:"e08007cug9t",
            title:"听过不一定见过，20种焊接方式让你大开眼界",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/e08007cug9t_496_280/0"       
        },
        {
            link:"g0800684bi0",
            title:"德国人如何组装超级跑车发动机？生产流程严谨规范！",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/g0800684bi0_496_280/0"       
        },
        {
            link:"w0797c6p8fm",
            title:"看了这台日本机床加工后，估计你都想把自家的机床给砸了",
            imgsrc:"http://puui.qpic.cn/qqvideo_ori/0/w0797c6p8fm_496_280/0"       
        },
    ]
  },
  onLoad: function () {
    
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
