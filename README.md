## react技术栈
- react  react-router4  redux  react-redux

## 初始化package.json
```
$ npm init -y
```

## webpack
```
$ npm install webpack webpack-dev-server
```

## babel
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```

## react
```
$ npm install react redux react-redux react-router-dom react-dom -S
```

## fetch  --- api  
```
$ npm install es6-promise whatwg-fetch -D
```

## express 
```
$ npm install express -S
```

## swipe
```
$ npm install swipe-js-iso react-swipe
```

## scripts --- package.json
```
"start","webpack-dev-server --port 5000 --open --progress --colors"
"build","webpack -p"
```

## 目录结构
- components  组件  木偶组件：智能组件给的数据渲染
- containers  页面组件，页面里的小组件可以放在components里或者自己的subpage目录下
    - Home  主页
        - subpage  智能组件：获取数据，交给components组件渲染
        - index.js
        - 
- index.js  用来控制显示哪一个页面 Home还是管理之类的



    
    
## 配置路由
- 路由的两种类型：
    - hashRouter 有井号的 --- 开发的时候用hashRouter
    - BrowserRouter  浏览器自带的

- `<Router></Router>`里面只能有一个顶级元素，而里面放的是一条条的路由Route，所以一般里面先放一个div，然后再写一堆路由 --- Router就是提供一个路由容器


## redux

- store  只有一个
- action  用户发布动作
- reducer  定义规则的，对于发布的状态怎么改
- action-types  存储action的名字