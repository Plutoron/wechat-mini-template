const config = {
  appid: '',
  appSecret: '',
  ROOT: '../../',
  CONFIG: '../../config/config.js',
  RUNTIME: '../../libs/runtime.js',
  mode: 'dev', // dev / test / pro
  prefix: {
    dev: 'dev.www.baidu.com',
    test: 'test.www.baidu.com',
    pro: 'pro.www.baidu.com',
  },
  https: true,
}

module.exports = {
  ...config
}