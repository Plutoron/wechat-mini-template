const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
const {
  formatNumber,
} = require(`${app.utils}`)
import io from 'io.js'

Page({
  data: {},
  async search() {
    try {
      const res = await io.search({
        wd: 'something',
      })
      console.log(res)
    } catch (e) {
      wx.showToast({
        title: e.errMsg,
      })
    }
  },
  onLoad(options) {
    console.log(formatNumber(9))
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {}
})