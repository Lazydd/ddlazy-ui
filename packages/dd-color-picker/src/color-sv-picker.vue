<template>
    <div>
        <div class="dd-color-sv-picker" ref="sc_picker" @mouseup="pickerUp">
            <div class="dd-white picker_blak"></div>
            <div class="dd-black picker_blak"></div>
            <div
                @mousedown="mousedown"
                class="picker_cursor"
                :style="{ left: left + 'px', top: top + 'px' }"
            ></div>
        </div>
    </div>
</template>

<script>
let _pickerWidth = 0;
let _pickerHeight = 0;
export default {
    name: "dd-color-sv-picker",
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
            this.left = e.clientX - this.sc_picker.getBoundingClientRect().left;
            this.top = e.clientY - this.sc_picker.getBoundingClientRect().top;
            this.radiox = (this.left / _pickerWidth).toFixed(6);
            this.radioy = (this.top / _pickerHeight).toFixed(6);
            this.$emit("input", {
                saturation: this.radiox,
                value: this.radioy,
            });
        },
        mousedown(event) {
            var event = event || window.event;
            let startx = event.clientX;
            let starty = event.clientY;
            let sb_bkx = startx - event.target.offsetLeft;
            let sb_bky = starty - event.target.offsetTop;
            let _this = this;
            document.onmousemove = function (e) {
                let event = e || window.event;
                let endx = event.clientX - sb_bkx;
                let endy = event.clientY - sb_bky;
                if (endx < 0) {
                    endx = 0;
                }
                if (endx > _pickerWidth) {
                    endx = _pickerWidth;
                }
                if (endy < 0) {
                    endy = 0;
                }
                if (endy > _pickerHeight) {
                    endy = _pickerHeight;
                }
                _this.left = endx;
                _this.top = endy;
                _this.radiox = (endx / _pickerWidth).toFixed(6);
                _this.radioy = (endy / _pickerHeight).toFixed(6);
                _this.$emit("input", {
                    saturation: _this.radiox,
                    value: _this.radioy,
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
    background-color: rgb(255, 0, 0);
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
