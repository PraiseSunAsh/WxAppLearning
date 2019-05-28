// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在加载的时候在data中添加一个对象
    this.setData({
      mid:options.id,
    });
    var reqTask = wx.request({
        url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId='+options.id,
        dataType: 'json',
        responseType: 'text',
        success: (result) => {
            console.log(result);
            //将返回的数据作为movie的value，并且将这个对象设置进去
            if(result.statusCode==200){
              this.setData({
                movie: result.data
              });
              //动态设置页面的标题
              wx.setNavigationBarTitle({
                title: result.data.data.basic.name,
              })
              wx.hideNavigationBarLoading();
            }
            
        },
        fail: () => {},
        complete: () => {}
    });
    //显示加载动画  因为request是异步，所以会先进行显示
      wx.showNavigationBarLoading();
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
    return{
      title: "向你推荐："+this.data.movie.data.basic.name
    }
  }
})