<template>
    <div class="page-box">
        <h2 class="_title">Breadcrumb 面包屑</h2>
        <p class="_descript">显示当前页面的路径，快速返回之前的任意页面。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-breadcrumb separator="/">
                    <dd-breadcrumb-item :to="{ path: '/' }">首页</dd-breadcrumb-item>
                    <dd-breadcrumb-item><a href="/">活动管理</a></dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动列表</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动详情</dd-breadcrumb-item>
                </dd-breadcrumb>
            </template>
        </dd-block>
        <dd-block title="图标分隔符" :code="code2">
            <template #source>
                <dd-breadcrumb separator-class="icon-link">
                    <dd-breadcrumb-item :to="{ path: '/' }">首页</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动管理</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动列表</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动详情</dd-breadcrumb-item>
                </dd-breadcrumb>
            </template>
        </dd-block>
        <dd-describe title="Breadcrumb Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Breadcrumb Item Attributes" :data="Attributes2"></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    data() {
        return {
            code1: `
                <dd-breadcrumb separator="/">
                    <dd-breadcrumb-item :to="{ path: '/' }">首页</dd-breadcrumb-item>
                    <dd-breadcrumb-item><a href="/">活动管理</a></dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动列表</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动详情</dd-breadcrumb-item>
                </dd-breadcrumb>
            `,
            code2: `
                <dd-breadcrumb separator-class="icon-link">
                    <dd-breadcrumb-item :to="{ path: '/' }">首页</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动管理</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动列表</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动详情</dd-breadcrumb-item>
                </dd-breadcrumb>
            `,
            Attributes: [
                {
                    parameter: "separator",
                    explain: "分隔符",
                    type: "string",
                    optional: "—",
                    default: "斜杠'/'",
                },
                {
                    parameter: "separator-class",
                    explain: "图标分隔符 class",
                    type: "string",
                    optional: "—",
                    default: "-",
                },
            ],
            Attributes2: [
                {
                    parameter: "to",
                    explain: "路由跳转对象，同 vue-router 的 to",
                    type: "string/object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "replace",
                    explain: "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ]
        };
    },
};
</script>

<style lang="less" scoped></style>
