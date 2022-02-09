<template>
    <div>
        <div
            class="dd-color-sv-picker"
            :style="`background-color:${hex}`"
            ref="sc_picker"
            @mouseup="pickerUp"
            @mousedown="mousedownIn"
        >
            <div class="dd-white picker_blak"></div>
            <div class="dd-black picker_blak"></div>
            <div
                class="picker_cursor"
                @mousedown="mousedownOut"
                :style="{ left: left + 'px', top: top + 'px' }"
            ></div>
        </div>
    </div>
</template>

<script>
let _pickerWidth = 0;
let _pickerHeight = 0;
import mixin from "../../dd-mixins/mixin";
export default {
    name: "dd-color-sv-picker",
    props: ["hex"],
    mixins: [mixin],
    data() {
        return {
            left: 0,
            top: 0,
            radiox: 0,
            radioy: 0,
        };
    },
    methods: {
        pickerUp(e) {
            let { left, top, radiox, radioy } = this.move(
                e,
                this.sc_picker,
                _pickerWidth,
                _pickerHeight
            );
            this.left = left;
            this.top = top;
            this.radiox = radiox;
            this.radioy = radioy;
            this.$emit("input", {
                saturation: 1 * this.radiox,
                value: 1 - this.radioy,
            });
        },
        mousedownIn() {
            document.onmousemove = (e) => {
                let { left, top, radiox, radioy } = this.move(
                    e,
                    this.sc_picker,
                    _pickerWidth,
                    _pickerHeight
                );
                this.left = left;
                this.top = top;
                this.radiox = radiox;
                this.radioy = radioy;

                this.$emit("input", {
                    saturation: 1 * this.radiox,
                    value: 1 - this.radioy,
                });
            };
        },
        mousedownOut(event) {
            var event = event || window.event;
            let sb_bkx = event.clientX - event.target.offsetLeft;
            let sb_bky = event.clientY - event.target.offsetTop;
            document.onmousemove = (e) => {
                let event = e || window.event;
                let endx = event.clientX - sb_bkx;
                let endy = event.clientY - sb_bky;

                if (endx < 0) endx = 0;
                if (endx > _pickerWidth) endx = _pickerWidth;
                if (endy < 0) endy = 0;
                if (endy > _pickerHeight) endy = _pickerHeight;

                this.left = endx;
                this.top = endy;
                this.radiox = (endx / _pickerWidth).toFixed(6);
                this.radioy = (endy / _pickerHeight).toFixed(6);
                this.$emit("input", {
                    saturation: 1 * this.radiox,
                    value: 1 - this.radioy,
                });
            };
        },
        mouseup() {
            document.onmousemove = null;
        },
    },
    mounted() {
        _pickerWidth = this.sc_picker.clientWidth;
        _pickerHeight = this.sc_picker.clientHeight;
        document.addEventListener("click", this.mouseup);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.mouseup);
    },
    computed: {
        sc_picker() {
            return this.$refs.sc_picker;
        },
    },
};
</script>
<style lang="less" scoped>
.dd-color-sv-picker {
    position: relative;
    transition: background-color 0.3s;
    width: 280px;
    height: 180px;
    .picker_blak {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .dd-white {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, white, #ffffff00);
    }
    .dd-black {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, black, #ffffff00);
    }
    .picker_cursor {
        position: absolute;
        width: 8px;
        height: 8px;
        border: 1px solid #fff;
        box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgb(0 0 0 / 30%),
            0 0 1px 2px rgb(0 0 0 / 40%);
        border-radius: 50%;
        transform: translate(-2px, -2px);
        z-index: 1;
    }
}
</style>
