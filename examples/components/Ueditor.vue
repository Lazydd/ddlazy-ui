<template>
    <div class="page-box">
        <h2 class="_title">Tinymce 富文本编辑器</h2>
        <p class="_descript">
            富文本编辑器（http://tinymce.ax-z.cn/plugins/hr.php）
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-ueditor
                    ref="ueditor"
                    :tinymceHtml="content"
                    @change="change"
                    style="margin-top: 15px"
                ></dd-ueditor>
                <div class="content" v-html="content"></div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Methods" :data="Attributes2" events></dd-describe>
        <dd-footer left="Echarts 图表" right="PDF 阅读器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Ueditor",
    data() {
        return {
            content: `<p><span style="font-size: 24px;"><span style="font-size: 24px;">这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是<span style="font-size: 36px;">一段测试文字这是一段测试文字这是一段测试文字这是一</span><span style="font-size: 36px;">段测试<img src="http://img.baidu.com/hi/jx2/j_0021.gif"/></span></span></span></p><p style="text-align: center;"></p>`,
            code1: `
                <dd-ueditor
                    ref="ueditor"
                    :tinymceHtml="content"
                    @change="change"
                    style="margin-top: 15px"
                ></dd-ueditor>
                <div class="content" v-html="content"></div>

                change(val) {
                    this.content = val;
                },
            `,
            Attributes: [
                {
                    parameter: "tinymceHtml",
                    explain: "绑定值",
                    type: "—",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "tinymceHeight",
                    explain: "组件高度",
                    type: "number",
                    optional: "—",
                    default: "500",
                },
                {
                    parameter: "url",
                    explain: "上传地址",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否可以编辑",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "富文本内容发生变化时触发",
                    backParameter: "组件绑定值",
                },
            ],
        };
    },
    methods: {
        change(val) {
            this.content = val;
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #ebebeb;
}
</style>
