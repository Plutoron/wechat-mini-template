//app.js
import config from 'config/config'

App({
  onLaunch() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  checkTokenInvalid () {
    const tokenTimestamp = wx.getStorageSync('tokenTimestamp')
    const token = wx.getStorageSync('token')
    const curTimestamp = new Date().valueOf()

    return token && curTimestamp - tokenTimestamp > config.tokenTimeout - 1000 * 60 * 60 * 24
  },
  onShow () {
    // 判断token 是否存在
    const token = wx.getStorageSync('token')

    if (token) {
      // 判断 token 是否过期 提前一天 刷新token
      if (this.checkTokenInvalid()) {
        this.getToken()
      }
    } else {
      this.getToken()
    }
  },
  getToken() {
    wx.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code

        try {
          const res = await io.getToken({
            code,
          })
          if (res) {
            try {
              wx.setStorageSync('token', res.token)
              wx.setStorageSync('tokenTimestamp', new Date().valueOf())

              if(this.tokenCallback) {
                this.tokenCallback()
                this.tokenCallback = null
              }
              
            } catch (e) {
              this.message(e)
            }
          }
        } catch (e) {
          this.message(e)
        }
      }
    })
  },
  // 全局的提示
  message(msg, callback) {
		console.log('message', msg)
		wx.showToast({
			title: msg ? (msg.message || msg) : '好像哪里出问题了',
      icon: 'none',
      complete: () => {
        callback && callback()
      },
		})
	},
  globalData: {
    userInfo: null
  },
  ...config,
})