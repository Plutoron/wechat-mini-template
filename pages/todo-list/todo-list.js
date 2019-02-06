const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'

Page({
  data: {
    list: [{ text: 'Learning Javascript', completed: true },
      { text: 'Learning ES2016', completed: true },
      { text: 'Learning 小程序', completed: false }],
    todoList: [],
    doneList: [],
    curText: '',
  },
  onLoad(options) {
    this.splitList()
  },
  addTodo(e) {
    const {
      todo,
    } = e.detail

    const {
      list,
     } = this.data

    if (!todo) {
      wx.showToast({
        title: '不能添加空内容呦QAQ',
        icon: 'none',
      })
      return
    }

    if (list.some(v => v.text === todo)) {
      wx.showToast({
        title: '已经在列表里面喽QAQ',
        icon: 'none',
      })
      return
    }

    list.unshift({
      text: todo,
      completed: false,
    })

    this.setData({
      list,
    }, () => {
      this.splitList()
    })
  },
  bindstatus(e) {
    let {
      list,
    } = this.data

    const {
      text,
    } = e.currentTarget.dataset

    list = list.map(v => ({
      ...v,
      completed: text === v.text ? !v.completed : v.completed, 
    }))

    this.setData({
      list,
    }, () => {
      this.splitList()
    })
  },
  binddel(e) {
    let {
      list,
    } = this.data

    const {
      text,
    } = e.currentTarget.dataset

    list.some((v, i) => {
      if (text === v.text) list.splice(i, 1)
      return text === v.text
    })

    this.setData({
      list,
    }, () => {
      this.splitList()
    })
  },
  splitList() {
    this.setData({
      todoList: this.data.list.filter(v => !v.completed),
      doneList: this.data.list.filter(v => v.completed),
    })
  },
  async search() {
    try {
      const res = await io.search({
        wd: 'something',
        header: {}, // 想要修改的header
      })
      console.log(res)
    } catch (e) {
      wx.showToast({
        title: e.errMsg,
      })
    }
  },
  bindtouchstart(e) {
    const {
      clientX,
    } = e.touches[0]
    this.setData({
      startX: clientX,
    })
  },
  bindtouchmove(e) {
    const {
      clientX,
    } = e.touches[0]

    const {
      text,
    } = e.currentTarget.dataset

    if (this.data.startX - clientX > 50) {
      this.setData({
        curText: text,
      })
    } else if (clientX - this.data.startX  > 50) {
      this.setData({
        curText: '',
      })
    }
  },
  bindpage(e) {
    this.setData({
      curText: '',
    })
  }
})