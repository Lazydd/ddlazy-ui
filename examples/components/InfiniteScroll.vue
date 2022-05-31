<template>
    <div class="page-box">
        <h2 class="_title">InfiniteScroll 无限滚动</h2>
        <p class="_descript">滚动至底部时，加载更多数据。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <ul
                    class="infinite-list"
                    v-infinite-scroll="load"
                    style="overflow: auto"
                >
                    <li v-for="i in count" class="infinite-list-item">
                        {{ i }}
                    </li>
                </ul>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Button 按钮" right="Radio 单选框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "ddInfiniteScroll",
    data() {
        return {
            count: 10,
            code1: `
                <dd-link href="http://www.baidu.com">默认链接</dd-link>
                <dd-link type="primary">主要链接</dd-link>
                <dd-link type="success">成功链接</dd-link>
                <dd-link type="warning">警告链接</dd-link>
                <dd-link type="danger">危险链接</dd-link>
                <dd-link type="info">信息链接</dd-link>
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
        load() {
            this.count += 2;
        },
    },
};
</script>

<style lang="less" scoped>
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
    .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #e8f3fe;
        margin: 10px;
        color: #7dbcfc;
    }
}
</style>
