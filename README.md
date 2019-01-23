## wechat-mini-template
> 初始化微信小程序模版

### common

#### common.wxss 
> font-size/padding/margin/omit

#### flex.wxss 
> flex布局常用的class名

#### io-context
> 封装的wx.request 支持 async/await

### config

config.js -- 一些配置变量的集合

> 通过 mode 和 prefix 配置不同环境

### libs

> runtime.js -- 支持 async 的库，直接 在需要用到的js 直接引入 require。本项目在各页面的js 内 require 

### pages

> 各页面集合
> 每个page目录下新增 io.js 管理页面请求。
> 在[页面名].js 头部添加使用
```
const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'
```

### utils

> util.js -- 工具函数集合

### app.js

> 小程序全局变量和函数集合，这里把config.js 的值 全部引入。在各page的js内通过以下方式调用 
```
const app = getApp()
app.X 
```

### app.json

> 小程序的配置文件

### app.wxss 

> 小程序的全局样式。这里引入commom.wxss 和 flex.wxss
