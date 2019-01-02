// pages/choose-img/choose-img.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: []
  },
  longtap: function(e) {
    const {imgUrl} = this.data
    const index = e.target.dataset.index
    wx.showModal({
      title: '确定删除该图片吗',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          imgUrl.splice(index, 1)
          this.setData({
            imgUrl,
          })
        }
      }
    })
  },
  choose: function() {
    const {imgUrl} = this.data
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imgUrl: imgUrl.concat(res.tempFilePaths[0]),
        })
      },
    })
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

  }
})