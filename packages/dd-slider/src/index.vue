<template>
    <div class="dd-slider" @mouseup="mouseup">
        {{ radio }}
        <div class="dd-slider_runway" ref="slider_runway" @mouseup="runwayUp">
            <div
                class="dd-slider__button-wrapper"
                :style="`width:${left}px`"
            ></div>
            <div
                class="dd-slider_button-wrapper"
                ref="button_wrapper"
                @mousedown="mousedown"
                :style="{ left: left + 'px' }"
            >
                <div class="dd-tooltip dd-slider_button"></div>
            </div>
        </div>
    </div>
</template>

<script>
let _hubSliderWidth = 0;
export default {
    name: "ddSlider",
    data() {
        return {
            left: 0,
            radio: 0,
        };
    },
    methods: {
        runwayUp(e) {
            this.left =
                e.clientX - this.slider_runway.getBoundingClientRect().left;
            this.radio = (this.left / _hubSliderWidth).toFixed(6);
        },
        mousedown(event) {
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
                _this.radio = (endx / _hubSliderWidth).toFixed(6);
            };
        },
        mouseup() {
            document.onmousemove = null;
        },
    },
    mounted() {
        _hubSliderWidth = this.slider_runway.clientWidth;
        document.addEventListener("click", this.mouseup);
    },
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
</style>
