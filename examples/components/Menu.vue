<template>
    <div class="page-box">
        <h2 class="_title">NavMenu 导航菜单</h2>
        <p class="_descript">为网站提供导航功能的菜单。</p>
        {{ d }}
        <dd-block title="侧栏" :code="code1">
            <template #source>
                <dd-menu
                    :data="menuData"
                    default-active="4"
                    @change="abc"
                ></dd-menu>
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
                    key: "2-1",
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
            d: "",
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
    methods: {
        abc(item) {
            this.d = item;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-link {
    margin: 0 5px;
}
</style>
