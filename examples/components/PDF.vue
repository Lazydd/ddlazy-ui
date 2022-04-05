<template>
    <div class="page-box">
        <h2 class="_title">PDF 阅读器</h2>
        <p class="_descript">PDF 阅读器</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-pdf></dd-pdf>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Button 按钮" right="Radio 单选框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "PDF",
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
            ],
        };
    },
};
</script>

<style lang="less" scoped>
</style>
