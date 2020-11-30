// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:123
  },
handleClick(){
  console.log('click')
  // 跳转不保留
  // wx.redirectTo({
  //   url: '/pages/log/log',
  // })
  // 跳转保留，或者编程导航回退
  // wx.navigateTo({
  //   url: '/pages/log/log',d
  // })
},

// 首次登陆授权
// 操作信息，使用事件方法，然后拿到数据，然后去判断是否授权成功，成功授权则使用this.setData更新数据
getInfo(res){
  console.log(111,res)
  if(res.detail.rawData){
    console.log(res.detail.userInfo)
    this.setData({userInfo:res.detail.userInfo})
  }else{
    console.log("授权失败")
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 同步调用，异步或同步效果
    // 定时器，原生事件（小写），原生的事件，不被控制
    // 生命周期，合成事件，（驼峰命名法绑定的），自己规定的为了自己统一执行节省性能
    // this.setData({msg:234})

    // 二次免授权
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo
        })
        console.log(res)
      }
    })
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

  }
})