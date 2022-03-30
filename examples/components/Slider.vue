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
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="Switch 开关" right="TimePicker 时间选择器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            code1: `
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

                value1: 0,
                value2: 100,
                value3: 20,
            `,
            value1: 0,
            value2: 100,
            value3: 20,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "number / string",
                    optional: "—",
                    default: "0",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
                    backParameter: "改变后的值",
                },
                {
                    name: "input",
                    explain: "数据改变时触发（使用鼠标拖曳时，活动过程实时触发）",
                    backParameter: "改变后的值",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
    &:last-child {
        border: none;
    }
}
.demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
}
</style>
