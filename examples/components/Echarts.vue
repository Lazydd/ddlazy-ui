<template>
    <div class="page-box">
        <h2 class="_title">Echarts 图表</h2>
        <p class="_descript">数据可视化</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="echart">
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option2"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option3"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option4"
                    ></dd-echarts>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer
            left="VirtualizedList 虚拟滚动列表"
            right="Ueditor 富文本编辑器"
        ></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Echarts",
    data() {
        return {
            option: {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(180, 180, 180, 0.2)",
                        },
                    },
                ],
            },
            option2: {
                title: {
                    text: "Stacked Line",
                },
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    data: [
                        "Email",
                        "Union Ads",
                        "Video Ads",
                        "Direct",
                        "Search Engine",
                    ],
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                    },
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        name: "Email",
                        type: "line",
                        stack: "Total",
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: "Union Ads",
                        type: "line",
                        stack: "Total",
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: "Video Ads",
                        type: "line",
                        stack: "Total",
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: "Direct",
                        type: "line",
                        stack: "Total",
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: "Search Engine",
                        type: "line",
                        stack: "Total",
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            },
            option3: {
                title: {
                    text: "Referer of a Website",
                    subtext: "Fake Data",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1048, name: "Search Engine" },
                            { value: 735, name: "Direct" },
                            { value: 580, name: "Email" },
                            { value: 484, name: "Union Ads" },
                            { value: 300, name: "Video Ads" },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            },
            option4: {
                title: {
                    text: "Proportion of Browsers",
                    subtext: "Fake Data",
                    top: 10,
                    left: 10,
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    type: "scroll",
                    bottom: 10,
                    data: (function () {
                        var list = [];
                        for (var i = 1; i <= 28; i++) {
                            list.push(i + 2000 + "");
                        }
                        return list;
                    })(),
                },
                visualMap: {
                    top: "middle",
                    right: 10,
                    color: ["red", "yellow"],
                    calculable: true,
                },
                radar: {
                    indicator: [
                        { text: "IE8-", max: 400 },
                        { text: "IE9+", max: 400 },
                        { text: "Safari", max: 400 },
                        { text: "Firefox", max: 400 },
                        { text: "Chrome", max: 400 },
                    ],
                },
                series: (function () {
                    var series = [];
                    for (var i = 1; i <= 28; i++) {
                        series.push({
                            type: "radar",
                            symbol: "none",
                            lineStyle: {
                                width: 1,
                            },
                            emphasis: {
                                areaStyle: {
                                    color: "rgba(0,250,0,0.3)",
                                },
                            },
                            data: [
                                {
                                    value: [
                                        (40 - i) * 10,
                                        (38 - i) * 4 + 60,
                                        i * 5 + 10,
                                        i * 9,
                                        (i * i) / 2,
                                    ],
                                    name: i + 2000 + "",
                                },
                            ],
                        });
                    }
                    return series;
                })(),
            },
            code1: `
                <div class="echart">
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option2"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option3"
                    ></dd-echarts>
                    <dd-echarts
                        class="bar"
                        charts-id="box"
                        :option="option4"
                    ></dd-echarts>
                </div>

                option: {
                    xAxis: {
                        type: "category",
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(180, 180, 180, 0.2)",
                            },
                        },
                    ],
                },
                option2: {
                    title: {
                        text: "Stacked Line",
                    },
                    tooltip: {
                        trigger: "axis",
                    },
                    legend: {
                        data: [
                            "Email",
                            "Union Ads",
                            "Video Ads",
                            "Direct",
                            "Search Engine",
                        ],
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            name: "Email",
                            type: "line",
                            stack: "Total",
                            data: [120, 132, 101, 134, 90, 230, 210],
                        },
                        {
                            name: "Union Ads",
                            type: "line",
                            stack: "Total",
                            data: [220, 182, 191, 234, 290, 330, 310],
                        },
                        {
                            name: "Video Ads",
                            type: "line",
                            stack: "Total",
                            data: [150, 232, 201, 154, 190, 330, 410],
                        },
                        {
                            name: "Direct",
                            type: "line",
                            stack: "Total",
                            data: [320, 332, 301, 334, 390, 330, 320],
                        },
                        {
                            name: "Search Engine",
                            type: "line",
                            stack: "Total",
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                        },
                    ],
                },
                option3: {
                    title: {
                        text: "Referer of a Website",
                        subtext: "Fake Data",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "item",
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                    },
                    series: [
                        {
                            name: "Access From",
                            type: "pie",
                            radius: "50%",
                            data: [
                                { value: 1048, name: "Search Engine" },
                                { value: 735, name: "Direct" },
                                { value: 580, name: "Email" },
                                { value: 484, name: "Union Ads" },
                                { value: 300, name: "Video Ads" },
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)",
                                },
                            },
                        },
                    ],
                },
                option4: {
                    title: {
                        text: "Proportion of Browsers",
                        subtext: "Fake Data",
                        top: 10,
                        left: 10,
                    },
                    tooltip: {
                        trigger: "item",
                    },
                    legend: {
                        type: "scroll",
                        bottom: 10,
                        data: (function () {
                            var list = [];
                            for (var i = 1; i <= 28; i++) {
                                list.push(i + 2000 + "");
                            }
                            return list;
                        })(),
                    },
                    visualMap: {
                        top: "middle",
                        right: 10,
                        color: ["red", "yellow"],
                        calculable: true,
                    },
                    radar: {
                        indicator: [
                            { text: "IE8-", max: 400 },
                            { text: "IE9+", max: 400 },
                            { text: "Safari", max: 400 },
                            { text: "Firefox", max: 400 },
                            { text: "Chrome", max: 400 },
                        ],
                    },
                    series: (function () {
                        var series = [];
                        for (var i = 1; i <= 28; i++) {
                            series.push({
                                type: "radar",
                                symbol: "none",
                                lineStyle: {
                                    width: 1,
                                },
                                emphasis: {
                                    areaStyle: {
                                        color: "rgba(0,250,0,0.3)",
                                    },
                                },
                                data: [
                                    {
                                        value: [
                                            (40 - i) * 10,
                                            (38 - i) * 4 + 60,
                                            i * 5 + 10,
                                            i * 9,
                                            (i * i) / 2,
                                        ],
                                        name: i + 2000 + "",
                                    },
                                ],
                            });
                        }
                        return series;
                    })(),
                },

                .echart {
                    display: flex;
                    flex-wrap: wrap;
                    border-top: 1px solid #eaeefb;
                    border-left: 1px solid #eaeefb;
                }
                .bar {
                    width: 50%;
                    height: 400px;
                    transition: all 0.3s;
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                    margin-bottom: -1px;
                    margin-right: -1px;
                }
            `,
            Attributes: [
                {
                    parameter: "charts-id",
                    explain: "key值，不可重复",
                    type: "string/number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "option",
                    explain: "数据集",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "other",
                    explain: "其他参数",
                    type: "function",
                    optional: "—",
                    default: "—",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.echart {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #eaeefb;
    border-left: 1px solid #eaeefb;
}
.bar {
    width: 50%;
    height: 400px;
    transition: all 0.3s;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: -1px;
    margin-right: -1px;
}
</style>
