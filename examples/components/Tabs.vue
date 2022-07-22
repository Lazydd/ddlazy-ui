<template>
    <div class="page-box">
        <h2 class="_title">Tabs 标签页</h2>
        <p class="_descript">分隔内容上有关联但属于不同类别的数据集合。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tabs v-model="activeName" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" :disabled='true' name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="选项卡样式" :code="code2">
            <template #source>
                <dd-tabs v-model="activeName1" type="card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" :disabled='true' name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="卡片化" :code="code3">
            <template #source>
                <dd-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" :disabled='true' name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="icon图标标签页" :code="code4">
            <template #source>
                <dd-tabs v-model="activeName3" type="border-card" @tab-click="handleClick">
                    <dd-tab-pane icon="icon-calendar" label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-cry" label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-messagecenter" :disabled='true' label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-store" label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-block title="分段控制" :code="code5">
            <template #source>
                <dd-tabs v-model="activeName4" type="segmented" @tab-click="handleClick">
                    <dd-tab-pane icon="icon-calendar" label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-cry" label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-messagecenter" :disabled='true' label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-store" label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            </template>
        </dd-block>
        <dd-describe title="Tabs Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Tabs Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Tab-pane Attributes" :data="Attributes3"></dd-describe>
        <dd-footer left="MessageBox 弹框" right="Breadcrumb 面包屑"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Tabs",
    data() {
        return {
            activeName: "first",
            activeName1: "first",
            activeName2: "first",
            activeName3: "first",
            activeName4: "first",
            code1: `
                <dd-tabs v-model="activeName" @tab-click="handleClick">
                    <dd-tab-pane label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane label="角色管理" :disabled='true' name="third">角色管理</dd-tab-pane>
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
            code5:`
                <dd-tabs v-model="activeName4" type="segmented" @tab-click="handleClick">
                    <dd-tab-pane icon="icon-calendar" label="用户管理" name="first">用户管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-cry" label="配置管理" name="second">配置管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-messagecenter" :disabled='true' label="角色管理" name="third">角色管理</dd-tab-pane>
                    <dd-tab-pane icon="icon-store" label="定时任务补偿管理" name="fourth">定时任务补偿管理</dd-tab-pane>
                </dd-tabs>
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值，选中选项卡的 name",
                    type: "string",
                    optional: "—",
                    default: "第一个选项卡的 name",
                },
                {
                    parameter: "type",
                    explain: "风格类型",
                    type: "string",
                    optional: "card/border-card/segmented",
                    default: "—",
                },
            ],
            Attributes2: [
                {
                    name: "tab-click",
                    explain: "tab 被选中时触发",
                    backParameter: "被选中的标签 tab 实例",
                },
            ],
            Attributes3: [
                {
                    parameter: "label",
                    explain: "选项卡标题",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "禁用",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "name",
                    explain: "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
                    type: "string",
                    optional: "card/border-card",
                    default: "—",
                },
                {
                    parameter: "icon",
                    explain: "选项卡图标",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
            ],
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
