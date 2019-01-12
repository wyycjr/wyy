<template>
    <div>

        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <!--<mt-swipe-item v-for="item in lunbotuList" :key="item.img">-->
                <!--&lt;!&ndash;此时要用:属性绑定的方式渲染&ndash;&gt;-->
                <!--<img :src="item.img" alt="">-->
            <!--</mt-swipe-item>-->
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">资讯专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default { //在此时进行业务逻辑
        data(){
            return{
                lunbotuList:[] //默认保存轮播图的数组
            }
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                this.$http.get("http://vue.studyit.io/api/getlunbo").then(result =>{
                    // console.log(result.body)
                    if(result.bady.status ===0){
                        //成功
                        this.lunbotuList = result.body.message;
                    }else{
                        Toast({
                            message: '提示',
                            position: 'bottom',
                            duration: 5000
                        });
                    }
                })
            }
        }

    }
</script>

<style scoped lang="scss">
.mint-swipe{
    height: 200px;
    .mint-swipe-item:nth-child(1){
        background-color: cornflowerblue;
    }
    .mint-swipe-item:nth-child(2){
        background-color: deepskyblue;
    }
    .mint-swipe-item:nth-child(3){
        background-color: orchid;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
    ul li img {
        width: 60px;
        height: 60px;
    }
.mui-grid-9 .mui-media .mui-media-body{
     font-size: 12px;
 }
</style>