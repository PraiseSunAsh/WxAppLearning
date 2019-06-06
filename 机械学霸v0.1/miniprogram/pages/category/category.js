// pages/category/category.js
//获取数据库
const db = wx.cloud.database();
//获取叫’todos‘的集合
const todos = db.collection('todos');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(event) {
    
  },
  f1(event){
   
    todos.add({
      data:{
        "背英语":"晚上两点"
      },
      success:function(res){
        console.log(res);
      }
    });
  },

  f2(event){
    //取回id为那玩意的一条数据
    todos.where({
      "_id":"2d9d2d8c5cf86f85003f049d7958567d"
    }).get({
      success:function(res){
        var jsontext = JSON.stringify(res.data[0]);
        console.log(jsontext);
      }
    });
    //取回todos中的所有数据
    todos.get({
      success:function(res){
        console.log(res.data);
      }
    })


    
  },

  f3(event){
    todos.doc('2d9d2d8c5cf87102003f9e0c64a9a380').set({
      data:{
        "背英语":"背个屁",
      }
    })
  },

  f4(event){
    todos.doc('2d9d2d8c5cf87102003f9e0c64a9a380').remove({
      success: function (res) {
        console.log(res.data)
      }
    })

  }
})