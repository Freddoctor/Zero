<style lang="scss" scoped>

.list-dealer {
    > ul > li {
        padding-top: 0.2rem;
        margin: 0 0.3rem;
        overflow: hidden;
        min-height: 2rem;
        border-bottom: 1px solid #ddd;
    }
    .login {
        position: relative;
        float: left;
        width: 1.8rem;
        height: 1.8rem;
        background: #ccc;
        > img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .article {
        float: right;
        width: 4.8rem;
        min-height: 1.8rem;
        h3 {
            color: #333;
            font-size: 0.3rem;
            line-height: 0.4rem;
            img {
                height: 0.24rem;
                width: 0.68rem;
            }
            &.hot {
                color: rgb(255, 142, 0);
            }
        }
        .flex-point {
            height: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.1rem 0;
            li {
                line-height: 0.35rem;
                font-size: 0.24rem;
                color: #999;
            }
            time {
                font-size: 0.38rem;
                color: #3285ea;
                font-weight: bold;
                i {
                    font-size: 0.22rem;
                    color: #999;
                    font-style: normal;
                    font-weight: normal;
                }
            }
        }
        aside.power-em {
            margin-bottom: 0.1rem;
        }
        em {
            display: inline-block;
            line-height: 0.3rem;
            padding: 0 0.1rem;
            margin: 0.05rem 0.1rem 0.05rem 0;
            height: 0.3rem;
            font-style: normal;
            font-size: 0.22rem;
            border-radius: 0.05rem;
            border: 1px solid #999;
            color: #999;
        }
        footer {
            padding: 0.1rem 0;
            display: flex;
            align-items: center;
            border-top: 1px solid #ddd;
            img {
                display: block;
                width: 0.6rem;
                height: 0.26rem;
            }
            span {
                display: block;
                margin-left: 0.1rem;
                font-size: 0.24rem;
                color: #666;
            }
        }
    }
}

</style>

<template lang="html">

<section class="list-dealer">
    <ul>
        <li v-for="(item,index) in this.brokerLists">
            <div class="login">
                <img v-lazy="item.logo" alt="">
                <ins class="icon-sumer"><img src="" alt=""></ins>
            </div>
            <article class="article">
                <h3 :class="{'hot':item.isFlagship == 1}">
                    {{item.brokerName}}
                    <img v-if="item.isStick" src="@/assets/images/guanfang2x.png">
                  </h3>
                <div class="flex-point">
                    <ul>
                        <li>欧美点差:{{item.euSpread}}</li>
                        <li>返佣比例:{{item.returnRatio ? item.returnRatio: "暂无"}}</li>
                    </ul>
                    <time>{{item.complex}} <i>分</i> </time>
                </div>
                <aside class="power-em">
                    <em v-for="(list,index) in item.keyWords">{{list}}</em>
                </aside>
                <a :href="item.evaluation.url" data-admin="tgg" v-if="item.evaluation">
                    <footer>
                        <img src="@/assets/images/ceping@2x.png" alt="">
                        <span>{{item.evaluation.summary}}</span>
                    </footer>
                </a>
                <footer data-admin="baidu" v-if="item.ad">
                    <img src="@/assets/images/guanggao@2x.png" alt="">
                    <span :userid="item.userId" class="baiduGg_home" :id="'ad-broke' + item.userId + ''"></span>
                </footer>
            </article>
        </li>
    </ul>

</section>

</template>

<script>

export default {
    props: ['homeDealer'],
    data: () => ({
        adMap: [],
        brokerLists: [],
        offsetTop: 0,
        loadOption: {
            pageSize: 20,
            pageNo: 1,
            result: true,
            isLoad: true
        }
    }),
    methods: {
        getBaiduAd() { //广告api
                this.$ajax({
                    url: "/api/comment/getBaiduAdInfo.json"
                }).then((res) => {
                    for (let i in res.data) {
                        this.adMap.push({
                            key: i,
                            value: res.data[i]["adId"]
                        });
                    }
                })
            },
            getBrokerList(url, params) { //广告及列表更新事件
                var params = params;
                var that = this;
                params.isLoad = false;
                this.$ajax({
                    url: url,
                    data: params
                }).then((res) => {
                    res.data.result = res.data.result ? res.data.result : [];
                    res.data.result.reduce((prev, curr) => { //数组合并
                        prev.push(curr);
                        return prev;
                    }, that.brokerLists);
                    setTimeout(() => {
                        params.isLoad = true;
                    }, 1500);
                    params.result = res.data.result.length >= params.pageSize ? true : false;
                }).then(() => {
                    setTimeout(() => {
                        this.setAdList()//广告入口展示
                        this.fillSlot(); //填充广告
                    }, 300)
                })
                params.pageNo++;
            },
            fillSlot() {
                for (let i = 0; i < this.brokerLists.length; i++) {
                    for (let j = 0; j < this.adMap.length; j++) {
                        if (!window.BAIDU_CLB_fillSlot) break;
                        if (!this.adMap[j].value && !this.adMap[j].key) continue;
                        if (this.brokerLists[i].userId == this.adMap[j].key && this.brokerLists[i].ready == undefined) {
                            BAIDU_CLB_fillSlot(this.adMap[j].value, "ad-broke" + this.adMap[j].key);
                            this.$set(this.brokerLists[i], "ready", true);
                        }
                    }
                }
            },
            setAdList() {
                var that = this;
                for (var i = 0; i < that.adMap.length; i++) {
                    for (let j = 0; j < that.brokerLists.length; j++) {
                        if (that.brokerLists[j].userId == that.adMap[i].key) {
                            that.$set(that.brokerLists[j], "ad", true)
                        }
                    }
                }
            },
            handleFun() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var htmlHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                if (scrollTop + clientHeight >= htmlHeight) {
                    if (this.loadOption.isLoad && this.loadOption.result) {
                        this.getBrokerList("/api/comment/getBrokerList.json", this.loadOption);
                    }
                }
            }
    },
    created() {

    },
    mounted() {
        this.getBaiduAd();
        this.getBrokerList("/api/comment/getBrokerList.json", this.loadOption); //列表项目
        this.$nextTick(() => {
            window.addEventListener("scroll", this.handleFun);
        })
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleFun);
    }
}

</script>
