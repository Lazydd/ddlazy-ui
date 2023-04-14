<template>
    <div class="page-box">
        <h2 class="_title">Pagination 分页</h2>
        <p class="_descript">当数据量过多时，使用分页分解数据。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page.sync="page"
                    :total="302"
                    :page-size="10"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-block title="带有背景色的分页" :code="code2">
            <template #source>
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-size="10"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-block title="当只有一页时隐藏分页" :code="code3">
            <template #source>
                <dd-switch
                    v-model="value"
                    style="margin-bottom: 20px"
                ></dd-switch>
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-size="52"
                    :hide-on-single-page="value"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-block title="小型分页" :code="code4">
            <template #source>
                <dd-pagination
                    small
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-size="10"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe
            title="Form Events"
            :data="Attributes2"
            events
        ></dd-describe>
        <dd-footer left="ColorPicker 颜色选择器" right="Badge 标记"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    data() {
        return {
            page: 1,
            code1: `
                <dd-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page.sync="page"
                    :total="62"
                    :page-size="10"
                ></dd-pagination>
            `,
            code2: `
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            `,
            code3: `
                <dd-switch
                    v-model="value"
                    style="margin-bottom: 20px"
                ></dd-switch>
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-size="52"
                    :hide-on-single-page="value"
                ></dd-pagination>

                value: false,
            `,
            code4: `
                <dd-pagination
                    small
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            `,
            value: false,
            Attributes: [
                {
                    parameter: "total",
                    explain: "总条目数",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "layout",
                    explain: "组件布局，子组件名用逗号分隔",
                    type: "String",
                    optional: "'prev, pager, next, jumper, ->, total'",
                    default: "'prev, pager, next, jumper, ->, total'",
                },
                {
                    parameter: "current-page",
                    explain: "当前页数，支持 .sync 修饰符",
                    type: "number",
                    optional: "—",
                    default: "1",
                },
                {
                    parameter: "page-size",
                    explain: "每页显示条目个数，支持 .sync 修饰符",
                    type: "number",
                    optional: "—",
                    default: "10",
                },
                {
                    parameter: "page-sizes",
                    explain: "每页显示个数选择器的选项设置",
                    type: "number[]",
                    optional: "—",
                    default: "[10, 20, 30, 40, 50, 100]",
                },
                {
                    parameter: "page-count",
                    explain:
                        "总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "background",
                    explain: "是否为分页按钮添加背景色	",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "hide-on-single-page",
                    explain: "当只有一页时隐藏分页	",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "small",
                    explain: "是否使用小型分页样式",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "size-change",
                    explain: "pageSize 改变时会触发",
                    backParameter: "每页条数",
                },
                {
                    name: "current-change",
                    explain: "currentPage 改变时会触发",
                    backParameter: "当前页",
                },
                {
                    name: "prev-click",
                    explain: "用户点击上一页按钮改变当前页后触发",
                    backParameter: "当前页",
                },
                {
                    name: "next-click",
                    explain: "用户点击下一页按钮改变当前页后触发",
                    backParameter: "当前页",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
