<template>
    <div class="page-box">
        <h2 class="_title">Slider 滑块</h2>
        <p class="_descript">通过拖动滑块在一个固定区间内进行选择</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <dd-slider v-model="value1"></dd-slider>
                </div>
                <div class="block">
                    <span class="demonstration">自定义初始值</span>
                    <dd-slider v-model="value2"></dd-slider>
                </div>
                <div class="block">
                    <span class="demonstration">禁用</span>
                    <dd-slider v-model="value3" disabled></dd-slider>
                </div>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            code1: `
                <dd-slider v-model="value1"></dd-slider>
            `,
            value1: 0,
            value2: 0.2,
            value3: 0.2,
        };
    },
};
</script>

<style lang="less" scoped>
.block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
}
.demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
}
</style>
