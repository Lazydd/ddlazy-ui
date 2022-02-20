<template>
    <div class="page-box">
        <h2 class="_title">Tabs 标签页</h2>
        <p class="_descript">分隔内容上有关联但属于不同类别的数据集合。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tabs v-model="activeName" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="选项卡样式" :code="code2">
            <template #source>
                <dd-tabs v-model="activeName1" type="card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="卡片化" :code="code3">
            <template #source>
                <dd-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="icon图标标签页" :code="code4">
            <template #source>
                <dd-tabs v-model="activeName3" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane icon="icon-calendar" label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-cry" label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-messagecenter" label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-store" label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Icon",
    data() {
        return {
            activeName: "first",
            activeName1: "first",
            activeName2: "first",
            activeName3: "first",
            code1: `
                <dd-tabs v-model="activeName" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            `,
            code2: `
                <dd-tabs v-model="activeName1" type="card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            `,
            code3: `
                <dd-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            `,
            code4: `
                <dd-tabs v-model="activeName3" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane icon="icon-calendar" label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            `,
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>

<style lang="less" scoped></style>
