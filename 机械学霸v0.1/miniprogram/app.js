//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'yun-asher-n6kbs',
      traceUser:true
    });
    
  },
  globalData: {
    link:"",
    title:""
  }
})