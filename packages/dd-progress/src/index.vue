<template>
    <div :style="type === 'circle' ? 'display:inline-block' : 'display:block'">
        <div class="dd-progress" v-if="type === 'line'">
            <div
                class="dd-progress-bar"
                :style="{ height: strokeWidth + 'px' }"
            >
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
        <template v-if="type === 'circle'">
            <div class="dd-progress-circle">
                <div class="circle-left" :class="`circle-bgColor-${status}`">
                    <div ref="leftcontent"></div>
                </div>
                <div class="circle-right" :class="`circle-bgColor-${status}`">
                    <div ref="rightcontent"></div>
                </div>
                <div v-if="!status" class="dd-circle-icon">{{ percent }} %</div>
                <dd-icon
                    v-if="status === 'success'"
                    icon="icon-success"
                    :class="['dd-circle-icon', status]"
                ></dd-icon>
                <dd-icon
                    v-if="status === 'warning'"
                    icon="icon-prompt"
                    :class="['dd-circle-icon', status]"
                ></dd-icon>
                <dd-icon
                    v-if="status === 'exception'"
                    icon="icon-reeor"
                    :class="['dd-circle-icon', status]"
                ></dd-icon>
            </div>
        </template>
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
        type: {
            type: String,
            default: "line",
        },
    },
    data() {
        return {
            unit: "%",
            percent: 0,
            initDeg: 0,
            timeId: null,
            animationing: false,
            speed: 3, //速度 取值建议在0-3之间
        };
    },
    methods: {
        transformToDeg(percent) {
            let deg = 0;
            if (percent >= 100) {
                deg = 360;
            } else {
                deg = parseInt((360 * percent) / 100);
            }
            return deg;
        },
        transformToPercent(deg) {
            let percent = 0;
            if (deg >= 360) {
                percent = 100;
            } else {
                percent = parseInt((100 * deg) / 360);
            }
            return percent;
        },
        rotateLeft(deg) {
            // 大于180时，执行的动画
            this.$refs.leftcontent.style.transform =
                "rotate(" + (deg - 180) + "deg)";
        },
        rotateRight(deg) {
            // 小于180时，执行的动画
            this.$refs.rightcontent.style.transform = "rotate(" + deg + "deg)";
        },
        goRotate(deg) {
            this.animationing = true;
            this.timeId = setInterval(() => {
                if (deg > this.initDeg) {
                    // 递增动画
                    this.initDeg += Number(this.speed);
                    if (this.initDeg >= 180) {
                        this.rotateLeft(this.initDeg);
                        this.rotateRight(180); // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
                    } else {
                        this.rotateRight(this.initDeg);
                    }
                } else {
                    // 递减动画
                    this.initDeg -= Number(this.speed);
                    if (this.initDeg >= 180) {
                        this.rotateLeft(this.initDeg);
                    } else {
                        this.rotateLeft(180); // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
                        this.rotateRight(this.initDeg);
                    }
                }
                this.percent = this.transformToPercent(this.initDeg); // 百分比数据滚动动画
                const remainer = Number(deg) - this.initDeg;
                if (Math.abs(remainer) < this.speed) {
                    this.initDeg += remainer;
                    if (this.initDeg > 180) {
                        this.rotateLeft(deg);
                    } else {
                        this.rotateRight(deg);
                    }
                    this.animationFinished();
                }
            }, 10);
        },
        animationFinished() {
            this.percent = this.percentage; // 百分比数据滚动动画
            this.animationing = false;
            clearInterval(this.timeId);
            this.$emit("animationFinished"); // 动画完成的回调
        },
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
    created() {
        if (this.type === "circle")
            this.goRotate(this.transformToDeg(this.percentage));
    },
    watch: {
        percentage(val) {
            if (this.type === "circle") {
                if (this.animationing) return;
                this.goRotate(this.transformToDeg(val));
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
.dd-progress-circle {
    position: relative;
    width: 126px;
    height: 126px;
    border-radius: 50%;
    overflow: hidden;
    .circle-left,
    .circle-right {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #409eff;
        overflow: hidden;
        > div {
            width: 100%;
            height: 100%;
            background-color: #e5e9f2;
            transform-origin: right center;
        }
    }
    .circle-bgColor-success {
        background-color: #67c23a;
    }
    .circle-bgColor-warning {
        background-color: #e6a23c;
    }
    .circle-bgColor-exception {
        background-color: #f56c6c;
    }
    .circle-right {
        left: 50%;
        > div {
            transform-origin: left center;
        }
    }
    .dd-circle-icon {
        position: absolute;
        top: 7%;
        bottom: 7%;
        left: 7%;
        right: 7%;
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }
    .dd-icon {
        font-size: 20px;
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
}
</style>
