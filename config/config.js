const config = {
  ROOT: '../../',
  CONFIG: '../../config/config.js',
  ioContext: '../../common/io-context.js',
  utils: '../../utils/util.js',
  appid: '',
  appSecret: '',
  mode: 'dev', // dev / test / pro
  prefix: {
    dev: 'dev.www.baidu.com',
    test: 'test.www.baidu.com',
    pro: 'pro.www.baidu.com',
  },
  https: true,
  tokenTimeout: 1000 * 60 * 60 * 24 * 7, 
}

export default config
