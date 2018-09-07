<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clearfix:after {
    content: "";
    clear: both;
    display: block;
}

.clear {
    clear: both;
}

.header {
    overflow: hidden;
    background-size: cover;
    background-image: url("~@/assets/images/Vguanfang@2x.png");
    &.backIsflag {
        background-image: url("~@/assets/images/zhengchang@2x.png");
    }
}

.head_wrap {
    padding: 0.3rem 0.3rem 0;
    overflow: hidden;
    .news-logo-img {
        width: 1.5rem;
        height: 1.5rem;
        overflow: hidden;
    }
    .news-info {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        height: 1.5rem;
        margin-left: 0.2rem;
        h3 {
            height: 0.5rem;
            font-size: 0.36rem;
            line-height: 0.5rem;
            color: #fff;
            ins {
                display: inline-block;
                img {
                    display: block;
                    height: 0.24rem;
                }
            }
        }
        h4 {
            padding-bottom: 0.05rem;
            font-size: 0;
            em {
                display: inline-block;
                font-size: 0.36rem;
                font-style: normal;
                color: #fff;
            }
            .mar_10 {
                margin-right: 0.1rem;
            }
            .mal_40 {
                margin-left: 0.4rem;
            }
            .maltr_5 {
                margin: 0 0.05rem;
            }
            span {
                display: inline-block;
                font-size: 0.24rem;
                color: #fff;
                opacity: 0.7;
            }
        }
    }
}

.list-info {
    margin: 0.35rem 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
        height: 0.85rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        em {
            display: block;
            font-style: normal;
            line-height: 0.32rem;
            font-size: 0.32rem;
            text-align: center;
            color: #fff;
        }
        span {
            display: block;
            font-size: 0.24rem;
            text-align: center;
            color: #fff;
            opacity: 0.7;
        }
    }
}

</style>

<template lang="html">

<header class="header" :class="{backIsflag:!brokerProp.isFlagship}">
    <transition name="fade">
        <div v-if="this.loadingProp">
            <section class="head_wrap">
                <img class="news-logo-img left" :src="brokerProp.logo">
                <div class="news-info left">
                    <h3>{{brokerProp.brokerName}}
                    <ins v-if="brokerProp.isFlagship==1">
                      <img src="@/assets/images/guanfang2x.png">
                    </ins>
                    <!-- <ins v-else>
                      <img src="@/assets/images/zhengchang@2x.png" >
                    </ins> -->
                  </h3>
                    <h4>
                    <em class="mar_10">{{brokerProp.complex}}</em>
                    <span>综合评分</span>
                    <span class="mal_40">第</span>
                    <em class="maltr_5">{{brokerProp.rank}}</em>
                    <span>名</span>
                  </h4>
                </div>
            </section>
            <ul class="list-info clear">
                <li>
                    <em>{{brokerProp.microblogOutspeed}}</em>
                    <span>出金速度</span>
                </li>
                <li>
                    <em>{{brokerProp.microblogAttitude}}</em>
                    <span>服务态度</span>
                </li>
                <li>
                    <em>{{brokerProp.microblogBrand}}</em>
                    <span>品牌印象</span>
                </li>
                <li>
                    <em>{{brokerProp.microblogPlatform}}</em>
                    <span>平台表现</span>
                </li>
            </ul>
        </div>
    </transition>
</header>

</template>

<script>

export default {
    props: ['brokerProp', 'loadingProp'],
    data: () => ({

    }),
    created() {
        setTimeout(() => {
            this.loading = true
        }, 30)
    }
}

</script>
