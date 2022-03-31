<template>
    <div class="page-box">
        <h2 class="_title">Badge 标记</h2>
        <p class="_descript">出现在按钮、图标旁的数字或状态标记。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-badge :value="12" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="3" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="1" class="item" type="primary">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="warning">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="1" class="item" type="danger">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="success">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="info">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            </template>
        </dd-block>
        <dd-block title="最大值" :code="code2">
            <template #source>
                <dd-badge :value="200" :max="99" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="100" :max="10" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            </template>
        </dd-block>
        <dd-block title="自定义内容" :code="code3">
            <template #source>
                <dd-badge value="new" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge value="hot" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            </template>
        </dd-block>
        <dd-block title="小红点" :code="code4">
            <template #source>
                <dd-badge is-dot class="item">评论</dd-badge>
                <dd-badge is-dot class="item">
                    <dd-button
                        icon="icon-goumaipianhao"
                        type="primary"
                    ></dd-button>
                </dd-badge>
            </template>
        </dd-block>
        <dd-block title="影藏" :code="code5">
            <template #source>
                <dd-badge is-dot class="item" hidden>
                    <dd-button
                        icon="icon-goumaipianhao"
                        type="primary"
                    ></dd-button>
                </dd-badge>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Pagination 分页" right="Avatar 头像"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Badge",
    data() {
        return {
            code1: `
                <dd-badge :value="12" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="3" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="1" class="item" type="primary">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="warning">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="1" class="item" type="danger">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="success">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="2" class="item" type="info">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            `,
            code2: `
                <dd-badge :value="200" :max="99" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge :value="100" :max="10" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            `,
            code3: `
                <dd-badge value="new" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
                <dd-badge value="hot" class="item">
                    <dd-button size="small">评论</dd-button>
                </dd-badge>
            `,
            code4: `
                <dd-badge is-dot class="item">评论</dd-badge>
                <dd-badge is-dot class="item">
                    <dd-button
                        icon="icon-goumaipianhao"
                        type="primary"
                    ></dd-button>
                </dd-badge>
            `,
            code5: `
                <dd-badge is-dot class="item" hidden>
                    <dd-button
                        icon="icon-goumaipianhao"
                        type="primary"
                    ></dd-button>
                </dd-badge>
            `,
            Attributes: [
                {
                    parameter: "value",
                    explain: "显示值",
                    type: "	string, number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "max",
                    explain: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "is-dot",
                    explain: "小圆点",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "hidden",
                    explain: "隐藏 badge",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "type",
                    explain: "类型",
                    type: "string",
                    optional: "primary / success / warning / danger / info",
                    default: "—",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
