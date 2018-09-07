<style lang="scss">

.progress {
    margin: .4rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    time {
        display: block;
        font-style: normal;
        width: 18%;
        text-align: center;
        font-size: 0.25rem;
        color: #fff;
        line-height: 1.5em;
    }
    aside.pro_control {
        position: relative;
        width: 62.5%;
        height: 0.1rem;
        background: #c1c1c1;
        border-radius: 0.05rem;
        span {
            position: absolute;
            left: 0;
            width: 5%;
            height: 0.1rem;
            border-radius: 0.05rem;
            background: #C20C0C;
            i {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.12rem;
                height: 0.12rem;
                border-radius: 999px;
                border: 0.15rem solid #C20C0C;
                background: #fff;
            }
        }
    }
}

</style>

<template lang="html">

<section class="progress">
    <time>{{timeFormat(currentTime)}}</time>
    <aside class="pro_control">
        <span :style="{'width':widthPercent +'%'}"><i id="slider" @touchstart="tapstart"
          ></i></span>
    </aside>
    <time>{{timeFormat(duration)}}</time>
</section>

</template>

<script>

export default {
    data: () => ({
        elem: null,
        startX: 0,
        endX: 0,
        area: 0,
        width: 0,
        widthPercent: 5,
        readyWidth: 0
    }),
    props: ["duration", "currentTime", "player"],
    watch: {
        currentTime() { //时间与进度成比例
            this.timePercent();
        }
    },
    methods: {
        timePercent() {
                let percent = this.currentTime / this.duration * 100;
                if (this.startTap) return false;
                this.readyWidth = this.currentTime / this.duration * this.area;
                this.widthPercent = percent < 5 ? 5 : percent;
            },
            tapstart(e) {
                this.startTap = true;
                this.startX = e.touches[0].pageX || e.touches[0].clientX;
                document.body.addEventListener("touchmove", this.tapmove);
                document.body.addEventListener("touchend", this.tapend);
            },
            timeFormat(time) {
                let min = parseInt(time / 60);
                let sec = time % 60;
                if (min < 10) {
                    min = "0" + min
                }
                if (sec < 10) {
                    sec = "0" + sec
                }
                return min + " : " + sec;
            },
            tapmove(e) {
                this.moveX = e.touches[0].pageX || e.touches[0].clientX;
                let diff = this.moveX - this.startX;
                this.width = diff + this.readyWidth;
                if (this.width < 0) {
                    this.width = 0;
                } else if (this.width > this.area) {
                    this.width = this.area
                }
                this.widthPercent = this.width / this.area * 100;
                if (this.widthPercent <= 5) {
                    this.widthPercent = 5;
                } else if (this.widthPercent >= 100) {
                    this.widthPercent = 100;
                }
            },
            tapend(e) {
                this.readyWidth = this.width;
                this.player.currentTime = this.readyWidth / this.area * this.duration;
                this.endX = e.changedTouches[0].pageX || e.changedTouches[0].clientX;
                this.startTap = false;
                document.body.removeEventListener("touchmove", this.tapmove);
                document.body.removeEventListener("touchend", this.tapend);
                this.$emit("upLyric", this.player.currentTime)
            }
    },
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.elem = document.getElementById("slider");
            this.area = document.querySelector('.pro_control').offsetWidth;
        })
        
    },
    beforeDestroy() {}
}

</script>
