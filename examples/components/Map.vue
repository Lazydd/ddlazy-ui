<template>
    <div class="page-box">
        <h2 class="_title">Map 地图</h2>
        <p class="_descript">基于ArcGis的地图组件</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                {{ rings }}
                <div class="map-box">
                    <dd-map
                        :rings="rings"
                        @change="change"
                        :zoom="15"
                        :extent="townExtent"
                    ></dd-map>
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
            rings: [],
            code1: `

            `,
            Attributes: [
                {
                    parameter: "center",
                    explain: "中心坐标",
                    type: "object",
                    optional: "—",
                    default: `{x: 120.639868013671,y: 30.7606547455786}`,
                },
                {
                    parameter: "isShowZoom",
                    explain: "是否显示放大缩小",
                    type: "boolean",
                    optional: "true/false",
                    default: "true",
                },
                {
                    parameter: "rings",
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
        change(item) {
            this.rings = item;
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
