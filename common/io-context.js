import regeneratorRuntime from '../libs/runtime'
import config from '../config/config'
const {
  prefix,
  mode,
  https
} = config

const ioContext = async ({
  url,
  header = {},
  method = 'GET',
  dataType = 'json',
  data = {}
}) => {
  // 所有的请求，header默认携带token
  const res = await new Promise((resolve, reject) => {
    wx.request({
      url: `${https ? 'https' : 'http'}://${prefix[mode]}/${url}`,
      header: {
        "Content-Type": "application/json",
        token: wx.getStorageSync('token') || '',
        ...header,
      },
      method,
      data,
      dataType,
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