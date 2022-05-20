<template>
    <div class="page-box">
        <h2 class="_title">NavMenu 导航菜单</h2>
        <p class="_descript">为网站提供导航功能的菜单。</p>
        <dd-block title="侧栏" :code="code1">
            <template #source>
                <dd-menu>
                    <dd-submenu index="1">
                        <template slot="title">
                            <dd-icon icon="icon-all"></dd-icon>
                            <span>导航一</span>
                        </template>
                        <dd-menu-item index="1-1">选项1</dd-menu-item>
                        <dd-menu-item index="1-2">选项2</dd-menu-item>
                        <dd-submenu>
                            <template slot="title">
                                <dd-icon icon="icon-all"></dd-icon>
                                <span>导航二</span>
                            </template>
                            <dd-menu-item index="2-1">选项1</dd-menu-item>
                            <dd-menu-item index="2-2">选项2</dd-menu-item>
                        </dd-submenu>
                    </dd-submenu>
                </dd-menu>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Button 按钮" right="Radio 单选框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Menu",
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
