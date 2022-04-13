<template>
    <div class="dd-map" id="maps" ref="map" :class="{ fullscreen: fullscreen }">
        <div
            class="fullscreen-btn"
            :title="fullscreen ? '退出' : '全屏'"
            @click="isfull"
        >
            <dd-icon v-if="!fullscreen" icon="icon-fullscreen" />
            <dd-icon v-if="fullscreen" icon="icon-fullscreen-exit" />
        </div>
    </div>
</template>
<script>
import { loadModules } from "esri-loader";
export default {
    name: "ddMap",
    props: {
        data: Object, // 选中的点位数据
        zoom: {
            type: Number,
            default: 13,
        },
        isShowZoom: {
            type: Boolean,
            default: false,
        },
        maxZoom: {
            type: Number,
            default: 64,
        },
        minZoom: {
            type: Number,
            default: 6,
        },
        toggle: {
            type: Boolean,
            default: false,
        },
        search: {
            type: Boolean,
            default: false,
        },
        // 网格范围数据
        extent: {
            type: Array,
            default() {
                return [];
            },
        },
        sketch: {
            type: Boolean,
            default: false,
        },
        polygonSymbol: {
            type: Object,
        },
        lineSymbol: {
            type: Object,
        },
        center: {
            type: Object,
            default() {
                return {
                    x: 120.639868013671,
                    y: 30.7606547455786,
                };
            },
        },
    },
    data() {
        return {
            fullscreen: false, // 是否全屏
            detail: [],
        };
    },
    methods: {
        createMap() {
            loadModules([
                "esri/Map",
                "esri/views/MapView",
                "esri/Graphic",
                "esri/widgets/BasemapToggle",
                "esri/widgets/BasemapGallery",
                "esri/layers/GraphicsLayer",
                "esri/widgets/Sketch",
                "esri/widgets/Sketch/SketchViewModel",
                "esri/widgets/support/SnappingControls",
                "esri/geometry/SpatialReference",
                "esri/geometry/support/webMercatorUtils",
                "esri/geometry/Point",
                "esri/tasks/GeometryService",
                "esri/widgets/Search",
            ])
                .then(
                    ([
                        Map,
                        MapView,
                        Graphic,
                        BasemapToggle,
                        BasemapGallery,
                        GraphicsLayer,
                        Sketch,
                        SketchViewModel,
                        SnappingControls,
                        SpatialReference,
                        webMercatorUtils,
                        Point,
                        GeometryService,
                        Search,
                    ]) => {
                        const graphicsLayer = new GraphicsLayer();
                        var map = new Map({
                            basemap: "streets-navigation-vector",
                            layers: [graphicsLayer],
                        });
                        var view = new MapView({
                            map: map,
                            center: [this.center.x, this.center.y],
                            container: "maps",
                            zoom: this.zoom,
                            constraints: {
                                maxZoom: this.maxZoom, //最大缩放
                                minZoom: this.minZoom, //最小缩放
                            },
                        });

                        this.view = view;
                        //线条
                        if (this.isShowZoom) {
                            view.ui.move("zoom", "bottom-left");
                        } else {
                            view.ui.remove("zoom"); //移除放大缩小
                        }
                        if (this.search) {
                            const search = new Search({
                                view: view,
                            });
                            view.ui.add(search, "top-left");
                        }

                        if (this.toggle) {
                            //多种底图
                            // const toggle = new BasemapGallery({
                            //     view: view,
                            //     // nextBasemap: "hybrid",
                            // });
                            //两个底图
                            const toggle1 = new BasemapToggle({
                                view: view,
                                nextBasemap: "hybrid",
                            });
                            // view.ui.add(toggle, "top-right");
                            view.ui.add(toggle1, "top-left");
                        }

                        //工具
                        if (this.sketch) {
                            view.when(() => {
                                let viewModel = new SketchViewModel({
                                    //https://developers.arcgis.com/javascript/latest/sample-code/sketch-viewmodel-styler/
                                    view: view,
                                    layer: graphicsLayer,
                                    polygonSymbol: this.polygonSymbol,
                                });
                                let sketch = new Sketch({
                                    layer: graphicsLayer,
                                    view: view,
                                    viewModel: viewModel,
                                    creationMode: "update",
                                });
                                view.ui.add(sketch, "top-right");
                                viewModel.on("create", (e) => {
                                    if (e.state === "complete") {
                                        const geographicGeom =
                                            webMercatorUtils.webMercatorToGeographic(
                                                e.graphic.geometry
                                            );
                                        this.detail = [
                                            ...this.detail,
                                            geographicGeom,
                                        ];
                                        this.$emit("change", this.detail);
                                    }
                                });
                                viewModel.on("update", (e) => {
                                    if (e.state === "complete") {
                                        e.graphics.map((items) => {
                                            this.detail = this.detail.map(
                                                (item) => {
                                                    if (
                                                        item.uid === items.uid
                                                    ) {
                                                        return items;
                                                    } else {
                                                        return item;
                                                    }
                                                }
                                            );
                                        });
                                        this.$emit("change", this.detail);
                                    }
                                });
                                sketch.on("delete", (e) => {
                                    e.graphics.forEach((item) => {
                                        this.detail = this.detail.filter(
                                            (items) => {
                                                return items.uid != item.uid;
                                            }
                                        );
                                        this.$emit("change", this.detail);
                                    });
                                });
                            });
                        }
                        view.on("mouse-wheel", (e) => {
                            this.$emit("mapRoller", e);
                        });
                        // 全部的鼠标事件如下：
                        const events = [
                            "pointer-enter", //鼠标进入
                            "pointer-leave", //鼠标离开
                            "pointer-move", //鼠标移动
                            "pointer-down", //鼠标点击
                            "pointer-up", //鼠标点击结束
                            "immediate-click", //直接点击
                            "click", //点击
                            "immediate-double-click", //直接双击
                            "double-click", //双击
                            "mouse-wheel", //鼠标滚轮
                            "drag", //拖
                            "hold", //持有
                            "key-down", //响应按键
                            "key-up", //提高
                            "focus", //焦点
                            "blur", //模糊
                            "resize", //调整
                        ];
                        const basemap = [
                            "dark-gray", //深灰色画布底图设计用作舒缓背景贴图，用于覆盖并将注意力集中在其他地图图层上。
                            "dark-gray-vector", //此矢量切片图层为世界提供了详细的底图，其中性背景样式具有最少的颜色，标签和特征。
                            "gray", //浅灰色画布底图设计用作中性背景地图，用于叠加和强调其他地图图层。
                            "gray-vector", //此矢量切片图层为世界提供了详细的底图，其中性背景样式具有最少的颜色，标签和特征。
                            "hybrid", //World Imagery地图是一个详细的图像地图图层和标签，旨在用作各种地图和应用程序的底图。
                            "national-geographic", //国家地理底图旨在用作信息和教育目的的一般参考地图。
                            "oceans", //海洋底图旨在被海洋地理信息系统专业人员用作底图，并作为任何对海洋数据感兴趣的人的参考地图。
                            "osm	", //OpenStreetMap是一个社区地图图层，旨在用作各种地图和应用程序的底图。
                            "satellite", //World Imagery地图是一个详细的图像地图图层，旨在用作各种地图和应用程序的底图。
                            "streets", //Streets底图为世界提供了一个多尺度的街道地图。
                            "streets-navigation-vector", //此矢量切片图层为世界提供了详细的底图，其中包含自定义导航地图样式。
                            "streets-night-vector", //此矢量切片图层为世界提供了详细的底图，其中包含自定义的“夜间”街道地图样式。
                            "streets-relief-vector", //此矢量切片图层为世界提供了详细的底图，其中包含经典的Esri街道地图样式，旨在与浮雕地图一起使用。
                            "streets-vector", //此矢量切片图层为世界提供了详细的底图，其中包含经典的Esri街道地图样式。
                            "terrain", //带标签的地形底图旨在用于叠加和强调其他专题地图图层。
                            "topo", //地形图包括边界，城市，水景，地形特征，公园，地标，交通和建筑物。
                            "topo-vector", //此矢量切片图层为世界提供了详细的底图，其中包含经典的Esri地形图样式，旨在用于浮雕地图。
                        ];
                        this.createExtent();
                    }
                )
                .catch((err) => {
                    // handle any errors
                    console.error(err);
                });
        },
        //创建范围
        createExtent() {
            loadModules([
                "esri/Map",
                "esri/views/MapView",
                "esri/Graphic",
                "esri/widgets/BasemapToggle",
                "esri/widgets/BasemapGallery",
                "esri/layers/GraphicsLayer",
                "esri/widgets/Sketch",
                "esri/widgets/Sketch/SketchViewModel",
                "esri/widgets/support/SnappingControls",
                "esri/geometry/SpatialReference",
                "esri/geometry/support/webMercatorUtils",
                "esri/geometry/Point",
                "esri/tasks/GeometryService",
                "esri/widgets/Search",
            ])
                .then(
                    ([
                        Map,
                        MapView,
                        Graphic,
                        BasemapToggle,
                        BasemapGallery,
                        GraphicsLayer,
                        Sketch,
                        SketchViewModel,
                        SnappingControls,
                        SpatialReference,
                        webMercatorUtils,
                        Point,
                        GeometryService,
                        Search,
                    ]) => {
                        //三角形
                        const polygon = {
                            type: "polygon", // autocasts as new Polygon()
                            rings: [
                                [-64.78, 32.3],
                                [-66.07, 18.45],
                                [-80.21, 25.78],
                                [-64.78, 32.3],
                            ],
                        };
                        //圆
                        const point = {
                            type: "point", // autocasts as new Point()
                            longitude: -49.97,
                            latitude: 41.73,
                        };
                        //线条样式//https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html
                        const lineSymbol = this.lineSymbol;
                        //线条样式
                        const lineSymbol2 = {
                            type: "simple-line", // autocasts as SimpleLineSymbol()
                            color: [24, 144, 255],
                            width: 3,
                            style: "dash", //https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html
                        };
                        //三角形样式
                        const fillSymbol = {
                            type: "simple-fill", // autocasts as new SimpleFillSymbol()
                            color: [227, 139, 79, 0.8],
                            outline: {
                                // autocasts as new SimpleLineSymbol()
                                color: [255, 255, 255],
                                width: 1,
                            },
                        };
                        //圆的样式
                        const markerSymbol = {
                            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                            color: [226, 119, 40],
                            outline: {
                                // autocasts as new SimpleLineSymbol()
                                color: [255, 255, 255],
                                width: 1,
                            },
                        };
                        //创建三角形范围
                        const polygonGraphic = new Graphic({
                            geometry: polygon, //坐标
                            symbol: fillSymbol, //样式
                        });
                        // 创建圆的范围
                        const pointGraphic = new Graphic({
                            geometry: point,
                            symbol: markerSymbol,
                        });
                        // Create an object for storing attributes related to the line
                        const lineAtt = {
                            Name: "Keystone Pipeline",
                            Owner: "TransCanada",
                            Length: "3,456 km",
                        };
                        let arr = [];
                        this.extent.map((item) => {
                            let detail = {
                                type: "polyline", // autocasts as new Polyline()
                                paths: item.rings,
                            };
                            const polylineGraphic = new Graphic({
                                geometry: detail,
                                symbol: lineSymbol,
                                // attributes: lineAtt,
                                // popupTemplate: {
                                //     // autocasts as new PopupTemplate()
                                //     title: "{Name}",
                                //     content: [
                                //         {
                                //             type: "fields",
                                //             fieldInfos: [
                                //                 {
                                //                     fieldName: "Name",
                                //                 },
                                //                 {
                                //                     fieldName: "Owner",
                                //                 },
                                //                 {
                                //                     fieldName: "Length",
                                //                 },
                                //             ],
                                //         },
                                //     ],
                                // },
                            });
                            arr = [...arr, polylineGraphic];
                        });
                        console.log(arr);
                        this.view.graphics.addMany([
                            polygonGraphic,
                            pointGraphic,
                            ...arr,
                        ]); //多个用addMany，一个用add
                    }
                )
                .catch((err) => {
                    // handle any errors
                    console.error(err);
                });
        },
        // // 添加定位
        // addPoint() {
        //     // this.clear();
        //     esriLoader.dojoRequire(
        //         [
        //             "esri/map",
        //             "esri/layers/ArcGISTiledMapServiceLayer",
        //             "esri/layers/GraphicsLayer",
        //             "esri/graphic",
        //             "esri/geometry/Polygon",
        //             "esri/symbols/SimpleFillSymbol",
        //             "esri/symbols/SimpleLineSymbol",
        //             "esri/Color",
        //             "esri/InfoTemplate",
        //             "esri/symbols/PictureMarkerSymbol",
        //             "esri/geometry/Point",
        //             "esri/symbols/TextSymbol",
        //             "tdtlib/geoLayer",
        //             "tdtlib/TDTYXLayer",
        //             "tdtlib/TDTLayer",
        //             "tdtlib/TDTAnnoLayer",
        //             "esri",
        //             "esri/config",
        //             "esri/geometry/Extent",
        //             "esri/layers/WMSLayer",
        //             "dojo/domReady!",
        //         ],
        //         (
        //             Map,
        //             ArcGISTiledMapServiceLayer,
        //             GraphicsLayer,
        //             Graphic,
        //             Polygon,
        //             SimpleFillSymbol,
        //             SimpleLineSymbol,
        //             Color,
        //             InfoTemplate,
        //             PictureMarkerSymbol,
        //             Point,
        //             TextSymbol,
        //             GeoLayer,
        //             TDTYXLayer,
        //             TDTLayer,
        //             TDTAnnoLayer,
        //             esri,
        //             esriConfig,
        //             Extent,
        //             WMSLayer
        //         ) => {
        //             var graphicLayer = new GraphicsLayer();
        //             var symbol = new PictureMarkerSymbol({
        //                 // url: require("@/assets/images/icon_point.png"),
        //                 width: 35,
        //                 height: 45,
        //                 yoffset: 18,
        //             });
        //             var point = new Point(this.data.x, this.data.y);
        //             var panoGraphic = new Graphic(point, symbol);
        //             graphicLayer.id = this.CONST_MARKLAYER;
        //             graphicLayer.add(panoGraphic);
        //             this.map.addLayer(graphicLayer);
        //         }
        //     );
        // },
        // // 全屏、取消全屏切换
        isfull() {
            this.fullscreen = !this.fullscreen;
            if (this.polygonCenter) {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.map.centerAt(this.polygonCenter);
                    }, 600);
                });
            }
        },
    },
    mounted() {
        this.createMap();
        // if (!esriLoader.isLoaded()) {
        //     esriLoader.bootstrap(
        //         (err) => {
        //             if (err) {
        //                 console.error(err);
        //             } else {
        //                 this.createMap();
        //             }
        //         },
        //         {
        //             url: "https://oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/zjsfgwczc/cdn/sdk/3.35/init.js",
        //             dojoConfig: {
        //                 // 想同时使用天地图的底图和标注的话，一定要配置此项
        //                 async: true,
        //                 packages: [
        //                     {
        //                         location:
        //                             "https://oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/zjsfgwczc/cdn/sdk/3.35/tdtlib",
        //                         name: "tdtlib",
        //                     },
        //                 ],
        //             },
        //         }
        //     );
        // } else {
        //     this.createMap();
        // }
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
    /deep/.esri-attribution.esri-widget {
        display: none;
    }
    .fullscreen-btn {
        width: 32px;
        height: 32px;
        position: absolute;
        bottom: 15px;
        right: 15px;
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
.fullscreen {
    position: fixed;
    z-index: 10;
}
</style>
