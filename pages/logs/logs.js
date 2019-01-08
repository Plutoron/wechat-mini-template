//logs.js
import {
  formatTime
} from '../../utils/util.js'

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        // return util.formatTime(new Date(log))
        return formatTime(new Date(log))
      })
    })
  }
})