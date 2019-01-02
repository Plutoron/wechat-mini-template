import {ioContent} from '../../common/io-context.js'

const io = {
  search: params => ioContent('www.baidu.com/s', params),
}

export default io