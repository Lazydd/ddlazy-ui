<template>
    <div class="page-box">
        <h2 class="_title">Switch 开关</h2>
        <p class="_descript">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-switch v-model="value" activeColor="#13ce66" inactiveColor="#ff4949"></dd-switch>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Switchd",
    data() {
        return {
            code1: `
                <dd-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></dd-switch>
            `,
            value: true
        };
    },
};
</script>

<style lang="less" scoped>
</style>
