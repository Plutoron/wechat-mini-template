const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'

Page({
  data: {

  },
  async search() {
    try {
      const res = await io.search({
        wd: 'something',
        header: {}, // 想要修改的header
      })
      console.log(res)
    } catch (e) {
      wx.showToast({
        title: e.errMsg,
      })
    }
  },
  onLoad(options) {
    
  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
})