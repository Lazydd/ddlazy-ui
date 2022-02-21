<template>
    <div class="page-box">
        <h2 class="_title">Breadcrumb 面包屑</h2>
        <p class="_descript">显示当前页面的路径，快速返回之前的任意页面。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-breadcrumb separator="/">
                    <dd-breadcrumb-item>首页</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动管理</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动列表</dd-breadcrumb-item>
                    <dd-breadcrumb-item>活动详情</dd-breadcrumb-item>
                </dd-breadcrumb>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    data() {
        return {
            code1: `
                
            `,
            code2: `
                
            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
