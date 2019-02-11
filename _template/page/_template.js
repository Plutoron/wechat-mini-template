const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
const {
  formatNumber,
} = require(`${app.utils}`)
import io from 'io.js'

Page({
  data: {},
  onLoad(options) {
    console.log(formatNumber(1))
    this.search()
  },
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
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
})