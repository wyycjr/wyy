// 入口文件



//先导入vue文件
import Vue from 'vue'

//导入mui的样式设置tabbar的样式
import './lib/mui/css/mui.min.css'




//现在按需导入mint ui 组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


//导入app跟组件
import app from './App.vue'

var vm  = new Vue({
    el:"#app",
    //render函数渲染
    render: c => c(app)
})