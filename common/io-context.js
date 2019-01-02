import regeneratorRuntime from '../libs/runtime.js'
import {prefix, testPrefix, dev} from '../config/config.js'

const ioContent = async (url, params = {}) => {
  Object.assign(params, {
    token: wx.getStorageSync('token')
  })
  // 所有的请求，header默认携带token
  const header = params.header || {
    'Content-Type': 'application/json',
    'token': params.token || ''
  }
  const data = params.data || {}
  const method = params.method || 'GET'
  
  const res = await new Promise((resolve, reject) => {
    wx.request({
      url: `http://${dev ? testPrefix : prefix}${url}`,
      method,
      data,
      header,
      success: (res) => {
        if (res && res.statusCode == 8200) {
          resolve(res.data || res.result)
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        
      }
    })
  })
  return res
}

export {
  ioContent
}