<template>
    <div class="page-box">
        <h2 class="_title">Progress 进度条</h2>
        <p class="_descript">用于展示操作进度，告知用户当前状态和预期。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-progress :percentage="50" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" :format="format" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" status="success" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" status="warning" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="50" status="exception"></dd-progress>
            </template>
        </dd-block>
        <dd-block title="百分比内显" :code="code2">
            <template #source>
                <dd-progress textInside :percentage="50" :strokeWidth="26" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="success" :strokeWidth="24" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="warning" :strokeWidth="22" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="exception" :strokeWidth="20" style="margin-bottom:35px"></dd-progress>
            </template>
        </dd-block>
        <dd-block title="自定义颜色" :code="code3">
            <template #source>
                <dd-progress :percentage="percentage" :color="customColor" style="margin-bottom:15px"></dd-progress>
                <dd-progress :percentage="percentage" :color="customColorMethod" style="margin-bottom:15px"></dd-progress>
                <dd-progress :percentage="percentage" :color="customColorMethod" style="margin-bottom:15px"></dd-progress>
                <dd-button @click="decrease" icon="icon-sami-select"></dd-button>
                <dd-button @click="increase" icon="icon-add-select"></dd-button>
            </template>
        </dd-block>
        <dd-block title="环形进度条" :code="code3">
            <template #source>
                <dd-progress type="circle" :percentage="0" style="margin-right:15px"></dd-progress>
                <dd-progress type="circle" :percentage="25" style="margin-right:15px"></dd-progress>
                <dd-progress type="circle" :percentage="100" style="margin-right:15px"></dd-progress>
                <dd-progress type="circle" :percentage="70" style="margin-right:15px"></dd-progress>
                <dd-progress type="circle" :percentage="50"></dd-progress>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Progress",
    data() {
        return {
            percentage: 20,
            customColor: 'green',
            code1: `
                <dd-progress :percentage="50" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" :format="format" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" status="success" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="100" status="warning" style="margin-bottom:35px"></dd-progress>
                <dd-progress :percentage="50" status="exception"></dd-progress>
            `,
            code2:`
                <dd-progress textInside :percentage="50" :strokeWidth="26" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="success" :strokeWidth="24" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="warning" :strokeWidth="22" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="exception" :strokeWidth="20" style="margin-bottom:35px"></dd-progress>
            `,
            code3:`
                <dd-progress textInside :percentage="50" :strokeWidth="26" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="success" :strokeWidth="24" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="warning" :strokeWidth="22" style="margin-bottom:35px"></dd-progress>
                <dd-progress textInside :percentage="100" status="exception" :strokeWidth="20" style="margin-bottom:35px"></dd-progress>
            `
        };
    },
    methods:{
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
        customColorMethod(percentage) {
            if (percentage < 30) {
                return 'red';
            } else if (percentage < 70) {
                return '#e6a23c';
            } else {
                return '#67c23a';
            }
        },
        increase() {
            this.percentage += 10;
            if (this.percentage > 100) {
                this.percentage = 100;
            }
        },
        decrease() {
            this.percentage -= 10;
            if (this.percentage < 0) {
                this.percentage = 0;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
