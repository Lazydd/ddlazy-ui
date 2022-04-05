<template>
    <div class="dd-echarts" v-if="chartsId" :ref="chartsId"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "ddEcharts",
    props: {
        chartsId: {
            type: [String, Number],
        },
        option: {
            type: Object,
        },
    },
    data() {
        return {
            myChart: null,
        };
    },
    methods: {
        resizeCharts() {
            if (this.myChart) {
                this.myChart.resize();
            }
        },
        init() {
            if (this.chartsId) {
                this.myChart = echarts.init(this.$refs[this.chartsId]);
                this.myChart.setOption(this.option);
                window.addEventListener("resize", this.resizeCharts);
            }
        },
        destroy() {
            if (this.myChart) {
                this.myChart.dispose();
                window.removeEventListener("resize", this.resizeCharts);
                this.$emit("destroy");
            }
        },
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        this.destroy();
    },
    watch: {
        option: {
            deep: true,
            handler(newValue, oldValue) {
                this.myChart.setOption(this.option);
                this.$emit(newValue, oldValue);
            },
        },
        chartsId(val) {
            if (val) this.init();
        },
    },
};
</script>

<style scoped>
.dd-echarts {
    width: 100%;
    height: 100%;
}
</style>
