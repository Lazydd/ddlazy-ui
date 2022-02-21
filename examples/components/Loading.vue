<template>
    <div class="page-box">
        <h2 class="_title">Loading 加载</h2>
        <p class="_descript">加载数据时显示动效。</p>
        <dd-block title="整页加载" :code="code1">
            <template #source>
                <dd-button type="primary" @click="openFullScreen2"
                    >服务方式</dd-button
                >
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            code1: `
                <dd-button type="primary" @click="openFullScreen2">服务方式</dd-button>

                this.$loading.service("Loading");
                setTimeout(() => {
                    this.$loading.close();
                }, 3000);
            `,
        };
    },
    methods: {
        openFullScreen2() {
            // const loading = this.$loading({
            //     lock: true,
            //     text: "Loading",
            //     spinner: "icon-loading",
            // });
            // setTimeout(() => {
            //     loading.close();
            // }, 3000);

            this.$loading.service("Loading");
            setTimeout(() => {
                this.$loading.close();
            }, 3000);
        },
    },
};
</script>

<style lang="less" scoped></style>
