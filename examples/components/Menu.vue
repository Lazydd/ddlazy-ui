<template>
    <div class="page-box">
        <h2 class="_title">NavMenu 导航菜单</h2>
        <p class="_descript">为网站提供导航功能的菜单。</p>
        <dd-block title="侧栏" :code="code1">
            <template #source>
                <dd-menu v-model="activeKey" :data="menuData" />
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Message 弹框" right="Tabs 标签页"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            menuData: [
                {
                    title: "导航一",
                    key: "1",
                    icon: "icon-all",
                    children: [
                        {
                            title: "选项一",
                            key: "1-1",
                            children: [
                                {
                                    title: "选项1-1",
                                    key: "1-1-1",
                                    href: "/component/icon",
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "导航二",
                    key: "2",
                    icon: "icon-gift",
                    children: [
                        {
                            title: "选项一",
                            key: "2-1",
                            children: [
                                {
                                    title: "选项2-1-1",
                                    key: "2-1-1",
                                },
                            ],
                        },
                        {
                            title: "选项二",
                            key: "2-2",
                            children: [
                                {
                                    title: "选项2-2-1",
                                    key: "2-2-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "导航三",
                    key: "3",
                    icon: "icon-rmb",
                },
                {
                    title: "导航四",
                    key: "4",
                    icon: "icon-atm",
                },
            ],
            activeKey: "4",
            code1: `

            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "data",
                    explain: "展示数据",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "props",
                    explain: "配置选项，具体看下表",
                    type: "object",
                    optional: "—",
                    default: "—",
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
