<template>
    <div
        class="dd-map"
        :id="name"
        :ref="name"
        :class="{ fullscreen: fullscreen }"
    >
        <div
            class="map-type"
            @click="changeMap"
            v-if="toggle && basemap"
        >
            <img
                src="https://cdn.ddlazy.cn/fastboot/2022/08/31/114712633/portrait.png"
            />
            {{ currentMapType === 1 ? "影像图" : "矢量图" }}
        </div>
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
        name: {
            type: String,
        },
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
        basemap: {
            typpe: Boolean,
            default: false,
        },
        isGetPoint: {
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
        mark: {
            type: Array,
            default() {
                return [];
            },
        },
        markSymbol: {
            type: Object,
        },
        pointSymbol: {
            type: Object,
        },
        markTopSymbol: {
            type: Object,
        },
        sketch: {
            type: Boolean,
            default: false,
        },
        polygonSymbol: {
            type: Object,
            default() {
                return {
                    type: "picture-marker",
                    url: "https://cdn.ddlazy.cn/fastboot/2022/08/31/114812934/address.png", //点位图片
                    width: "30px",
                    height: "30px",
                    yoffset: "15px",
                };
            },
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
            currentMapType: 1, // 0：矢量图；1：影像图
            detail: [],
            view: null,
            map: null,
            graphicsLayer: null, //素描工具涂图层
            pointLayer: null, //鼠标点击后的显示图层
            markLayer: null, //点位图层
            markTopLayer: null, //点位头上的图层
            extentLayer: null, //范围图层
            veccLayer: null, //底图图层
            veccNameLayer: null, //范注记图层
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
                "esri/symbols/PictureMarkerSymbol",
                "esri/layers/FeatureLayer",
                "esri/layers/GeoJSONLayer",
                "esri/layers/WebTileLayer",
                "esri/layers/support/TileInfo",
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
                        PictureMarkerSymbol,
                        FeatureLayer,
                        GeoJSONLayer,
                        WebTileLayer,
                        TileInfo,
                    ]) => {
                        let map = new Map({
                            basemap: this.basemap
                                ? ""
                                : "streets-navigation-vector", //streets-navigation-vector
                            // layers: [graphicsLayer, pointLayer],
                        });
                        if (this.basemap) {
                            //矢量图
                            const veccLayer = new WebTileLayer({
                                urlTemplate:
                                    "https://t.tianditu.gov.cn/vec_c/wmts",
                                subDomains: [
                                    "t0",
                                    "t1",
                                    "t2",
                                    "t3",
                                    "t4",
                                    "t5",
                                    "t6",
                                    "t7",
                                ],
                                spatialReference: {
                                    wkid: 4326,
                                },
                                tileInfo: new TileInfo({
                                    dpi: 90.71428571427429,
                                    size: 256,
                                    origin: {
                                        x: -180,
                                        y: 90,
                                    },
                                    spatialReference: {
                                        wkid: 4326,
                                    },
                                    lods: [
                                        {
                                            level: 2,
                                            levelValue: 2,
                                            resolution: 0.3515625,
                                            scale: 147748796.52937502,
                                        },
                                        {
                                            level: 3,
                                            levelValue: 3,
                                            resolution: 0.17578125,
                                            scale: 73874398.264687508,
                                        },
                                        {
                                            level: 4,
                                            levelValue: 4,
                                            resolution: 0.087890625,
                                            scale: 36937199.132343754,
                                        },
                                        {
                                            level: 5,
                                            levelValue: 5,
                                            resolution: 0.0439453125,
                                            scale: 18468599.566171877,
                                        },
                                        {
                                            level: 6,
                                            levelValue: 6,
                                            resolution: 0.02197265625,
                                            scale: 9234299.7830859385,
                                        },
                                        {
                                            level: 7,
                                            levelValue: 7,
                                            resolution: 0.010986328125,
                                            scale: 4617149.8915429693,
                                        },
                                        {
                                            level: 8,
                                            levelValue: 8,
                                            resolution: 0.0054931640625,
                                            scale: 2308574.9457714846,
                                        },
                                        {
                                            level: 9,
                                            levelValue: 9,
                                            resolution: 0.00274658203125,
                                            scale: 1154287.4728857423,
                                        },
                                        {
                                            level: 10,
                                            levelValue: 10,
                                            resolution: 0.001373291015625,
                                            scale: 577143.73644287116,
                                        },
                                        {
                                            level: 11,
                                            levelValue: 11,
                                            resolution: 0.0006866455078125,
                                            scale: 288571.86822143558,
                                        },
                                        {
                                            level: 12,
                                            levelValue: 12,
                                            resolution: 0.00034332275390625,
                                            scale: 144285.93411071779,
                                        },
                                        {
                                            level: 13,
                                            levelValue: 13,
                                            resolution: 0.000171661376953125,
                                            scale: 72142.967055358895,
                                        },
                                        {
                                            level: 14,
                                            levelValue: 14,
                                            resolution: 8.58306884765625e-5,
                                            scale: 36071.483527679447,
                                        },
                                        {
                                            level: 15,
                                            levelValue: 15,
                                            resolution: 4.291534423828125e-5,
                                            scale: 18035.741763839724,
                                        },
                                        {
                                            level: 16,
                                            levelValue: 16,
                                            resolution: 2.1457672119140625e-5,
                                            scale: 9017.8708819198619,
                                        },
                                        {
                                            level: 17,
                                            levelValue: 17,
                                            resolution: 1.0728836059570313e-5,
                                            scale: 4508.9354409599309,
                                        },
                                        {
                                            level: 18,
                                            levelValue: 18,
                                            resolution: 5.3644180297851563e-6,
                                            scale: 2254.4677204799655,
                                        },
                                        {
                                            level: 19,
                                            levelValue: 19,
                                            resolution: 2.68220901489257815e-6,
                                            scale: 1127.23386023998275,
                                        },
                                        {
                                            level: 20,
                                            levelValue: 2,
                                            resolution: 1.341104507446289075e-6,
                                            scale: 563.616930119991375,
                                        },
                                    ],
                                }),
                                getTileUrl: function (level, row, col) {
                                    return (
                                        "http://t" +
                                        (col % 8) +
                                        ".tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=" +
                                        level +
                                        "&TILEROW=" +
                                        row +
                                        "&TILECOL=" +
                                        col +
                                        "&FORMAT=tiles&tk=9edb9d19b65e3a7b049eaecac8e6d306"
                                        //dc8791201a2e51605c716b49eaad86a3
                                    );
                                },
                            });
                            //注记图
                            const veccNameLayer = new WebTileLayer({
                                urlTemplate:
                                    "https://t.tianditu.gov.cn/cva_c/wmts",
                                subDomains: [
                                    "t0",
                                    "t1",
                                    "t2",
                                    "t3",
                                    "t4",
                                    "t5",
                                    "t6",
                                    "t7",
                                ],
                                spatialReference: {
                                    wkid: 4326,
                                },
                                tileInfo: new TileInfo({
                                    dpi: 90.71428571427429,
                                    size: 256,
                                    origin: {
                                        x: -180,
                                        y: 90,
                                    },
                                    spatialReference: {
                                        wkid: 4326,
                                    },
                                    lods: [
                                        {
                                            level: 2,
                                            levelValue: 2,
                                            resolution: 0.3515625,
                                            scale: 147748796.52937502,
                                        },
                                        {
                                            level: 3,
                                            levelValue: 3,
                                            resolution: 0.17578125,
                                            scale: 73874398.264687508,
                                        },
                                        {
                                            level: 4,
                                            levelValue: 4,
                                            resolution: 0.087890625,
                                            scale: 36937199.132343754,
                                        },
                                        {
                                            level: 5,
                                            levelValue: 5,
                                            resolution: 0.0439453125,
                                            scale: 18468599.566171877,
                                        },
                                        {
                                            level: 6,
                                            levelValue: 6,
                                            resolution: 0.02197265625,
                                            scale: 9234299.7830859385,
                                        },
                                        {
                                            level: 7,
                                            levelValue: 7,
                                            resolution: 0.010986328125,
                                            scale: 4617149.8915429693,
                                        },
                                        {
                                            level: 8,
                                            levelValue: 8,
                                            resolution: 0.0054931640625,
                                            scale: 2308574.9457714846,
                                        },
                                        {
                                            level: 9,
                                            levelValue: 9,
                                            resolution: 0.00274658203125,
                                            scale: 1154287.4728857423,
                                        },
                                        {
                                            level: 10,
                                            levelValue: 10,
                                            resolution: 0.001373291015625,
                                            scale: 577143.73644287116,
                                        },
                                        {
                                            level: 11,
                                            levelValue: 11,
                                            resolution: 0.0006866455078125,
                                            scale: 288571.86822143558,
                                        },
                                        {
                                            level: 12,
                                            levelValue: 12,
                                            resolution: 0.00034332275390625,
                                            scale: 144285.93411071779,
                                        },
                                        {
                                            level: 13,
                                            levelValue: 13,
                                            resolution: 0.000171661376953125,
                                            scale: 72142.967055358895,
                                        },
                                        {
                                            level: 14,
                                            levelValue: 14,
                                            resolution: 8.58306884765625e-5,
                                            scale: 36071.483527679447,
                                        },
                                        {
                                            level: 15,
                                            levelValue: 15,
                                            resolution: 4.291534423828125e-5,
                                            scale: 18035.741763839724,
                                        },
                                        {
                                            level: 16,
                                            levelValue: 16,
                                            resolution: 2.1457672119140625e-5,
                                            scale: 9017.8708819198619,
                                        },
                                        {
                                            level: 17,
                                            levelValue: 17,
                                            resolution: 1.0728836059570313e-5,
                                            scale: 4508.9354409599309,
                                        },
                                        {
                                            level: 18,
                                            levelValue: 18,
                                            resolution: 5.3644180297851563e-6,
                                            scale: 2254.4677204799655,
                                        },
                                        {
                                            level: 19,
                                            levelValue: 19,
                                            resolution: 2.68220901489257815e-6,
                                            scale: 1127.23386023998275,
                                        },
                                        {
                                            level: 20,
                                            levelValue: 2,
                                            resolution: 1.341104507446289075e-6,
                                            scale: 563.616930119991375,
                                        },
                                    ],
                                }),
                                getTileUrl: function (level, row, col) {
                                    return (
                                        "http://t0.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=" +
                                        level +
                                        "&TILEROW=" +
                                        row +
                                        "&TILECOL=" +
                                        col +
                                        "&FORMAT=tiles&tk=9edb9d19b65e3a7b049eaecac8e6d306"
                                        //dc8791201a2e51605c716b49eaad86a3
                                    );
                                },
                            });
                            this.veccLayer = veccLayer;
                            map.addMany([veccLayer, veccNameLayer]);
                        }

                        let view = new MapView({
                            map: map,
                            center: [this.center.x, this.center.y],
                            container: this.name,
                            zoom: this.zoom,
                            constraints: {
                                // maxZoom: this.maxZoom, //最大缩放
                                // minZoom: this.minZoom, //最小缩放
                            },
                        });
                        this.map = map;
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

                        if (this.toggle && !this.basemap) {
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
                            const graphicsLayer = new GraphicsLayer();
                            this.graphicsLayer = graphicsLayer;
                            this.view.when(() => {
                                let viewModel = new SketchViewModel({
                                    //https://developers.arcgis.com/javascript/latest/sample-code/sketch-viewmodel-styler/
                                    view: this.view,
                                    layer: graphicsLayer,
                                    polygonSymbol: this.polygonSymbol,
                                });
                                let sketch = new Sketch({
                                    layer: graphicsLayer,
                                    view: this.view,
                                    viewModel: viewModel,
                                    creationMode: "update",
                                });
                                this.view.ui.add(sketch, "top-right");
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
                                this.map.layers.add(this.graphicsLayer);
                            });
                        }
                        view.on("mouse-wheel", (e) => {
                            this.$emit("mapRoller", e);
                        });
                        const pointLayer = new GraphicsLayer();
                        this.pointLayer = pointLayer;
                        if (this.isGetPoint) {
                            view.on("click", (e) => {
                                let { latitude, longitude } = e.mapPoint;
                                let point = {
                                    type: "point",
                                    longitude,
                                    latitude,
                                };
                                let pointGraphic = new Graphic({
                                    geometry: point,
                                    symbol: this.pointSymbol,
                                });
                                pointLayer.removeAll();
                                pointLayer.add(pointGraphic);
                                view.center = [longitude, latitude];
                                // map.centerAt([e.mapPoint]);
                                this.map.layers.add(this.pointLayer);
                                this.$emit("click", e);
                            });
                        }

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
                        //自带的地图，部分可能会跨域
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
                        this.clustering();
                        this.createExtent();
                        this.addPoint();
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
                "esri/symbols/PictureMarkerSymbol",
                "esri/layers/FeatureLayer",
                "esri/layers/GeoJSONLayer",
                "esri/layers/WebTileLayer",
                "esri/layers/support/TileInfo",
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
                        PictureMarkerSymbol,
                        FeatureLayer,
                        GeoJSONLayer,
                        WebTileLayer,
                        TileInfo,
                    ]) => {
                        //三角形
                        const extentLayer = new GraphicsLayer();
                        this.extentLayer = extentLayer;
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
                        extentLayer.addMany([
                            polygonGraphic,
                            pointGraphic,
                            ...arr,
                        ]);
                        this.map.layers.add(extentLayer);
                        // 下面是另一种添加，并且已经添加的不会不会呗被清除
                        // this.view.graphics.addMany([
                        //     polygonGraphic,
                        //     pointGraphic,
                        //     ...arr,
                        // ]); //多个用addMany，一个用add
                    }
                )
                .catch((err) => {
                    // handle any errors
                    console.error(err);
                });
        },
        // // 添加定位
        addPoint() {
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
                "esri/symbols/PictureMarkerSymbol",
                "esri/layers/FeatureLayer",
                "esri/layers/GeoJSONLayer",
                "esri/layers/WebTileLayer",
                "esri/layers/support/TileInfo",
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
                        PictureMarkerSymbol,
                        FeatureLayer,
                        GeoJSONLayer,
                        WebTileLayer,
                        TileInfo,
                    ]) => {
                        const markLayer = new GraphicsLayer();
                        const markTopLayer = new GraphicsLayer();
                        this.markLayer = markLayer;
                        this.markTopLayer = markTopLayer;
                        let symbol = this.markSymbol;
                        let markTopSymbol = this.markTopSymbol;

                        this.mark.map((item) => {
                            let polygon = {
                                type: "point",
                                longitude: item.x,
                                latitude: item.y,
                            };
                            const pointGraphic = new Graphic({
                                geometry: polygon,
                                symbol,
                                attributes: item.attributes,
                            });
                            const pointGraphicTop = new Graphic({
                                geometry: polygon,
                                symbol,
                                attributes: item.attributes,
                            });
                            this.markLayer.add(pointGraphic);
                        });
                        this.map.layers.add(this.markLayer);
                        this.view.when(() => {
                            this.view.on("click", (e) => {
                                this.view.hitTest(e).then((res) => {
                                    if (res.results.length) {
                                        console.log(
                                            res.results[0]?.graphic?.attributes
                                        );
                                    }
                                });
                            });
                        });
                    }
                )
                .catch((err) => {
                    // handle any errors
                    console.error(err);
                });
        },
        //聚合
        clustering() {
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
                "esri/symbols/PictureMarkerSymbol",
                "esri/layers/FeatureLayer",
                "esri/layers/GeoJSONLayer",
                "esri/layers/WebTileLayer",
                "esri/layers/support/TileInfo",
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
                        PictureMarkerSymbol,
                        FeatureLayer,
                        GeoJSONLayer,
                        WebTileLayer,
                        TileInfo,
                    ]) => {
                        const clusterConfig = {
                            type: "cluster",
                            clusterRadius: "100px",
                            clusterMinSize: "24px",
                            clusterMaxSize: "60px",
                            labelingInfo: [
                                {
                                    deconflictionStrategy: "none",
                                    labelExpressionInfo: {
                                        expression:
                                            "Text($feature.cluster_count, '#,###')", //显示内容
                                    },
                                    symbol: {
                                        type: "text",
                                        color: "#004a5d", //字体颜色
                                        font: {
                                            weight: "bold",
                                            family: "Noto Sans",
                                            size: "12px",
                                        },
                                    },
                                    labelPlacement: "center-center",
                                },
                            ],
                        };
                        const layer = new GeoJSONLayer({
                            title: "Earthquakes from the last month",
                            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
                            copyright: "USGS Earthquakes",
                            featureReduction: clusterConfig,
                            renderer: {
                                type: "simple",
                                field: "mag",
                                symbol: {
                                    type: "simple-marker",
                                    size: 4,
                                    color: "red", //背景样式
                                },
                            },
                        });
                        this.map.layers.add(layer);
                    }
                )
                .catch((err) => {
                    // handle any errors
                    console.error(err);
                });
        },
        clearMap() {
            this.markLayer.removeAll();
            this.graphicsLayer.removeAll();
            this.pointLayer.removeAll();
            this.extentLayer.removeAll();
            this.markTopLayer.removeAll();
        },
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
        //切换底图
        _changeMap(base1, note1, base2, note2) {
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
                "esri/symbols/PictureMarkerSymbol",
                "esri/layers/FeatureLayer",
                "esri/layers/GeoJSONLayer",
                "esri/layers/WebTileLayer",
                "esri/layers/support/TileInfo",
            ]).then(
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
                    PictureMarkerSymbol,
                    FeatureLayer,
                    GeoJSONLayer,
                    WebTileLayer,
                    TileInfo,
                ]) => {
                    if (this.veccLayer) this.veccLayer.destroy();
                    if (this.veccNameLayer) this.veccNameLayer.destroy();
                    //矢量图
                    const veccLayer = new WebTileLayer({
                        urlTemplate: `https://t.tianditu.gov.cn/${base1}/wmts`,
                        subDomains: [
                            "t0",
                            "t1",
                            "t2",
                            "t3",
                            "t4",
                            "t5",
                            "t6",
                            "t7",
                        ],
                        spatialReference: {
                            wkid: 4326,
                        },
                        tileInfo: new TileInfo({
                            dpi: 90.71428571427429,
                            size: 256,
                            origin: {
                                x: -180,
                                y: 90,
                            },
                            spatialReference: {
                                wkid: 4326,
                            },
                            lods: [
                                {
                                    level: 2,
                                    levelValue: 2,
                                    resolution: 0.3515625,
                                    scale: 147748796.52937502,
                                },
                                {
                                    level: 3,
                                    levelValue: 3,
                                    resolution: 0.17578125,
                                    scale: 73874398.264687508,
                                },
                                {
                                    level: 4,
                                    levelValue: 4,
                                    resolution: 0.087890625,
                                    scale: 36937199.132343754,
                                },
                                {
                                    level: 5,
                                    levelValue: 5,
                                    resolution: 0.0439453125,
                                    scale: 18468599.566171877,
                                },
                                {
                                    level: 6,
                                    levelValue: 6,
                                    resolution: 0.02197265625,
                                    scale: 9234299.7830859385,
                                },
                                {
                                    level: 7,
                                    levelValue: 7,
                                    resolution: 0.010986328125,
                                    scale: 4617149.8915429693,
                                },
                                {
                                    level: 8,
                                    levelValue: 8,
                                    resolution: 0.0054931640625,
                                    scale: 2308574.9457714846,
                                },
                                {
                                    level: 9,
                                    levelValue: 9,
                                    resolution: 0.00274658203125,
                                    scale: 1154287.4728857423,
                                },
                                {
                                    level: 10,
                                    levelValue: 10,
                                    resolution: 0.001373291015625,
                                    scale: 577143.73644287116,
                                },
                                {
                                    level: 11,
                                    levelValue: 11,
                                    resolution: 0.0006866455078125,
                                    scale: 288571.86822143558,
                                },
                                {
                                    level: 12,
                                    levelValue: 12,
                                    resolution: 0.00034332275390625,
                                    scale: 144285.93411071779,
                                },
                                {
                                    level: 13,
                                    levelValue: 13,
                                    resolution: 0.000171661376953125,
                                    scale: 72142.967055358895,
                                },
                                {
                                    level: 14,
                                    levelValue: 14,
                                    resolution: 8.58306884765625e-5,
                                    scale: 36071.483527679447,
                                },
                                {
                                    level: 15,
                                    levelValue: 15,
                                    resolution: 4.291534423828125e-5,
                                    scale: 18035.741763839724,
                                },
                                {
                                    level: 16,
                                    levelValue: 16,
                                    resolution: 2.1457672119140625e-5,
                                    scale: 9017.8708819198619,
                                },
                                {
                                    level: 17,
                                    levelValue: 17,
                                    resolution: 1.0728836059570313e-5,
                                    scale: 4508.9354409599309,
                                },
                                {
                                    level: 18,
                                    levelValue: 18,
                                    resolution: 5.3644180297851563e-6,
                                    scale: 2254.4677204799655,
                                },
                                {
                                    level: 19,
                                    levelValue: 19,
                                    resolution: 2.68220901489257815e-6,
                                    scale: 1127.23386023998275,
                                },
                                {
                                    level: 20,
                                    levelValue: 2,
                                    resolution: 1.341104507446289075e-6,
                                    scale: 563.616930119991375,
                                },
                            ],
                        }),
                        getTileUrl: (level, row, col) => {
                            return (
                                "http://t" +
                                (col % 8) +
                                ".tianditu.gov.cn/" +
                                base1 +
                                "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" +
                                note1 +
                                "&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=" +
                                level +
                                "&TILEROW=" +
                                row +
                                "&TILECOL=" +
                                col +
                                "&FORMAT=tiles&tk=9edb9d19b65e3a7b049eaecac8e6d306"
                                //dc8791201a2e51605c716b49eaad86a3
                            );
                        },
                    });
                    //注记图
                    const veccNameLayer = new WebTileLayer({
                        urlTemplate: `https://t.tianditu.gov.cn/${base2}/wmts`,
                        subDomains: [
                            "t0",
                            "t1",
                            "t2",
                            "t3",
                            "t4",
                            "t5",
                            "t6",
                            "t7",
                        ],
                        spatialReference: {
                            wkid: 4326,
                        },
                        tileInfo: new TileInfo({
                            dpi: 90.71428571427429,
                            size: 256,
                            origin: {
                                x: -180,
                                y: 90,
                            },
                            spatialReference: {
                                wkid: 4326,
                            },
                            lods: [
                                {
                                    level: 2,
                                    levelValue: 2,
                                    resolution: 0.3515625,
                                    scale: 147748796.52937502,
                                },
                                {
                                    level: 3,
                                    levelValue: 3,
                                    resolution: 0.17578125,
                                    scale: 73874398.264687508,
                                },
                                {
                                    level: 4,
                                    levelValue: 4,
                                    resolution: 0.087890625,
                                    scale: 36937199.132343754,
                                },
                                {
                                    level: 5,
                                    levelValue: 5,
                                    resolution: 0.0439453125,
                                    scale: 18468599.566171877,
                                },
                                {
                                    level: 6,
                                    levelValue: 6,
                                    resolution: 0.02197265625,
                                    scale: 9234299.7830859385,
                                },
                                {
                                    level: 7,
                                    levelValue: 7,
                                    resolution: 0.010986328125,
                                    scale: 4617149.8915429693,
                                },
                                {
                                    level: 8,
                                    levelValue: 8,
                                    resolution: 0.0054931640625,
                                    scale: 2308574.9457714846,
                                },
                                {
                                    level: 9,
                                    levelValue: 9,
                                    resolution: 0.00274658203125,
                                    scale: 1154287.4728857423,
                                },
                                {
                                    level: 10,
                                    levelValue: 10,
                                    resolution: 0.001373291015625,
                                    scale: 577143.73644287116,
                                },
                                {
                                    level: 11,
                                    levelValue: 11,
                                    resolution: 0.0006866455078125,
                                    scale: 288571.86822143558,
                                },
                                {
                                    level: 12,
                                    levelValue: 12,
                                    resolution: 0.00034332275390625,
                                    scale: 144285.93411071779,
                                },
                                {
                                    level: 13,
                                    levelValue: 13,
                                    resolution: 0.000171661376953125,
                                    scale: 72142.967055358895,
                                },
                                {
                                    level: 14,
                                    levelValue: 14,
                                    resolution: 8.58306884765625e-5,
                                    scale: 36071.483527679447,
                                },
                                {
                                    level: 15,
                                    levelValue: 15,
                                    resolution: 4.291534423828125e-5,
                                    scale: 18035.741763839724,
                                },
                                {
                                    level: 16,
                                    levelValue: 16,
                                    resolution: 2.1457672119140625e-5,
                                    scale: 9017.8708819198619,
                                },
                                {
                                    level: 17,
                                    levelValue: 17,
                                    resolution: 1.0728836059570313e-5,
                                    scale: 4508.9354409599309,
                                },
                                {
                                    level: 18,
                                    levelValue: 18,
                                    resolution: 5.3644180297851563e-6,
                                    scale: 2254.4677204799655,
                                },
                                {
                                    level: 19,
                                    levelValue: 19,
                                    resolution: 2.68220901489257815e-6,
                                    scale: 1127.23386023998275,
                                },
                                {
                                    level: 20,
                                    levelValue: 2,
                                    resolution: 1.341104507446289075e-6,
                                    scale: 563.616930119991375,
                                },
                            ],
                        }),
                        getTileUrl: function (level, row, col) {
                            return (
                                "http://t0.tianditu.gov.cn/" +
                                base2 +
                                "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" +
                                note2 +
                                "&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=" +
                                level +
                                "&TILEROW=" +
                                row +
                                "&TILECOL=" +
                                col +
                                "&FORMAT=tiles&tk=9edb9d19b65e3a7b049eaecac8e6d306"
                                //dc8791201a2e51605c716b49eaad86a3
                            );
                        },
                    });
                    this.veccLayer = veccLayer;
                    this.veccNameLayer = veccNameLayer;
                    this.map.layers.addMany([
                        veccLayer,
                        veccNameLayer,
                        this.graphicsLayer,
                        this.pointLayer,
                    ]);
                }
            );
        },
        changeMap() {
            this.currentMapType = this.currentMapType === 1 ? 2 : 1;
            // this.map.destroy();
            // this.clearMap();
            if (this.currentMapType === 2) {
                this._changeMap("img_c", "img", "cia_c", "cia");
            } else if (this.currentMapType === 1) {
                this._changeMap("vec_c", "vec", "cva_c", "cva");
            }
            this.createExtent();
            this.addPoint();
            this.clustering();
        },
    },
    mounted() {
        this.createMap();
    },
    beforeDestroy() {
        if (this.map) {
            this.clearMap();
            this.map.destroy();
        }
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
    :deep(.esri-attribution.esri-widget) {
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
        top: 60px;
        left: 15px;
        user-select: none;
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
