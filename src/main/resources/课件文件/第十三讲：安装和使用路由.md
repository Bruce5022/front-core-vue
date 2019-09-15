### 第十三讲===>安装和使用路由

- #### 路由是以插件的形式引入到我们的vue项目中来的

  - ##### vue-router是vue的核心插件

    ##### 1:下载 `npm i vue-router -S`

    ##### 2:安装插件`Vue.use(VueRouter);`  

    ##### 3:创建路由对象 `var router = new VueRouter();`

    ##### 4:配置路由规则 `router.addRoutes([路由对象]);`

    ##### 路由对象`{path:'锚点值',component:要(填坑)显示的组件}`

    ##### 5:将配置好的路由对象交给Vue

    - ##### 在options中传递-> key叫做 router

    ##### 6:留坑(使用组件) `<router-view></router-view>`

