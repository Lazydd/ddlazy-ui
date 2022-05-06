<template>
    <div class="page-box">
        <h2 class="_title">DatePicker 日期选择器</h2>
        <p class="_descript">用于选择或输入日期</p>
        {{ value1 }}
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-date-picker v-model="value1"></dd-date-picker>
            </template>
        </dd-block>
        <dd-block title="可清空单选" :code="code2">
            <template #source>
                <dd-date-picker v-model="value2" clearable></dd-date-picker>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer
            left="TimePicker 时间选择器"
            right="Transfer 穿梭框"
        ></dd-footer>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    data() {
        return {
            value1: new Date(),
            value2: "",
            code1: `
                <dd-date-picker v-model="value1"></dd-date-picker>

                value1: new Date(),
            `,
            code2: `
                <dd-date-picker v-model="value2" clearable></dd-date-picker>

                value2: "",
            `,
            Attributes: [
                {
                    parameter: "type",
                    explain: "类型",
                    type: "string",
                    optional: "primary / success / warning / danger / info",
                    default: "default",
                },
                {
                    parameter: "underline",
                    explain: "是否下划线",
                    type: "boolean",
                    optional: "—",
                    default: "true",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用状态",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "href",
                    explain: "原生 href 属性",
                    type: "boolean",
                    optional: "string",
                    default: "-",
                },
                {
                    parameter: "icon",
                    explain: "图标类名",
                    type: "boolean",
                    optional: "string",
                    default: "-",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "选中值发生变化时触发",
                    backParameter: "目前的选中值",
                },
                {
                    name: "visible-change",
                    explain: "下拉框出现/隐藏时触发",
                    backParameter: "出现则为 true，隐藏则为 false",
                },
                {
                    name: "clear",
                    explain: "可清空的单选模式下用户点击清空按钮时触发",
                    backParameter: "—",
                },
                {
                    name: "blur",
                    explain: "当 input 失去焦点时触发",
                    backParameter: "(event: Event)",
                },
                {
                    name: "focus",
                    explain: "当 input 获得焦点时触发",
                    backParameter: "(event: Event)",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.dd-link {
    margin: 0 5px;
}
</style>
