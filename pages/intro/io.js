const app = getApp()
const {
  ioContext
} = require(`${app.ioContext}`)

const io = {
  search: data => ioContent({
    url: 's',
    method: 'GET',
    data,
  }),
}

export default io