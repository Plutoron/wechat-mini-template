const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'

Page({
  data: {

  },
  search: async function () {
    try {
      const res = await io.search({
        wd: '我是帅哥',
        header: {}, // 想要修改的header
      })
      console.log(res)
    } catch (e) {
      wx.showToast({
        title: e.errMsg,
      })
    }
  },
  onLoad: function (options) {
    this.search()
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