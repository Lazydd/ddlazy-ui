<template>
    <div class="page-box">
        <h2 class="_title">Link 文字链接</h2>
        <p class="_descript">文字超链接</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-link href="http://www.baidu.com">默认链接</dd-link>
                <dd-link type="primary">主要链接</dd-link>
                <dd-link type="success">成功链接</dd-link>
                <dd-link type="warning">警告链接</dd-link>
                <dd-link type="danger">危险链接</dd-link>
                <dd-link type="info">信息链接</dd-link>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-link href="http://www.baidu.com" disabled>默认链接</dd-link>
                <dd-link type="primary" disabled>主要链接</dd-link>
                <dd-link type="success" disabled>成功链接</dd-link>
                <dd-link type="warning" disabled>警告链接</dd-link>
                <dd-link type="danger" disabled>危险链接</dd-link>
                <dd-link type="info" disabled>信息链接</dd-link>
            </template>
        </dd-block>
        <dd-block title="下划线" :code="code3">
            <template #source>
                <dd-link :underline="false">有下划线</dd-link>
                <dd-link>无下划线</dd-link>
            </template>
        </dd-block>
        <dd-block title="图标" :code="code4">
            <template #source>
                <dd-link icon="icon-map">定位</dd-link>
                <dd-link>点赞
                  	<dd-icon icon="icon-good"></dd-icon>
                </dd-link>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Button 按钮" right="Radio 单选框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Link",
    data() {
        return {
            code1: `
                <dd-link href="http://www.baidu.com">默认链接</dd-link>
                <dd-link type="primary">主要链接</dd-link>
                <dd-link type="success">成功链接</dd-link>
                <dd-link type="warning">警告链接</dd-link>
                <dd-link type="danger">危险链接</dd-link>
                <dd-link type="info">信息链接</dd-link>
            `,
            code2: `
                <dd-link href="http://www.baidu.com" disabled>默认链接</dd-link>
                <dd-link type="primary" disabled>主要链接</dd-link>
                <dd-link type="success" disabled>成功链接</dd-link>
                <dd-link type="warning" disabled>警告链接</dd-link>
                <dd-link type="danger" disabled>危险链接</dd-link>
                <dd-link type="info" disabled>信息链接</dd-link>
            `,
            code3: `
                <dd-link :underline="false">默认链接</dd-link>
                <dd-link>默认链接</dd-link>
            `,
            code4: `
                <dd-link icon="icon-map">默认链接</dd-link>
                <dd-link>默认链接<dd-icon icon="icon-good"></dd-icon></dd-link>
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
