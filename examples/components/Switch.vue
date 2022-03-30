<template>
    <div class="page-box">
        <h2 class="_title">Switch 开关</h2>
        <p class="_descript">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-switch v-model="value" activeColor="#13ce66" inactiveColor="#ff4949"></dd-switch>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-switch v-model="value1" disabled ></dd-switch>
                <dd-switch v-model="value2" disabled></dd-switch>
            </template>
        </dd-block>
        <dd-block title="文字描述" :code="code3">
            <template #source>
                <div style="margin-bottom:20px">
                    <dd-switch v-model="value3" activeText="按年付费" inactiveText="按月付费"></dd-switch>
                </div>
                <div>
                    <dd-switch v-model="value4" activeText="按年付费" inactiveText="按月付费" activeColor="#13ce66" inactiveColor="#ff4949"></dd-switch>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Methods" :data="Attributes3" methods></dd-describe>
        <dd-footer left="Cascader 级联选择器" right="Slider 滑块"></dd-footer>
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
            code2: `
                <dd-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></dd-switch>
            `,
            code3: `
                <div style="margin-bottom:20px">
                    <dd-switch v-model="value3" activeText="按年付费" inactiveText="按月付费"></dd-switch>
                </div>
                <div>
                    <dd-switch v-model="value4" activeText="按年付费" inactiveText="按月付费" activeColor="#13ce66" inactiveColor="#ff4949"></dd-switch>
                </div>
            `,
            value: true,
            value1: true,
            value2: false,
            value3: true,
            value4: true,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "boolean / string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "active-text",
                    explain: "switch 打开时的文字描述",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "inactive-text",
                    explain: "switch 关闭时的文字描述",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "active-color",
                    explain: "switch 打开时的背景色",
                    type: "string",
                    optional: "—",
                    default: "#409EFF",
                },
                {
                    parameter: "inactive-color",
                    explain: "switch 关闭时的背景色",
                    type: "string",
                    optional: "—",
                    default: "#C0CCDA",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "switch 状态发生变化时的回调函数",
                    backParameter: "新状态的值",
                },
            ],
            Attributes3: [
                {
                    name: "focus",
                    explain: "使 Switch 获取焦点",
                    parameter: "-",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
</style>
