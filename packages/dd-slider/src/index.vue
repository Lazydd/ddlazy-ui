<template>
    <div :class="['dd-slider', disabled ? 'disabled' : '']" @mouseup="mouseup">
        {{ radio }}
        <div
            class="dd-slider_runway"
            ref="slider_runway"
            @mousedown="mousedownIn"
            @mouseup="runwayUp"
        >
            <div class="dd-slider__button-wrapper" :style="`width:${left}%`" />
            <div
                class="dd-slider_button-wrapper"
                ref="button_wrapper"
                @mousedown="!disabled ? mousedownOut() : null"
                :style="{ left: left + '%' }"
            >
                <div class="dd-tooltip dd-slider_button" />
            </div>
        </div>
    </div>
</template>

<script>
let _hubSliderWidth = 0;
export default {
    name: "ddSlider",
    props: {
        value: {
            type: [Number, String],
            default: 0,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            left: 0,
            radio: 0,
        };
    },
    methods: {
        runwayUp(e) {
            if (!this.disabled) {
                this.left =
                    ((e.clientX -
                        this.slider_runway.getBoundingClientRect().left) /
                        _hubSliderWidth) *
                    100;
                if (this.left > 100) this.left = 100;
                if (this.left < 0) this.left = 0;
                this.radio = this.left.toFixed(0);
                this.$emit("change", this.radio);
            }
        },
        mousedownIn() {
            if (!this.disabled) {
                document.onmousemove = (e) => {
                    let left =
                        ((e.clientX -
                            this.slider_runway.getBoundingClientRect().left) /
                            _hubSliderWidth) *
                        100;
                    if (left < this.min) left = this.min;
                    if (left > this.max) left = this.max;
                    this.left = left;
                    this.radio = parseFloat(left).toFixed(0);
                    this.$emit("input", this.radio);
                };
            }
        },
        mousedownOut(event) {
            // this.setAttribute({style:'cursor:grabbing'})
            var event = event || window.event;
            let startx = event.clientX;
            let sb_bkx = startx - event.target.offsetLeft;
            let _this = this;
            document.onmousemove = function (e) {
                let event = e || window.event;
                let endx = event.clientX - sb_bkx;
                if (endx < 0) {
                    endx = 0;
                }
                if (endx > _hubSliderWidth) {
                    endx = _hubSliderWidth;
                }
                _this.left = endx;
                _this.radio = (endx / _hubSliderWidth).toFixed(0);
            };
        },
        initX() {
            if (this.value > this.max) this.left = this.max;
            if (this.value < this.min) this.left = this.min;
            this.left = parseFloat(this.value);
            this.radio = this.value;
        },
        mouseup() {
            document.onmousemove = null;
        },
    },
    mounted() {
        _hubSliderWidth = this.slider_runway.clientWidth;
        this.initX();
        document.addEventListener("click", this.mouseup);
    },
    created() {},
    beforeDestroy() {
        document.removeEventListener("click", this.mouseup);
    },
    computed: {
        slider_runway() {
            return this.$refs.slider_runway;
        },
        button_wrapper() {
            return this.$refs.button_wrapper;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
    .dd-slider_runway {
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
        .dd-slider_button-wrapper {
            height: 36px;
            width: 36px;
            position: absolute;
            z-index: 1001;
            top: -15px;
            transform: translateX(-50%);
            background-color: transparent;
            text-align: center;
            user-select: none;
            cursor: grab;
            // line-height: normal;
            line-height: 33px;
            .dd-tooltip {
                display: inline-block;
                vertical-align: middle;
            }
            .dd-slider_button {
                width: 16px;
                height: 16px;
                border: 2px solid #409eff;
                background-color: #fff;
                box-sizing: content-box;
                border-radius: 50%;
                transition: 0.2s;
                user-select: none;
                line-height: 36px;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
        .dd-slider__button-wrapper {
            position: absolute;
            left: 0;
            height: 100%;
            background-color: #409eff;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
    }
}
.disabled {
    .dd-slider_runway {
        .dd-slider_button-wrapper {
            .dd-slider_button {
                border-color: #c0c4cc;
                &:hover {
                    transform: scale(1);
                }
            }
        }
        .dd-slider__button-wrapper {
            background-color: #c0c4cc;
        }
    }
}
</style>
