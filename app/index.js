import React from 'react'
import {render} from 'react-dom'

import './assets/index.less'
// App负责渲染哪一个页面
import App from './containers/index'
import {Provider} from 'react-redux'
// 导入store
import {configureStore} from './store/index'

// 生成store 并注入到应用中
let store = configureStore();// 可以在configureStore中传入初始状态

render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'));