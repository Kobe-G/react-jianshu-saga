## react-简书

#### 开始，先让项目跑起来

- 克隆到本地，进入到项目的根目录
- 使用 npm install 安装依赖包
- 使用 npm run mock 开启模拟数据库
- 使用 npm run dev 启动项目

#### 环境

使用了webpack、babel进行项目环境的搭建，需要注意的是plugin-transform-runtime这个插件的使用，如果你的项目中使用了generator函数，那么必须要在babel中配置这个插件。

#### react和redux

以下是用到的插件和中间件：

- styled-components
- immutable
- redux-immutable
- react-loadable
- react-redux
- redux-saga
- react-transition-group
- react-router-dom
- axios
- esky-mock

#### 关于mock

本项目采用了mock.js模拟数据库数据，用到了esky-mock这个插件，具体用法可以参看我的另外一个仓库关于esky-mock的介绍