import regeneratorRuntime from '../libs/runtime.js'
import {
  prefix,
  mode,
  https
} from '../config/config.js'

const ioContext = async ({
  url,
  method = 'GET',
  data = {}
}) => {
  // 所有的请求，header默认携带token
  const header = {
    'Content-Type': 'application/json',
    token: wx.getStorageSync('token') || '',
    ...data.header,
  }

  const res = await new Promise((resolve, reject) => {
    wx.request({
      url: `${https ? 'https' : 'http'}://${prefix[mode]}/${url}`,
      method,
      data,
      header,
      success: (res) => {
        resolve(res.data)
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
  ioContext
}