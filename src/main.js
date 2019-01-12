// 入口文件

//先导入vue文件
import Vue from 'vue'

//1.1改造路由先导入路由的文件
import VueRouter from 'vue-router'
//1.2安装路由模块
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'
//1.4在vm实例上挂载对象

//2.1导入相关请求数据的vue-resource
import vueResource from 'vue-resource'
//2.2安装 完成之后就可以通过this.$http 发送求情
Vue.use(vueResource)







//导入mui的样式设置tabbar的样式
import './lib/mui/css/mui.min.css'
//导入扩展图标样式
import './lib/mui/css/icons-extra.css'




//现在按需导入mint ui 组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入轮播图的组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



//导入app跟组件
import app from './App.vue'

var vm  = new Vue({
    el:"#app",
    //render函数渲染
    render: c => c(app),
    router
})