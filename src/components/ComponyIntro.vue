<style lang="scss">



</style>

<template lang="html">

<div>
    <div class="section-content">
        <h5>{{compony}}</h5>
        <p>{{content}}</p>
    </div>
</div>

</template>

<script>

export default {
    name: "ComponyIntro",
    data: () => ({
        compony: "公司介绍",
        content: "以上信息均由官方平台人员提供，仅供参考。如发现与实际平台信息内容不符， 您可以选择右上角信息报错，您的报错内容一旦被确认采纳，我们将督促经纪商尽快修改。"
    }),
    mounted() {

    }
}

</script>
