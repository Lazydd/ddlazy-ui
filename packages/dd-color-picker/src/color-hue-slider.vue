<template>
    <div @mouseup="mouseup">
        <div
            class="dd-color-hue-slider"
            ref="hub_slider"
            @mousedown="mousedownIn"
            @mouseup="sliderUp"
        >
            <div
                class="dd-color-hub-slider_thumb"
                @mousedown="mousedownOut"
                :style="{ left: left + 'px' }"
            ></div>
        </div>
    </div>
</template>

<script>
let _hubSliderWidth = 0;
export default {
    name: "dd-color-hue-slider",
    data() {
        return {
            left: 0,
            radio: 0,
        };
    },
    methods: {
        sliderUp(e) {
            this.left =
                e.clientX - this.hub_slider.getBoundingClientRect().left;
            this.radio = (this.left / _hubSliderWidth).toFixed(6);
            this.$emit("input", this.radio * 360);
        },
        mousedownIn() {
            document.onmousemove = (e) => {
                let left =
                    e.clientX - this.hub_slider.getBoundingClientRect().left;
                if (left < 0) left = 0;
                if (left > _hubSliderWidth) left = _hubSliderWidth;
                this.left = left;
                this.radio = (this.left / _hubSliderWidth).toFixed(6);
                this.$emit("input", this.radio * 360);
            };
        },
        mousedownOut(event) {
            var event = event || window.event;
            let startx = event.clientX;
            let sb_bkx = startx - event.target.offsetLeft;
            document.onmousemove = (e) => {
                let event = e || window.event;
                let endx = event.clientX - sb_bkx;
                if (endx < 0) {
                    endx = 0;
                }
                if (endx > _hubSliderWidth) {
                    endx = _hubSliderWidth;
                }
                this.left = endx;
                this.radio = (endx / _hubSliderWidth).toFixed(6);
                this.$emit("input", this.radio * 360);
            };
        },
        mouseup() {
            document.onmousemove = null;
        },
    },
    mounted() {
        _hubSliderWidth = this.hub_slider.clientWidth;
        document.addEventListener("click", this.mouseup);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.mouseup);
    },
    computed: {
        hub_slider() {
            return this.$refs.hub_slider;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-color-hue-slider {
    position: relative;
    width: 100%;
    height: 12px;
    background: linear-gradient(
        90deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red
    );
    .dd-color-hub-slider_thumb {
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        border-radius: 1px;
        background: #fff;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 2px rgb(0 0 1);
        z-index: 1;
        cursor: pointer;
        box-sizing: border-box;
    }
}
</style>
