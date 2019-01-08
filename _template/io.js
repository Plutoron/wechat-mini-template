import {ioContent} from '../../common/io-context.js'

const io = {
  search: data => ioContent({
    url:'s', 
    method: 'GET',
    data,
  }),
}

export default io