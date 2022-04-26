<template>
    <div class="page-box">
        <h2 class="_title">DatePicker 日期选择器</h2>
        <p class="_descript">用于选择或输入日期</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-date-picker></dd-date-picker>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
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
            code1: `
                
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
        };
    },
};
</script>

<style lang="less" scoped>
.dd-link {
    margin: 0 5px;
}
</style>
