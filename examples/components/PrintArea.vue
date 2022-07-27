<template>
    <div class="page-box">
        <h2 class="_title">PrintArea 打印</h2>
        <p class="_descript">打印</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button v-print="ddPrintArea">打印</dd-button>
                <dd-print>
                    <div id="ddPrintArea">打印测试</div>
                </dd-print>
            </template>
        </dd-block>
        <dd-footer left="Signature 签名" right=""></dd-footer>
    </div>
</template>

<script>
export default {
    name: "PrintArea",
    data() {
        return {
            code1: `
                <dd-button v-print="ddPrintArea">打印</dd-button>
                <dd-print>
                    <div id="ddPrintArea">打印测试</div>
                </dd-print>

                ddPrintArea: {
                    id: "ddPrintArea",
                    popTitle: "标题",
                    openCallback() {}, // 调用打印时的callback
                    closeCallback() {}, // 关闭打印的callback(无法区分确认or取消)
                },
            `,
            ddPrintArea: {
                id: "ddPrintArea",
                popTitle: "标题",
                openCallback() {}, // 调用打印时的callback
                closeCallback() {}, // 关闭打印的callback(无法区分确认or取消)
            },
        };
    },
};
</script>

<style lang="less" scoped></style>
