<template>
    <div class="page-box">
        <h2 class="_title">Map 地图</h2>
        <p class="_descript">基于ArcGis的地图组件（https://developers.arcgis.com/javascript/latest/api-reference/）</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="map-box">
                    <dd-map
                        ref="myMap"
                        name="myMap"
                        :rings="rings"
                        @change="change"
                        @click="mapClick"
                        @mapRoller="mapRoller"
                        :zoom="15"
                        :extent="townExtent"
                        :mark="mark"
                        :markSymbol="markSymbol"
                        :pointSymbol="pointSymbol"
                        :markTopSymbol="markTopSymbol"
                        :polygonSymbol="polygonSymbol"
                        :lineSymbol="lineSymbol"
                        isShowZoom
                        sketch
                        toggle
                        search
                        isGetPoint
                    ></dd-map>
                </div>
                <dd-button style="margin-top: 15px" @click="clearClick"
                    >清空</dd-button
                >
            </template>
        </dd-block>
        <dd-block title="天地图做底图" :code="code2">
            <template #source>
                <div class="map-box">
                    <dd-map
                        ref="myMap2"
                        name="myMap2"
                        :rings="rings"
                        @change="change"
                        @click="mapClick"
                        @mapRoller="mapRoller"
                        :zoom="15"
                        :extent="townExtent"
                        :mark="mark"
                        :markSymbol="markSymbol"
                        :pointSymbol="pointSymbol"
                        :markTopSymbol="markTopSymbol"
                        :polygonSymbol="polygonSymbol"
                        :lineSymbol="lineSymbol"
                        isShowZoom
                        sketch
                        toggle
                        search
                        :basemap="true"
                    ></dd-map>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <!-- <dd-describe title="Methods" :data="Attributes2" events></dd-describe> -->
        <dd-describe title="Methods" :data="Attributes3" methods></dd-describe>
        <dd-footer left="Tinymce 富文本编辑器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "ArcGis",
    data() {
        return {
            townExtent: [
                {
                    spatialReference: { wkid: 4326 },
                    rings: [
                        [
                            [120.63586615782069, 30.7563584045408],
                            [120.63799046736054, 30.7571513059402],
                            [120.63700341444303, 30.753334255539144],
                            [120.63586615782069, 30.7563584045408],
                        ],
                    ],
                },
                {
                    spatialReference: { wkid: 4326 },
                    rings: [
                        [
                            [120.64062976103126, 30.758054836783973],
                            [120.64326905470197, 30.758976798291915],
                            [120.64333342771835, 30.75475414220381],
                            [120.64215325575175, 30.754422222521008],
                            [120.64062976103126, 30.758054836783973],
                        ],
                    ],
                },
                {
                    spatialReference: { wkid: 4326 },
                    rings: [
                        [
                            [120.639868013671, 30.7606547455786],
                            [120.643505089096, 30.7618992905615],
                            [120.644508235267, 30.7599090914725],
                            [120.643370978645, 30.7595013957022],
                            [120.640318624786, 30.7597481589316],
                            [120.639868013671, 30.7606547455786],
                        ],
                    ],
                },
                {
                    spatialReference: { wkid: 4326 },
                    rings: [
                        [
                            [120.631156, 30.762831],
                            [120.631478, 30.763476],
                            [120.636692, 30.765264],
                            [120.637529, 30.763586],
                            [120.637272, 30.761927],
                            [120.63828, 30.76154],
                            [120.638752, 30.760507],
                            [120.638259, 30.757907],
                            [120.635405, 30.757041],
                            [120.634225, 30.759548],
                            [120.633152, 30.759327],
                            [120.631156, 30.762831],
                        ],
                    ],
                },
            ],
            mark: [
                {
                    x: 120.63584470014857,
                    y: 30.7586633323699,
                    attributes: {
                        content: "A坐标",
                    },
                },
                {
                    x: 120.6376256869345,
                    y: 30.75938245855835,
                    attributes: {
                        content: "B坐标",
                    },
                },
                {
                    x: 120.63249730329782,
                    y: 30.762646117592116,
                    attributes: {
                        content: "C坐标",
                    },
                },
                {
                    x: 120.63625239591882,
                    y: 30.76209296283181,
                    attributes: {
                        content: "D坐标",
                    },
                },
            ],
            markSymbol: {
                type: "picture-marker",
                url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114525043/BlackStarLargeB.png", //点位图片
                width: "64px",
                height: "64px",
            },
            markTopSymbol: {
                type: "picture-marker",
                url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114418233/title-bg.png", //点位图片
                width: "201px",
                height: "49px",
            },
            pointSymbol: {
                type: "picture-marker",
                url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114812934/address.png", //点位图片
                width: "30px",
                height: "30px",
                yoffset: "15px",
            },
            polygonSymbol: {
                type: "picture-fill", //‘simple-fill', 'picture-fill', 'picture-marker', 'simple-line', 'simple-marker', 'text', 'label-3d', 'line-3d', 'mesh-3d', 'point-3d', 'polygon-3d', 'web-style', 'cim'
                // style: "solid", // 内部样式 //dolid、vertical、none、horizontal、forward-diagonal、diagonal-cross、cross、backward-diagonal
                // color: "blue", //内部填充颜色
                url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114525043/BlackStarLargeB.png",
                width: "24px",
                height: "24px",
                outline: {
                    width: 3, //边框线宽
                    style: "solid", //边框样式 //'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'
                    color: "skyblue", //边框颜色
                },
            },
            lineSymbol: {
                type: "simple-line", // 'simple-fill', 'picture-fill', 'picture-marker', 'simple-line', 'simple-marker', 'text', 'label-3d', 'line-3d', 'mesh-3d', 'point-3d', 'polygon-3d', 'web-style', 'cim'
                color: "red",
                width: 3,
                style: "dash", //'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'
            },
            rings: [],
            code1: `
                <div class="map-box">
                    <dd-map
                        :rings="rings"
                        @change="change"
                        @mapRoller="mapRoller"
                        :zoom="15"
                        :extent="townExtent"
                        :polygonSymbol="polygonSymbol"
                        :lineSymbol="lineSymbol"
                        isShowZoom
                        sketch
                        toggle
                        search
                    ></dd-map>
                </div>

                townExtent: [
                    {
                        spatialReference: { wkid: 4326 },
                        rings: [
                            [
                                [120.63586615782069, 30.7563584045408],
                                [120.63799046736054, 30.7571513059402],
                                [120.63700341444303, 30.753334255539144],
                                [120.63586615782069, 30.7563584045408],
                            ],
                        ],
                    },
                    {
                        spatialReference: { wkid: 4326 },
                        rings: [
                            [
                                [120.64062976103126, 30.758054836783973],
                                [120.64326905470197, 30.758976798291915],
                                [120.64333342771835, 30.75475414220381],
                                [120.64215325575175, 30.754422222521008],
                                [120.64062976103126, 30.758054836783973],
                            ],
                        ],
                    },
                    {
                        spatialReference: { wkid: 4326 },
                        rings: [
                            [
                                [120.639868013671, 30.7606547455786],
                                [120.643505089096, 30.7618992905615],
                                [120.644508235267, 30.7599090914725],
                                [120.643370978645, 30.7595013957022],
                                [120.640318624786, 30.7597481589316],
                                [120.639868013671, 30.7606547455786],
                            ],
                        ],
                    },
                    {
                        spatialReference: { wkid: 4326 },
                        rings: [
                            [
                                [120.631156, 30.762831],
                                [120.631478, 30.763476],
                                [120.636692, 30.765264],
                                [120.637529, 30.763586],
                                [120.637272, 30.761927],
                                [120.63828, 30.76154],
                                [120.638752, 30.760507],
                                [120.638259, 30.757907],
                                [120.635405, 30.757041],
                                [120.634225, 30.759548],
                                [120.633152, 30.759327],
                                [120.631156, 30.762831],
                            ],
                        ],
                    },
                ],
                polygonSymbol: {
                    type: "picture-fill", //‘simple-fill', 'picture-fill', 'picture-marker', 'simple-line', 'simple-marker', 'text', 'label-3d', 'line-3d', 'mesh-3d', 'point-3d', 'polygon-3d', 'web-style', 'cim'
                    // style: "solid", // 内部样式 //dolid、vertical、none、horizontal、forward-diagonal、diagonal-cross、cross、backward-diagonal
                    // color: "blue", //内部填充颜色
                    url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114525043/BlackStarLargeB.png",
                    width: "24px",
                    height: "24px",
                    outline: {
                        width: 3, //边框线宽
                        style: "solid", //边框样式 //'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'
                        color: "skyblue", //边框颜色
                    },
                },
                lineSymbol: {
                    type: "simple-line", // 'simple-fill', 'picture-fill', 'picture-marker', 'simple-line', 'simple-marker', 'text', 'label-3d', 'line-3d', 'mesh-3d', 'point-3d', 'polygon-3d', 'web-style', 'cim'
                    color: "red",
                    width: 3,
                    style: "dash", //'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'
                },
                rings: [],

                change(item) {
                    console.log(item);
                },
                mapRoller(item) {
                    console.log(item);
                },

                .map-box {
                    position: relative;
                    height: 600px;
                }
            `,
            code2: `
            
            `,
            Attributes: [
                {
                    parameter: "name",
                    explain: "地图名称(必须要传,且不能重复)",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
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
                    parameter: "townExtent",
                    explain: "四至范围",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "zoom",
                    explain: "焦距",
                    type: "number",
                    optional: "—",
                    default: "13",
                },
                {
                    parameter: "search",
                    explain: "搜索按钮",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "toggle",
                    explain: "底图切换",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "sketch",
                    explain: "素描工具栏",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "extent",
                    explain: "四至范围",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "polygonSymbol",
                    explain: "素描填充样式",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "lineSymbol",
                    explain: "素描边框样式",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "isGetPoint",
                    explain: "是否鼠标点击获取坐标",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "basemap",
                    explain: "使用天地图做底图",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
            ],
            Attributes3: [
                {
                    name: "change",
                    explain: "创建范围的回调",
                    parameter: "[]",
                },
                {
                    name: "mapRoller",
                    explain: "地图上滚轮滚动的回调",
                    parameter: "event",
                },
                {
                    name: "mapClick",
                    explain: "地图上点击的回调",
                    parameter: "event",
                },
            ],
        };
    },
    methods: {
        change(item) {
            console.log(item);
        },
        mapRoller(item) {
            console.log(item);
        },
        mapClick(item) {
            // console.log(item);
        },
        clearClick() {
            this.$refs.myMap.clearMap();
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
