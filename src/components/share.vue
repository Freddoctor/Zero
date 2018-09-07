<style lang="scss">



</style>

<template lang="html">

<div>
    <Broker :brokerProp="this.brokerInfo" :loadingProp="this.loading"></Broker>
    <section class="inNavigation">
        <ul>
            <li class="borb_1">
                <router-link :to="{path:'ComponyIntro',query:{brokerUserId:this.brokerUserId,from:this.from,isappinstalled:this.isappinstalled}}">
                    <img src="../assets/images/icon_introcompany.png" alt="">
                    <span>公司介绍</span>
                </router-link>
            </li>
            <li class="borb_1">
                <a href="javascript:;">
                    <img src="../assets/images/icon_licenseinfo.png" alt="">
                    <span>牌照信息</span>
                </a>
            </li>
            <li class="borb_1">
                <a href="javascript:;">
                    <img src="../assets/images/icon_platformdesc.png" alt="">
                    <span>平台说明</span>
                </a>
            </li>
            <li class="borb_1">
                <a href="javascript:;">
                    <img src="../assets/images/icon_transeinfo.png" alt="">
                    <span>交易信息</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../assets/images/icon_pointsearch.png" alt="">
                    <span>点差表</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../assets/images/icon_rollovers.png" alt="">
                    <span>隔夜利息</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../assets/images/icon_inout.png" alt="">
                    <span>出入金</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../assets/images/icon_realtest.png" alt="">
                    <span>实盘测试</span>
                </a>
            </li>
        </ul>
    </section>
    <section class="innerSwiper">
        <swiper :options="this.swiperOption" class="swiper-main">
            <swiper-slide v-for="(item,index) in this.swiperList" :key="index">
                <a :href="item.href"><img :src="item.imgUrl"><i>广告</i></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</div>

</template>

<script>

import 'swiper/dist/css/swiper.css'
import {
    swiper, swiperSlide
}
from 'vue-awesome-swiper';
import Broker from './common/broker'; //公共信息页面
export default {
    name: 'Share',
    components: {
        swiper, swiperSlide, Broker
    },
    data: () => ({
        brokerUserId: 0,
        from: "",
        isappinstalled: 0,
        brokerInfo: {},
        loading: false,
        swiperList: [{
            href: "javascript:;",
            imgUrl: ""
        }, {
            href: "javascript:;",
            imgUrl: ""
        }],
        swiperOption: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            speed: 500,
            loop: true,
            autoplay: true,
        }
    }),
    methods: {
        upLoad() {
                let params = {
                    brokerUserId: this.$route.query.brokerUserId,
                    token: this.$route.query.from,
                    isappinstalled: this.$route.query.isappinstalled,
                    appType: 1
                };
                this.$ajax({
                    url: "/api/comment/getBrokerInfo.json",
                    data: params
                }).then((res) => {
                    this.brokerInfo = res.data;
                    this.loading = true;
                });
            },

    },
    mounted() {
        this.upLoad();

    },
    created() {
        this.brokerUserId = this.$route.query.brokerUserId;
        this.from = this.$route.query.from;
        this.isappinstalled = this.$route.query.isappinstalled;
    }
}

</script>
