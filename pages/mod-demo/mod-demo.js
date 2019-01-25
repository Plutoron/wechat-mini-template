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
  outFun(e) {
    // 通过 自定义detail 传参
    console.log('e.detail', e.detail)
    const {innerNum} = e.detail
    this.setData({
      outNum: innerNum,
    })
  },
  outFun2(e) {
    // 获取组件实例后，可以直接获取 data 值
    console.log('this.hello2.data', this.hello2.data)
    const {
      innerNum 
    } = this.hello2.data
    this.setData({
      outNum2: innerNum,
    })
  },
  onLoad(options) {
  
  },
  onReady() {
    // 获取两个组件实例
    this.hello = this.selectComponent('#hello')
    this.hello2 = this.selectComponent('#hello2')
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