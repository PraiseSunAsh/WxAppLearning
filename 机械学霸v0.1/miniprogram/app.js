//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'yun-asher-n6kbs',
      traceUser:true
    });

    const db = wx.cloud.database();
    //获取叫todos的集合
    const todos = db.collection('todos');
    //添加字段
    todos.add({
      data:{
        "刷黄即":"半夜两点"
      },

    });
    
  },
  globalData: {
    link:"",
    title:""
  }
})