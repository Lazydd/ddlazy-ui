<template>
    <div class="dd-map" id="maps" ref="map" :class="{ fullscreen: fullscreen }">
        <!-- <div class="map-type" @click="changeMap"><img :src="require('@/assets/images/satellite.png')" />{{ currentMapType === 1 ? "影像图" : "电子图" }}</div>
		<div class="fullscreen-btn" :title="fullscreen ? '退出' : '全屏'" @click="toggle">
			<a-icon v-if="!fullscreen" type="arrows-alt" class="zl-icon-quanping" />
			<a-icon v-if="fullscreen" type="shrink" class="zl-icon-tuichuquanping" />
		</div> -->
    </div>
</template>
<script>
import * as esriLoader from "esri-loader";
const CONST_MAP = "MAP";
const CONST_MAPAnno = "MAPAnno";
export default {
    name: "ddMap",
    props: {
        data: Object, // 选中的点位数据
        extent: Array, // 网格范围数据
        zoom: {
            type: Number,
            default: 13,
        },
    },
    data() {
        return {
            x: 120.581807,
            y: 28.040153,
            fullscreen: false, // 是否全屏
            polygonCenter: "", // 图形的中心点
            currentMapType: 1, // 1：天地图；2：卫星图
            CONST_MARKLAYER: "MARKLAYER",
            CONST_SCOPE: "SCOPE",
        };
    },
    methods: {
        createMap() {
            esriLoader.dojoRequire(
                [
                    "esri/map",
                    "esri/layers/ArcGISTiledMapServiceLayer",
                    "esri/layers/GraphicsLayer",
                    "esri/graphic",
                    "esri/geometry/Polygon",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "esri/Color",
                    "esri/InfoTemplate",
                    "esri/symbols/PictureMarkerSymbol",
                    "esri/geometry/Point",
                    "esri/symbols/TextSymbol",
                    "tdtlib/geoLayer",
                    "tdtlib/TDTYXLayer",
                    "tdtlib/TDTLayer",
                    "tdtlib/TDTAnnoLayer",
                    "esri",
                    "esri/config",
                    "esri/geometry/Extent",
                    "esri/layers/WMSLayer",
                    "dojo/domReady!",
                ],
                (
                    Map,
                    ArcGISTiledMapServiceLayer,
                    GraphicsLayer,
                    Graphic,
                    Polygon,
                    SimpleFillSymbol,
                    SimpleLineSymbol,
                    Color,
                    InfoTemplate,
                    PictureMarkerSymbol,
                    Point,
                    TextSymbol,
                    GeoLayer,
                    TDTYXLayer,
                    TDTLayer,
                    TDTAnnoLayer,
                    esri,
                    esriConfig,
                    Extent,
                    WMSLayer
                ) => {
                    this.map = new Map(this.$refs.map, {
                        logo: false,
                        center:
                            this.data?.x && this.data?.y
                                ? [this.data.x, this.data.y]
                                : [this.x, this.y], //初始中心坐标经纬度
                        zoom: this.zoom, //地图初始缩放大小
                        sliderPosition: "bottom-left",
                        // slider: false
                    });

                    // this.map.hideZoomSlider();
                    // 定制缩放动画
                    esriConfig.defaults.map.zoomDuration = 500; // time in milliseconds; default is 500
                    esriConfig.defaults.map.zoomRate = 100; // refresh rate of zoom animation; default is 25
                    var annoLayer = new TDTAnnoLayer({ id: CONST_MAPAnno });
                    var basemap = new TDTLayer({ id: CONST_MAP });
                    this.map.addLayers([basemap, annoLayer]);
                    this.map.enableScrollWheelZoom();

                    if (this.data?.x && this.data?.y) {
                        this.addPoint();
                    }
                    // 添加小镇范围
                    if (this.extent && this.extent.length) this.createExtent();
                }
            );
        },
        // 切换地图
        changeMap() {
            var type = this.currentMapType === 1 ? 0 : 1;
            esriLoader.dojoRequire(
                [
                    "esri/map",
                    "tdtlib/TDTYXLayer",
                    "tdtlib/TDTLayer",
                    "tdtlib/TDTAnnoLayer",
                    "dojo/domReady!",
                ],
                (Map, TDTYXLayer, TDTLayer, TDTAnnoLayer) => {
                    // 清除原来的底图
                    this.map.removeLayer(this.map.getLayer(CONST_MAP));
                    if (this.map.getLayer(CONST_MAPAnno))
                        this.map.removeLayer(this.map.getLayer(CONST_MAPAnno));

                    if (type === 1) {
                        var annoLayer = new TDTAnnoLayer({ id: CONST_MAPAnno });
                        var basemap = new TDTLayer({ id: CONST_MAP });
                        this.map.addLayers([basemap, annoLayer]);
                        this.currentMapType = 1;
                    } else if (type === 0) {
                        var yx = new TDTYXLayer({ id: CONST_MAP });
                        this.map.addLayer(yx, 0);
                        this.currentMapType = 0;
                    }
                }
            );
        },
        // 创建小镇范围
        createExtent() {
            // this.clear();

            esriLoader.dojoRequire(
                [
                    "esri/layers/GraphicsLayer",
                    "esri/graphic",
                    "esri/geometry/Polygon",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "esri/Color",
                    "esri/InfoTemplate",
                    "esri/symbols/PictureMarkerSymbol",
                    "esri/geometry/Point",
                    "esri/symbols/TextSymbol",
                    "tdtlib/geoLayer",
                    "tdtlib/TDTYXLayer",
                    "tdtlib/TDTLayer",
                    "esri",
                    "esri/config",
                    "dojo/domReady!",
                ],
                (
                    GraphicsLayer,
                    Graphic,
                    Polygon,
                    SimpleFillSymbol,
                    SimpleLineSymbol,
                    Color,
                    InfoTemplate,
                    PictureMarkerSymbol,
                    Point,
                    TextSymbol,
                    GeoLayer,
                    TDTYXLayer,
                    TDTLayer,
                    esri,
                    esriConfig
                ) => {
                    var graphicLayer = new GraphicsLayer();
                    this.extent.map((i) => {
                        if (i) {
                            var polygon = new Polygon({
                                rings: i || [],
                                spatialReference: {
                                    wkid: 4326,
                                },
                            });

                            var tmpSymbol = new SimpleFillSymbol(
                                SimpleFillSymbol.STYLE_SOLID,
                                new SimpleLineSymbol(
                                    SimpleLineSymbol.STYLE_DASH,
                                    new Color([24, 144, 255]),
                                    3
                                ),
                                new Color([0, 110, 255, 0.34])
                            );
                            var graphic = new Graphic(polygon, tmpSymbol);
                            graphicLayer.add(graphic);
                            graphicLayer.id = this.CONST_SCOPE;

                            this.polygonCenter = polygon
                                .getExtent()
                                .getCenter();
                            this.map.centerAt(this.polygonCenter);
                        }
                    });
                    this.map.addLayer(graphicLayer, 0);
                }
            );
        },
        // 添加定位
        addPoint() {
            // this.clear();
            esriLoader.dojoRequire(
                [
                    "esri/map",
                    "esri/layers/ArcGISTiledMapServiceLayer",
                    "esri/layers/GraphicsLayer",
                    "esri/graphic",
                    "esri/geometry/Polygon",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "esri/Color",
                    "esri/InfoTemplate",
                    "esri/symbols/PictureMarkerSymbol",
                    "esri/geometry/Point",
                    "esri/symbols/TextSymbol",
                    "tdtlib/geoLayer",
                    "tdtlib/TDTYXLayer",
                    "tdtlib/TDTLayer",
                    "tdtlib/TDTAnnoLayer",
                    "esri",
                    "esri/config",
                    "esri/geometry/Extent",
                    "esri/layers/WMSLayer",
                    "dojo/domReady!",
                ],
                (
                    Map,
                    ArcGISTiledMapServiceLayer,
                    GraphicsLayer,
                    Graphic,
                    Polygon,
                    SimpleFillSymbol,
                    SimpleLineSymbol,
                    Color,
                    InfoTemplate,
                    PictureMarkerSymbol,
                    Point,
                    TextSymbol,
                    GeoLayer,
                    TDTYXLayer,
                    TDTLayer,
                    TDTAnnoLayer,
                    esri,
                    esriConfig,
                    Extent,
                    WMSLayer
                ) => {
                    var graphicLayer = new GraphicsLayer();
                    var symbol = new PictureMarkerSymbol({
                        // url: require("@/assets/images/icon_point.png"),
                        width: 35,
                        height: 45,
                        yoffset: 18,
                    });
                    var point = new Point(this.data.x, this.data.y);
                    var panoGraphic = new Graphic(point, symbol);
                    graphicLayer.id = this.CONST_MARKLAYER;
                    graphicLayer.add(panoGraphic);
                    this.map.addLayer(graphicLayer);
                }
            );
        },
        // 全屏、取消全屏切换
        toggle() {
            this.fullscreen = !this.fullscreen;
            if (this.polygonCenter) {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.map.centerAt(this.polygonCenter);
                    }, 600);
                });
            }
        },
        clear() {
            // 清除图层
            if (this.map) {
                let markLayer = this.map.getLayer(this.CONST_MARKLAYER);
                let scopeLayer = this.map.getLayer(this.CONST_SCOPE);

                if (markLayer) this.map.removeLayer(markLayer);
                if (scopeLayer) this.map.removeLayer(scopeLayer);
            }
        },
    },
    mounted() {
        if (!esriLoader.isLoaded()) {
            esriLoader.bootstrap(
                (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        this.createMap();
                    }
                },
                {
                    url: "https://oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/zjsfgwczc/cdn/sdk/3.35/init.js",
                    dojoConfig: {
                        // 想同时使用天地图的底图和标注的话，一定要配置此项
                        async: true,
                        packages: [
                            {
                                location:
                                    "https://oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/zjsfgwczc/cdn/sdk/3.35/tdtlib",
                                name: "tdtlib",
                            },
                        ],
                    },
                }
            );
        } else {
            this.createMap();
        }
    },
    watch: {
        data(value) {
            if (this.map) {
                this.map.centerAt([value.x, value.y]);
                this.addPoint();
            }
        },
        extent() {
            this.$nextTick(() => {
                this.createExtent();
            });
        },
    },
};
</script>
<style scoped lang="less">
.dd-map {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .fullscreen {
        position: fixed;
        z-index: 10;
    }
    .fullscreen-btn {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 24px;
        right: 20px;
        z-index: 100;
        cursor: pointer;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.45);
    }
    .map-type {
        height: 32px;
        position: absolute;
        background: #ffffff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.45);
        border-radius: 4px;
        top: 24px;
        left: 20px;
        z-index: 100;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }
    }
}
</style>
