<style lang="scss" scoped>

.app_music {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    min-height: 100%;
    bottom: 0;
    background-color: rgba(18, 18, 18, 0.65);
    aside.player_music {
        position: absolute;
        bottom: 0.5rem;
        left: 0;
        right: 0;
    }
    aside.music_list {
        overflow: hidden;
        p {
            font-size: .566rem;
            color: #fff;
            text-align: center;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: center;
            flex-direction: column;
            width: 1rem;
            margin: 1.5rem auto 0.5rem;
        }
        ins {
            display: block;
            text-decoration: none;
            margin: 0 auto;
            text-align: right;
            padding-right: .3rem;
            font-size: .45rem;
            color: #fff;
        }
    }
}

.more_search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1rem;
    padding: 0 .2rem;
    input {
        display: inline-block;
        border-radius: 5px;
        box-shadow: none;
        appearance: none;
        outline: none;
        padding: .1rem 0.2rem;
        width: 5.2rem;
        margin-right: .1rem;
        font-size: .3rem;
        line-height: 1.5em;
        border: 1px solid #dcdfe6;
        background: transparent;
        color: #fff;
    }
    button {
        display: inline-block;
        box-shadow: none;
        appearance: none;
        line-height: 1.5em;
        white-space: nowrap;
        border: 1px solid #409eff;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        transition: .1s;
        padding: 0.1rem;
        font-size: .3rem;
        border-radius: 5px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
}

.list-person {
    padding: .2rem;
    li {
        position: relative;
        padding: 0.2rem 0;
        display: flex;
        align-items: center;
        &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: #eee;
            transform: scaleY(0.5);
        }
        span {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: .3rem;
            color: #fff;
            &.sing_name {
                width: 2.8rem;
                margin-left: .5rem;
                text-align: left;
            }
            &.singer {
                margin-left: .1rem;
                width: 1.3rem;
            }
            &.sing_ep {
                margin-left: .1rem;
                width: 1.4rem;
            }
        }
        >img {
            display: inline-block;
            width: .8rem;
            height: .8rem;
            border-radius: 0.1rem;
            box-shadow: 0 0 4px #c3c3c3;
        }
    }
}

.page {
    height: .7rem;
    margin-bottom: .2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display: block;
        padding: 0.1rem;
        margin: 0 .2rem;
        line-height: 1.5em;
        border-radius: 5px;
        font-size: .28rem;
        text-align: center;
        background-color: #409eff;
        color: #fff;
    }
}

.player_music {
    .misic_pic {
        width: 2.6rem;
        height: 2.6rem;
        margin: .2rem auto;
        display: block;
        img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transform: rotate(0deg);
            animation: mymove 10s linear infinite;
        }
    }
    .bg_lyric {
        padding: .3rem 0;
        // background: rgba(18, 18, 18, 0.8);
        article {
            padding: 0 .2rem;
            height: 4rem;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            position: static;
            background: transprent;
            p {
                line-height: 1.5em;
                padding: 0.1rem 0;
                font-size: .32rem;
                text-align: center;
                transition: color 0.7s linear;
                color: #989898;
                &.activeLyric {
                    color: #fff;
                }
            }
        }
    }
}

@keyframes mymove {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes mymove {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

.setting_music {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // background-color: rgba(18, 18, 18, 0.8);
    span {
        display: block;
        width: .8rem;
        height: .8rem;
        img {
            display: block;
            width: 100%;
        }
    }
    .rotate_180 {
        transform: rotate(180deg);
    }
}

</style>

<template lang="html">

<section class="app_music">
    <div class="more_search">
        <input type="text" name="" value="" v-model="search">
        <button type="button" name="button" @click="searchMusic">搜索歌曲</button>
    </div>
    <aside class="music_list" v-if="this.isPlayList">
        <template v-if="!musicList.length">
            <p>海量音乐随意选</p>
            <ins>——— by Zero Sasuke</ins>
        </template>
        <ul class="list-person" v-if="musicList.length">
            <li @click="tarPlay(item)" v-for="(item,index) in musicList" :key="index">
                <img :src="item.al.picUrl">
                <span class="sing_name">{{item.name}}</span>
                <span class="singer">{{item.ar[0].name}}</span>
                <span class="sing_ep">{{item.al.name}}</span>
            </li>
        </ul>
        <nav class="page" v-if="musicList.length">
            <a href="javascript:;" @click="pagePrev()">上一页</a>
            <a href="javascript:;" @click="pageNext()">下一页</a>
        </nav>
    </aside>
    <aside class="player_music" v-if="!this.isPlayList">
        <div class="misic_pic">
            <img :src="playInfo.al.picUrl">
        </div>
        <div class="bg_lyric">
            <article id="lyric_area">
                <p v-for="(item,index) in musicLyric" :class="{'activeLyric':activeLyric==index}" :key="index" :data-scroll="index">
                    <span>{{item}}</span>
                </p>
            </article>
        </div>

        <vprogress :duration="this.duration" :currentTime="this.currentTime" :player="this.player" @upLyric="upLyric"></vprogress>

        <div class="setting_music">
            <span><img src="@/assets/images/up_music.png" alt=""> </span>
            <span v-if="!this.paused" @click="topause()"><img src="@/assets/images/topause.png" alt=""> </span>
            <span v-if="this.paused" @click="toplay()"><img src="@/assets/images/toplay.png" alt=""> </span>
            <span class="rotate_180"><img src="@/assets/images/up_music.png" alt=""> </span>
        </div>
    </aside>
    <progress hidden="hidden" :value="this.currentTime" :max="this.duration"></progress>
    <audio loop :src="url"></audio>
</section>

</template>

<script>

import vprogress from './common/progress'; //进度条
export default {
    components: {
        vprogress
    },
    data: () => ({
        search: "",
        isPlayList: true,
        page: 1,
        songCount: 0,
        activeLyric: 0, //活动歌词高亮
        currentTime: 0,
        duration: 400,
        paused: true,
        elem: null, //歌词元素
        playInfo: null,
        url: null,
        player: null,
        musicLyric: [],
        musicList: [],
        list: [] //时间戳对应索引
    }),
    methods: {
        tarPlay(item) {
                this.paused = true;
                this.isPlayList = false;
                this.playInfo = item;
                this.$ajax({ //播放地址:
                    url: "/music/cloudmusic/",
                    data: {
                        type: "song",
                        id: item.id,
                        br: 128000
                    },
                    type: "GET"
                }).then((res) => {
                    this.player = document.getElementsByTagName("audio")[0];
                    this.url = res.data[0].url;
                }).then(() => {
                    var that = this;
                    this.player.load(); //地址更改后重新加载
                    this.player.oncanplay = function() { //允许播放时
                        that.duration = parseInt(that.player.duration);
                        that.cyricRoll();
                    }
                    this.player.onplay = function() {
                        that.paused = false;
                    }
                    this.player.onpause = function() {
                        that.paused = true;
                    }
                })

                this.$ajax({ //歌词地址:
                    url: "/music/cloudmusic/",
                    type: "GET",
                    data: {
                        type: "lyric",
                        id: item.id,
                        br: 128000
                    },
                }).then((res) => {
                    this.list = [];
                    this.lyric_area = document.getElementById("lyric_area");
                    this.musicLyric = res.lrc.lyric.split("\n");
                    let reg = /\[(\d*):(\d*)\.(\d*)\]/;
                    for (let j = 0; j < this.musicLyric.length; j++) {
                        this.musicLyric[j].match(reg);
                        this.list.push(parseInt(RegExp.$1) * 60 + parseInt(RegExp.$2));
                    }
                    this.musicLyric = this.musicLyric.map((item, index) => {
                        return item.replace(/\[.+\]\s*/g, "");
                    })
                })
            },
            cyricRoll() {
                var that = this;
                clearInterval(that.timer);
                that.timer = setInterval(() => {
                    that.currentTime = Math.floor(that.player.currentTime);
                    that.list.forEach((item, index) => {
                        if (item == that.currentTime) {
                            that.activeLyric = index;
                            var scrollTop = that.getElementTop("[data-scroll='" + index + "']");
                            if (that.elem == null) return false;
                            var beforeDiff = that.elem.previousSibling;
                            var diff = 0;
                            if (beforeDiff != null) {
                                diff = beforeDiff.offsetHeight;
                                if (beforeDiff.previousSibling != null) {
                                    diff += beforeDiff.previousSibling.offsetHeight;
                                }
                            }
                            that.lyric_area.scrollTop = scrollTop - diff;
                        }
                    })
                }, 30)
            },
            getElementTop(element) {
                var el = (typeof element == "string") ? document.querySelector(element) : element;
                this.elem = el;
                if (el == null) return false;
                if (el.parentNode === null || el.style.display == 'none') {
                    return false;
                }
                return el.offsetTop - el.parentNode.offsetTop;
            },
            searchMusic() {
                this.isPlayList = true;
                this.$ajax({ //搜索关键词
                    url: "/music/cloudmusic/",
                    data: {
                        type: "search",
                        s: this.search,
                        limit: 20,
                        offset: this.page
                    },
                    type: "GET",
                }).then((res) => {
                    this.musicList = res.result.songs;
                    this.songCount = res.result.songCount;
                })
            },
            upLyric() {
                this.cyricRoll();
            },
            pagePrev() {
                this.page--;
                if (this.page == 0) {
                    this.page = 1;
                }
                this.searchMusic();
            },
            toplay() {
                var that = this;
                if (this.url == "") {
                    alert("暂时没有资源！");
                    return false;
                }
                if (this.player.paused) {
                    this.player.play();
                }
                document.addEventListener("WeixinJSBridgeReady", function() {
                    if (that.player.paused) {
                        that.player.play();
                    }
                }, false);
                document.addEventListener("YixinJSBridgeReady", function() {
                    if (that.player.paused) {
                        that.player.play();
                    }
                }, false);
            },
            topause() {
                if (!this.player.paused) {
                    this.player.pause();
                }
            },
            pageNext() {
                this.page++;
                if (this.page * 20 > this.songCount) {
                    this.page = Math.ceil(this.songCount / 20)
                }
                this.searchMusic();
            }
    },
    mounted() {
        var str = "[00:00.00] 作曲 : 浪客秦昊";
        str = str.replace(/\[.+\]\s+/g, "");
        console.log(str);
    },
    created() {},
    beforeDestroy() {}
}

</script>
