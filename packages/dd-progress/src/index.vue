<template>
    <div class="dd-progress">
        <div class="dd-progress-bar" :style="{ height: strokeWidth + 'px' }">
            <div class="dd-progress-bar_outer">
                <div
                    :class="['dd-progress-bar_inner', status]"
                    :style="{
                        width: percentageDetail + '%',
                        'background-color': color ? bg : '',
                    }"
                >
                    <div
                        class="dd-progress-bar_innerText"
                        v-if="textInside"
                        :style="{ 'line-height': strokeWidth + 'px' }"
                    >
                        {{ percentage }}%
                    </div>
                </div>
            </div>
        </div>
        <dd-icon
            v-if="status === 'success' && !textInside"
            icon="icon-success"
            :style="{ 'font-size': fz + 'px' }"
            :class="['dd-progress_text', status, fz < 12 ? 'mf' : '']"
        ></dd-icon>
        <dd-icon
            v-else-if="status === 'warning' && !textInside"
            icon="icon-prompt"
            :style="{ 'font-size': fz + 'px' }"
            :class="['dd-progress_text', status, fz < 12 ? 'mf' : '']"
        ></dd-icon>
        <dd-icon
            v-else-if="status === 'exception' && !textInside"
            icon="icon-reeor"
            :style="{ 'font-size': fz + 'px' }"
            :class="['dd-progress_text', status, fz < 12 ? 'mf' : '']"
        ></dd-icon>
        <div
            v-if="!status && !format && !textInside"
            class="dd-progress_text"
            :style="{ 'font-size': fz + 'px' }"
        >
            {{ percentageDetail }}%
        </div>
        <div
            v-if="format && !textInside"
            class="dd-progress_text"
            :style="{ 'font-size': fz + 'px' }"
        >
            {{ unit }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ddProgress",
    props: {
        percentage: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
        },
        format: {
            type: Function,
        },
        strokeWidth: {
            type: Number,
            default: 6,
        },
        textInside: {
            type: Boolean,
            default: false,
        },
        color: {},
    },
    data() {
        return {
            unit: "%",
        };
    },
    mounted() {
        if (this.format) this.unit = this.format(this.percentage);
    },
    computed: {
        percentageDetail() {
            if (this.percentage > 100) {
                return 100;
            } else if (this.percentage < 0) {
                return 0;
            } else {
                return this.percentage;
            }
        },
        fz() {
            return this.strokeWidth * 1.5;
        },
        bg() {
            if (typeof this.color === "function") {
                return this.color(this.percentage);
            } else {
                return this.color;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-progress {
    .dd-progress-bar {
        padding-right: 50px;
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        margin-right: -55px;
        box-sizing: border-box;
        .dd-progress-bar_outer {
            border-radius: 100px;
            background-color: #ebeef5;
            overflow: hidden;
            position: relative;
            vertical-align: middle;
            height: 100%;
            .dd-progress-bar_inner {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background-color: #409eff;
                text-align: right;
                border-radius: 100px;
                line-height: 1;
                white-space: nowrap;
                transition: width 0.6s ease;
                .dd-progress-bar_innerText {
                    display: inline-block;
                    vertical-align: middle;
                    color: #fff;
                    font-size: 12px;
                    margin: 0 5px;
                }
            }
            .success {
                background-color: #67c23a;
                color: #67c23a;
            }
            .warning {
                background-color: #e6a23c;
                color: #e6a23c;
            }
            .exception {
                background-color: #f56c6c;
                color: #f56c6c;
            }
        }
    }
    .dd-progress_text {
        color: #606266;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        line-height: 1;
    }
    .success {
        color: #67c23a;
    }
    .warning {
        color: #e6a23c;
    }
    .exception {
        color: #f56c6c;
    }
    .mf {
        font-size: 12px !important;
    }
}
</style>
