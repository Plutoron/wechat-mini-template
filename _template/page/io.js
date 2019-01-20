import {
  ioContent
} from '../../common/io-context.js'

const io = {
  // 需要修改header的话，通过data.header 进行修改
  search: data => ioContent({
    url: 's',
    method: 'GET',
    data,
  }),
}

export default io