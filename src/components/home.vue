<style lang="scss" scoped>

.investLists {
    height: 3.08rem;
}

.mart_80 {
    margin-top: 0.8rem;
}

.nav-list {
    position: relative;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.3rem;
    height: 0.8rem;
    background: #fff;
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    aside {
        height: 0.8rem;
        display: flex;
        align-items: center;
        a {
            display: inline-block;
            height: 0.8rem;
            line-height: 0.8rem;
            display: flex;
            align-items: center;
            &.mar_5 {
                margin-right: 0.5rem;
            }
        }
        em {
            display: block;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.26rem;
            font-style: normal;
            color: #333;
        }
    }
    ins {
        display: block;
        width: 0.18rem;
        height: 0.18rem;
        margin-left: 0.15rem;
        background: url("~@/assets/images/zhankai@2x.png") no-repeat center;
        background-size: 100% 100%;
    }
    i {
        display: block;
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.15rem;
        background: url("~@/assets/images/shaixuan@2x.png") no-repeat 0 0;
        background-size: 100% 100%;
    }
    span {
        display: inline-block;
        font-size: 0.26rem;
        color: #333;
    }
}

.select-box {
    position: relative;
    z-index: 9;
    display: none;
    transform: translate3d(0, 0, 0);
    &.ops {
        position: absolute;
        left: 0;
        right: 0;
        min-height: 20rem;
        background: rgba(0, 0, 0, 0.5);
    }
    &.fixed {
        position: fixed;
        top: 0.8rem;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    &.show {
        display: block;
    }
    ul {
        background: #f5f5f5;
        transform: translate3d(0, 0, 0);
        li {
            height: 0.8rem;
            margin: 0 0.3rem;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                display: block;
                font-size: 0.26rem;
            }
            img {
                width: 0.24rem;
                height: 0.24rem;
                display: block;
            }
        }
    }
}

</style>

<template lang="html">

<div>
    <section class="homeLists">
        <a href="javascript:;">
            <img src="../assets/images/icon_problem.png" alt="">
            <span>常见问题</span>
        </a>
        <a href="javascript:;">
            <img src="../assets/images/icon_pirate.png" alt="">
            <span>盗版警示</span>
        </a>
        <a href="javascript:;">
            <img src="../assets/images/icon_ranking.png" alt="">
            <span>主排行榜</span>
        </a>
        <a href="javascript:;">
            <img src="../assets/images/icon_industry.png" alt="">
            <span>行业讯息</span>
        </a>
    </section>
    <section class="investLists">
        <ul>
            <li v-for="(item,index) in investLists" :key="index">
                <router-link :to="{path:'/share',query:{brokerUserId:item.userId}}">
                    <aside class="area_cms">
                        <h3>{{item.brokerName}}</h3>
                        <p>监管机构:{{item.regulator}}</p>
                        <p>欧美点差:{{item.euspread}}</p>
                    </aside>
                    <img :src="item.logo">
                </router-link>
            </li>
        </ul>
    </section>
    <!-- 导航区域展示 -->
    <nav class="nav-list" :class="{'fixed':isFixed}">
        <aside class="">
            <a href="javascript:;" @click="geToScroll">
                <span>{{this.name}}</span>
                <ins :class="{'toggle':isListShow}"></ins>
            </a>
        </aside>
        <aside class="">
            <a v-if="this.dir == 'dealer'" class="mar_5" href="javascript:;">
                <span>综合排序</span>
                <ins></ins>
            </a>
            <a v-if="this.dir == 'dealer'" href="javascript:;">
                <i></i>
                <span>筛选</span>
            </a>
            <em v-if="this.dir != 'dealer' ">按首字母排序</em>
        </aside>
    </nav>
    <section v-if="isListShow" class="select-box" :class="{'fixed':isFixed,'show':isListShow,'ops':isFixed == false}">
        <ul>
            <li @click="dir='dealer';isListShow = false;name = '交易商'">
                <span>交易商</span>
                <img v-if="name=='交易商'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
            <li @click="dir='community';isListShow = false;name = '交易社区'">
                <span>交易社区</span>
                <img v-if="name=='交易社区'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
            <li @click="isListShow = false;name = '培训机构'">
                <span>培训机构</span>
                <img v-if="name=='培训机构'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
            <li @click="isListShow = false;name = '海外投资'">
                <span>海外投资</span>
                <img v-if="name=='海外投资'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
            <li @click="isListShow = false;name = '三方服务'">
                <span>三方服务</span>
                <img v-if="name=='三方服务'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
            <li @click="isListShow = false;name = '线下活动'">
                <span>线下活动</span>
                <img v-if="name=='线下活动'" src="../assets/images/xuanzhong@2x.png" alt="">
            </li>
        </ul>
    </section>

    <!-- 分区域模板 -->
    <div :class="{'mart_80':isFixed}">
        <div v-if="this.dir == 'dealer'">
            <home-dealer></home-dealer>
        </div>
        <div v-if="this.dir == 'community'">
            <home-community></home-community>
        </div>
    </div>
</div>

</template>

<script>

import homeDealer from '@/components/common/homeDealer';
import homeCommunity from '@/components/common/homeCommunity';
export default {
    name: 'Home',
    components: {
        homeDealer,
        homeCommunity
    },
    data: () => ({
        investLists: [],
        dir: 'dealer',
        isFixed: false,
        isListShow: false,
        top: 0,
        name: "交易商"
    }),
    methods: {
        scrollFix(e) {
                if (this.wait) {
                    e.stopPropagation();
                    e.preventDefault();
                    return false;
                };
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop >= this.top) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }
            },
            preHandler(event) {
                event.stopPropagation();
                event.preventDefault();
                return false; //防止滚动事件
            },
            geToScroll(e) {
                this.wait = true;
                document.addEventListener('touchmove', this.preHandler, false); //阻止默认滑动事件
                this.scrollTo(this.top, () => {
                    this.wait = false;
                    document.removeEventListener('touchmove', this.preHandler, false); //浮层关闭时解除事件处理程序
                });
                this.isListShow = !this.isListShow;
            }
    },
    watch: {

    },
    created() {
        this.$ajax({
            url: "/url99/comment/getHomePageRecommend.json"
        }).then((res) => {
            this.investLists = res.data.list;
        }).then(() => {
            this.elem = document.querySelector('.nav-list');
            this.top = this.elem.offsetTop;
        })
    },
    mounted() {
        window.addEventListener("scroll", this.scrollFix);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollFix);
    }
}

</script>
