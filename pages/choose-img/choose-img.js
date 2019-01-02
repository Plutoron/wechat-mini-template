// pages/choose-img/choose-img.js
Page({
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
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})