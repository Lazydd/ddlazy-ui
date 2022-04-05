<template>
    <div class="page-box">
        <h2 class="_title">Ueditor 富文本编辑器</h2>
        <p class="_descript">富文本编辑器</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button @click="setDisabled" style="margin-right: 15px"
                    >禁用编辑器</dd-button
                >
                <dd-button @click="setEnabled">启用编辑器</dd-button>
                <dd-ueditor
                    ref="ueditor"
                    v-model="content"
                    :height="600"
                    style="margin-top: 15px"
                ></dd-ueditor>
                <div class="content" v-html="content"></div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Methods" :data="Attributes2" events></dd-describe>
        <dd-describe title="Methods" :data="Attributes3" methods></dd-describe>
        <dd-footer left="Echarts 图表" right="PDF 阅读器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Ueditor",
    data() {
        return {
            content: `<p><span style="font-size: 24px;"><span style="font-size: 24px;">这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是<span style="font-size: 36px;">一段测试文字这是一段测试文字这是一段测试文字这是一</span><span style="font-size: 36px;">段测试<img src="http://img.baidu.com/hi/jx2/j_0021.gif"/></span></span></span></p><p style="text-align: center;"><iframe class="ueditor_baidumap" src="/UEditor/dialogs/map/show.html#center=116.404,39.915&zoom=10&width=530&height=340&markers=116.404,39.915&markerStyles=l,A" frameborder="0" width="534" height="344"></iframe></p>`,
            code1: `
                <dd-button @click="setDisabled" style="margin-right:15px">禁用编辑器</dd-button>
                <dd-button @click="setEnabled">启用编辑器</dd-button>
                <dd-ueditor
                    ref="ueditor"
                    v-model="content"
                    :height="600"
                    style="margin-top:15px"
                ></dd-ueditor>
                <div class="content" v-html="content"></div>

                setDisabled() {
                    this.$refs.ueditor.setDisabled();
                },
                setEnabled() {
                    this.$refs.ueditor.setEnabled();
                },
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "—",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "height",
                    explain: "可编辑区高度",
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
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "富文本内容发生变化时触发",
                    backParameter: "组件绑定值",
                },
            ],
            Attributes3: [
                {
                    name: "focus",
                    explain: "获取焦点",
                    parameter: "-",
                },
                {
                    name: "blur",
                    explain: "失去焦点",
                    parameter: "-",
                },
                {
                    name: "setHide",
                    explain: "影藏编辑器",
                    parameter: "-",
                },
                {
                    name: "setShow",
                    explain: "显示编辑器",
                    parameter: "-",
                },
                {
                    name: "setDisabled",
                    explain: "使编辑器不可编辑",
                    parameter: "-",
                },
                {
                    name: "setEnabled",
                    explain: "使编辑器可编辑",
                    parameter: "-",
                },
            ],
        };
    },
    methods: {
        setDisabled() {
            this.$refs.ueditor.setDisabled();
        },
        setEnabled() {
            this.$refs.ueditor.setEnabled();
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
