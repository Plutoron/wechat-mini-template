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
  data = {},
  originRes = false,
	checkToken = true, // 默认全部接口 校验token
}) => {
  // restful 接口  参数 ':xxx' 的形式传入data
  const app = getApp()

	// 校验登录 的 一个方案
  if (!wx.getStorageSync('token') && checkToken) {
    await app.getToken()
  }
 
	const dataKeys = Object.keys(data)
	const restParam = {}

	// 获取rest参数
	if (dataKeys.length > 0) {
		// 根据 参数对象 key 是否 包含 ： 判断是否为 restful 参数
		if (dataKeys.some(v => v.indexOf(':') > -1)) {
			dataKeys.map((v, i) => {
				if (v.indexOf(':') > -1) {
					restParam[v] = data[v]
					delete data[v]
				}
			})
		}
	}
	
	// 更新rest路由
  const trueUrl = Object.keys(restParam).reduce((pre, value) => pre.replace(value, restParam[value]), url)

  const res = await new Promise((resolve, reject) => {
    wx.request({
      url: `${https ? 'https' : 'http'}://${prefix[mode]}/${trueUrl}`,
      header: {
        "Content-Type": "application/json",
        // 所有的请求，header默认携带token
        // token: wx.getStorageSync('token') || '',
        ...header,
      },
      method,
      data,
      dataType,
      success: (res) => {
				if (originRes) {
					resolve(res)
				} else {
					resolve(res.data)
				}
        
        // 在这里进行统一的 返回处理 
				// demo: 
        // if (res.data.success) {
				// 	if (originRes) {
				// 		resolve(res)
				// 	} else {
				// 		resolve(res.data.content)
				// 	}
				// } else {
				// 	reject(res.data.message)
				// }
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
