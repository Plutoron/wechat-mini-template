const {
  ioContext
} = require('common/io-context.js')

const io = {
  getToken: data => ioContext({
    url: 'auth/login',
    method: 'POST',
    data,
    checkToken: false,
  }),
}
