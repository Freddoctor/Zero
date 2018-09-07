<style lang="scss">



</style>

<template lang="html">

<div>
    <section class="section-wrap">
        <ul>
            <li v-for="(item,index) in platList" :key="index">
                <h3 class="clamp_1">{{item.title}}</h3>
                <p class="clamp_2">{{item.content}}</p>
            </li>
        </ul>
    </section>
</div>

</template>

<script>

export default {
    name:"Platform",
    data: () => ({
        platList: [{
            title: "平台模式: MM模式",
            content: "提供的服务和金融产品的与时俱进，尽最大可能满足柯飞虎防辐射的克里斯多看看收款打款山东省非法。"
        },{
            title: "平台模式: MM模式",
            content: "提供的服务和金融产品的与时俱进，尽最大可能满足柯飞虎防辐射的克里斯多看看收款打款山东省非法。"
        },{
            title: "平台模式: MM模式",
            content: "提供的服务和金融产品的与时俱进，尽最大可能满足柯飞虎防辐射的克里斯多看看收款打款山东省非法。"
        }]
    }),
    methods: {

    }
}

</script>
