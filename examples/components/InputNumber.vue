<template>
    <div class="page-box">
        <h2 class="_title">InputNumber 计数器</h2>
        <p class="_descript">仅允许输入标准的数字值，可定义范围</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-input-number  v-model="num" :min="1" :max="10"></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-input-number v-model="num2" disabled></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="严格步数" :code="code3">
            <template #source>
                <dd-input-number v-model="num3" :step="2"></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="精度" :code="code4">
            <template #source>
                <dd-input-number v-model="num4" :precision="2" :step="0.1"></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="尺寸" :code="code5">
            <template #source>
                <dd-input-number v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="medium" v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="small" v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="mini" v-model="num5" :step="1"></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="按钮位置" :code="code6">
            <template #source>
                <dd-input-number v-model="num6" controls-position="right" :min="1" :max="10"></dd-input-number>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="Input 输入框" right="Select 选择器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "InputNumber",
    data() {
        return {
            num: 1,
            num2: 1,
            num3: 5,
            num4: 1,
            num5: 1,
            num6: 1,
            code1: `
                <dd-input-number v-model="num" :min="1" :max="10"></dd-input-number>
            `,
            code2: `
                <dd-input-number v-model="num2" disabled></dd-input-number>
            `,
            code3: `
                <dd-input-number v-model="num3" :step="2"></dd-input-number>
            `,
            code4: `
                <dd-input-number v-model="num4" :precision="2" :step="0.1"></dd-input-number>
            `,
            code5: `
                <dd-input-number v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="medium" v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="small" v-model="num5" :step="1" style="margin-right:15px"></dd-input-number>
                <dd-input-number size="mini" v-model="num5" :step="1"></dd-input-number>
            `,
            code6:`
                <dd-input-number v-model="num6" controls-position="right" :min="1" :max="10"></dd-input-number>
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "number",
                    optional: "—",
                    default: "0",
                },
                {
                    parameter: "min",
                    explain: "设置计数器允许的最小值",
                    type: "number",
                    optional: "—",
                    default: "-Infinity",
                },
                {
                    parameter: "max",
                    explain: "设置计数器允许的最大值",
                    type: "number",
                    optional: "—",
                    default: "Infinity",
                },
                {
                    parameter: "step",
                    explain: "计数器步长",
                    type: "number",
                    optional: "—",
                    default: "1",
                },
                {
                    parameter: "precision",
                    explain: "数值精度",
                    type: "	number",
                    optional: "—",
                    default: "	—",
                },
                {
                    parameter: "size",
                    explain: "计数器尺寸",
                    type: "string",
                    optional: "medium  /  small  /  mini",
                    default: "false",
                },
                {
                    parameter: "disabled",
                    explain: "禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "size",
                    explain: "输入框尺寸",
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
                {
                    parameter: "placeholder",
                    explain: "输入框默认 placeholder",
                    type: "string",
                    optional: "-",
                    default: "-",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "绑定值被改变时触发",
                    backParameter: "currentValue, oldValue",
                },
                {
                    name: "blur",
                    explain: "在组件 Input 失去焦点时触发",
                    backParameter: "(event: Event)",
                },
                {
                    name: "focus",
                    explain: "在组件 Input 获得焦点时触发",
                    backParameter: "(event: Event)",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped></style>
