Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
      }
    ],
    //视图发生更改并不会影响到currentIndex的值
    currentIndex:0,
    count:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在加载前的操作
    this.setData({
      //默认让幻灯片加载到最后一页
      currentIndex:this.data.weeklyMovieList.length-1
    });
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
  f0:function(event){
    //注意，直接赋值并不能双向绑定数据
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1,
      // 如果编译错误可以用引号把key包起来
      "weeklyMovieList[2].name":"教父三",
    })
  }
})