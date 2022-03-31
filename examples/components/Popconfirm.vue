<template>
    <div class="page-box">
        <h2 class="_title">Popconfirm 气泡确认框</h2>
        <p class="_descript">点击元素，弹出气泡确认框。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-popconfirm title="这是一段内容确定删除吗？">
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            </template>
        </dd-block>
        <dd-block title="自定义" :code="code2">
            <template #source>
                <dd-popconfirm
                    confirm-button-text="好的"
                    cancel-button-text="不用了"
                    icon="icon-reeor"
                    icon-color="red"
                    title="这是一段内容确定删除吗？"
                    @confirm="deleteClick"
                    @cancel="cancel"
                >
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Popconfirm",
    data() {
        return {
            code1: `
                <dd-popconfirm title="这是一段内容确定删除吗？">
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            `,
            code2: `
                <dd-popconfirm
                    confirm-button-text="好的"
                    cancel-button-text="不用了"
                    icon="icon-reeor"
                    icon-color="red"
                    title="这是一段内容确定删除吗？"
                    @confirm="deleteClick"
                    @cancel="cancel"
                >
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            `,
            Attributes: [
                {
                    parameter: "title",
                    explain: "标题",
                    type: "String",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "confirm-button-text",
                    explain: "确认按钮文字",
                    type: "String",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "confirm-button-type",
                    explain: "确认按钮类型",
                    type: "String",
                    optional: "—",
                    default: "primary",
                },
                {
                    parameter: "cancel-button-type",
                    explain: "取消按钮类型",
                    type: "String",
                    optional: "—",
                    default: "Text",
                },
                {
                    parameter: "icon",
                    explain: "Icon",
                    type: "String",
                    optional: "—",
                    default: "icon-prompt-fill",
                },
                {
                    parameter: "icon-color",
                    explain: "Icon 颜色",
                    type: "String",
                    optional: "—",
                    default: "#f90",
                },
                {
                    parameter: "hide-icon",
                    explain: "是否隐藏 Icon",
                    type: "Boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "confirm",
                    explain: "点击确认按钮时触发",
                    backParameter: "—",
                },
                {
                    name: "cancel",
                    explain: "点击取消按钮时触发",
                    backParameter: "—",
                },
            ],
        };
    },
    methods: {
        deleteClick() {
            console.log("确定");
        },
        cancel() {
            console.log("取消");
        },
    },
};
</script>

<style scoped lang="less"></style>
