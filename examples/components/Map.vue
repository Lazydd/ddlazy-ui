<template>
    <div class="page-box">
        <h2 class="_title">Map 地图</h2>
        <p class="_descript">基于ArcGis的地图组件</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="map-box">
                    <dd-map :zoom="15" :extent="townExtent"></dd-map>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Methods" :data="Attributes2" events></dd-describe>
        <dd-describe title="Methods" :data="Attributes3" methods></dd-describe>
        <dd-footer left="PDF 阅读器" right="Radio 单选框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "ArcGis",
    data() {
        return {
            townExtent: [],
            code1: `
                
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
.map-box {
    position: relative;
    height: 600px;
}
</style>
