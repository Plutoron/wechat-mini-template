const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'

Page({
  data: {
    outNum: 0,
    outNum2: 0,
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
  outFun1(e) {
    // 通过 自定义detail 传参
    console.log('e.detail', e.detail)
    const {innerNum} = e.detail
    this.setData({
      outNum: innerNum,
    })
  },
  outFun2(e) {
    // 获取组件实例后，可以直接获取 data 值
    console.log('this.mod2.data', this.mod2.data)
    const {
      innerNum 
    } = this.mod2.data
    this.setData({
      outNum2: innerNum,
    })
  },
  onLoad(options) {
  
  },
  onReady() {
    // 获取两个组件实例
    this.mod1 = this.selectComponent('#mod1')
    this.mod2 = this.selectComponent('#mod2')
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