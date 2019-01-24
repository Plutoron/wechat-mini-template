//logs.js
const app = getApp()
const {
  formatTime
} = require(`${app.utils}`)

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return formatTime(new Date(log))
      })
    })
  }
})