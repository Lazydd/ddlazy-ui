<template>
    <div @mouseup="mouseup" class="dd-color-alpha-box">
        <div
            class="dd-color-alpha-slider"
            ref="alpha_slider"
            @mousedown="mousedownIn"
            @mouseup="sliderUp"
            :style="`background: linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0) 0%, rgb(${rgb.r}, ${rgb.g}, ${rgb.b}) 100%)`"
        >
            <div
                class="dd-color-alpha-slider_thumb"
                @mousedown="mousedownOut"
                :style="{ left: left + 'px' }"
            ></div>
        </div>
    </div>
</template>

<script>
let _alphaSliderWidth = 0;
export default {
    name: "dd-color-alpha-slider",
    props: {
        value: {
            type: [String, Number],
        },
        rgb: {
            type: Object,
        },
    },
    data() {
        return {
            left: 0,
            radio: 0,
        };
    },
    methods: {
        sliderUp(e) {
            this.left =
                e.clientX - this.alpha_slider.getBoundingClientRect().left;
            this.radio = (this.left / _alphaSliderWidth).toFixed(2);
            this.$emit("input", this.radio);
        },
        mousedownIn() {
            document.onmousemove = (e) => {
                let left =
                    e.clientX - this.alpha_slider.getBoundingClientRect().left;
                if (left < 0) left = 0;
                if (left > _alphaSliderWidth) left = _alphaSliderWidth;
                this.left = left;
                this.radio = (this.left / _alphaSliderWidth).toFixed(2);
                this.$emit("input", this.radio);
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
                if (endx > _alphaSliderWidth) {
                    endx = _alphaSliderWidth;
                }
                this.left = endx;
                this.radio = (endx / _alphaSliderWidth).toFixed(2);
                this.$emit("input", this.radio);
            };
        },
        mouseup() {
            document.onmousemove = null;
        },
        initX() {
            this.left = parseFloat(this.value) * 280;
        },
    },
    mounted() {
        _alphaSliderWidth = this.alpha_slider.clientWidth;
        document.addEventListener("click", this.mouseup);
    },
    created() {
        this.initX();
    },
    beforeDestroy() {
        document.removeEventListener("click", this.mouseup);
    },
    computed: {
        alpha_slider() {
            return this.$refs.alpha_slider;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-color-alpha-box {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
}
.dd-color-alpha-slider {
    position: relative;
    width: 100%;
    height: 12px;
    .dd-color-alpha-slider_thumb {
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
