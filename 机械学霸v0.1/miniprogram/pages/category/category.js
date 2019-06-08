// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    grids: [0, 1, 2, 3, 4, 5, 6, 7]
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
  
  switch(event){
    if (event.currentTarget.dataset.currentIndex==0){
      wx.navigateTo({
        url: '../jxyl/jxyl',
      });
    }

    if (event.currentTarget.dataset.currentIndex == 1) {
      wx.navigateTo({
        url: '../jxsj/jxsj',
      });
    }

    if (event.currentTarget.dataset.currentIndex == 2) {
      wx.navigateTo({
        url: '../jxsj/jxsj',
      });
    }




  }

})