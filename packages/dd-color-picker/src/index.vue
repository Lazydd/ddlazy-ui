<template>
    <div :class="['dd-color-picker', size]" ref="dd-color_dropdown">
        <div :class="{ 'dd-color-picker_mask': disabled }" />
        <div
            :class="['color-picker_trigger']"
            @click="!disabled ? dd_color_pickerClick() : null"
        >
            <div
                class="color-picker_color-box"
                :style="
                    showAlpha
                        ? `background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);`
                        : ''
                "
            >
                <div
                    class="color-picker_color"
                    :style="`background-color: ${isHex ? hex : RGB}`"
                />
            </div>
        </div>
        <transition name="dd-zoom-top">
            <div class="dd-color_dropdown dd-color-picker_pannel" v-if="isShow">
                <color-sv-picker v-model="sv" :hex="noChangeHEX" />
                <color-hue-slider v-model="h" style="margin: 8px 0" />
                <color-alpha-slider
                    v-if="showAlpha"
                    v-model="a"
                    style="margin: 8px 0"
                    :rgb="rgb"
                />
                <div class="dd-color_control">
                    <div>
                        <dd-input v-model="hex" size="mini" />
                        <dd-input
                            v-model="RGB"
                            size="mini"
                            style="margin-top: 8px"
                        />
                    </div>
                    <div>
                        <dd-button
                            size="mini"
                            class="dd-color_clear"
                            @click="dd_color_clear"
                        >
                            清空
                        </dd-button>
                        <dd-button
                            size="mini"
                            @click="dd_color_determine"
                            style="margin-top: 8px"
                        >
                            确定
                        </dd-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ColorHueSlider from "./color-hue-slider.vue";
import ColorSvPicker from "./color-sv-picker.vue";
import colorAlphaSlider from "./color-alpha-slider.vue";
export default {
    name: "ddColorPicker",
    props: {
        value: {
            type: String,
        },
        showAlpha: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            sv: {
                saturation: 0,
                value: 1,
            },
            h: 0,
            a: 1,
            rgb: {},
            hex: "",
            noChangeHEX: "",
            noChangeRGB: "",
            isShow: false,
            isHex: true,
        };
    },
    methods: {
        hsv2rgb(h, s, v) {
            let r, g, b, i, f, p, q, t;
            if (arguments.length === 1) {
                (s = h.s), (v = h.v), (h = h.h);
            }
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0:
                    (r = v), (g = t), (b = p);
                    break;
                case 1:
                    (r = q), (g = v), (b = p);
                    break;
                case 2:
                    (r = p), (g = v), (b = t);
                    break;
                case 3:
                    (r = p), (g = q), (b = v);
                    break;
                case 4:
                    (r = t), (g = p), (b = v);
                    break;
                case 5:
                    (r = v), (g = p), (b = q);
                    break;
            }
            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255),
            };
        },
        rgb2hsv(r, g, b, a) {
            (r /= 255), (g /= 255), (b /= 255);

            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h,
                s,
                v = max;

            var d = max - min;
            s = max == 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            } else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }

                h /= 6;
            }

            return [h, s, v, a];
        },
        rgb2hex(r, g, b) {
            var hex =
                "#" +
                ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            return hex;
        },
        hex2rgb(hex) {
            let RGB =
                "rgb(" +
                parseInt("0x" + hex.slice(1, 3)) +
                "," +
                parseInt("0x" + hex.slice(3, 5)) +
                "," +
                parseInt("0x" + hex.slice(5, 7)) +
                ")";
            return {
                r: parseInt("0x" + hex.slice(1, 3)),
                g: parseInt("0x" + hex.slice(3, 5)),
                b: parseInt("0x" + hex.slice(5, 7)),
                rgb: RGB,
            };
        },
        dd_color_clear() {
            this.hex = "";
            this.rgb = {};
            this.noChangeRGB = "";
            this.isShow = false;
            this.$emit("input", "");
            this.noChangeHEX = "#ff0000";
            this.sv = {
                saturation: 0,
                value: 1,
            };
            this.h = 0;
        },
        dd_color_determine() {
            this.isShow = false;
            this.$emit("input", this.isHex ? this.hex : this.RGB);
        },
        dd_color_pickerClick() {
            this.isShow = !this.isShow;
        },
        except(e) {
            let isSelf = this.$refs["dd-color_dropdown"].contains(e.target);
            if (!isSelf) {
                this.isShow = false;
                this.$emit("input", this.isHex ? this.hex : this.RGB);
            }
        },
        initColor() {
            if (this.value) {
                if (this.value.indexOf("#") != -1) {
                    const { r, g, b } = this.hex2rgb(this.value);
                    this.isHex = true;
                    this.hex = this.value;
                    this.rgb = { r, g, b };
                    let hsv = this.rgb2hsv(r, g, b);
                    this.$set(this.sv, "saturation", hsv[1]);
                    this.$set(this.sv, "value", hsv[2]);
                    this.h = hsv[0];
                    newOptions = { ...this.sv, h: this.h, a: 1 };
                } else {
                    this.isHex = false;
                    if (this.showAlpha) {
                        //正则表达式待合并
                        let rgba = this.value.replace(/^rgba/, "");

                        rgba = rgba.replace(/^\(/gi, "");
                        rgba = rgba.replace(/\)/gi, "");
                        let rgbaArr = rgba.split(",");
                        this.rgb = {
                            r: parseInt(rgbaArr[0]),
                            g: parseInt(rgbaArr[1]),
                            b: parseInt(rgbaArr[2]),
                            a: parseFloat(rgbaArr[3]),
                        };
                        this.hex = this.rgb2hex(
                            parseInt(rgbaArr[0]),
                            parseInt(rgbaArr[1]),
                            parseInt(rgbaArr[2])
                        );
                        let hsv = this.rgb2hsv(
                            parseInt(rgbaArr[0]),
                            parseInt(rgbaArr[1]),
                            parseInt(rgbaArr[2]),
                            parseFloat(rgbaArr[3])
                        );
                        this.$set(this.sv, "saturation", hsv[1]);
                        this.$set(this.sv, "value", hsv[2]);
                        this.h = hsv[0];
                        this.a = hsv[3];
                    } else {
                        //正则表达式待合并
                        let rgb = this.value.replace(/^rgb/, "");
                        rgb = rgb.replace(/^\(/gi, "");
                        rgb = rgb.replace(/\)/gi, "");
                        let rgbArr = rgb.split(",");
                        this.rgb = {
                            r: parseInt(rgbArr[0]),
                            g: parseInt(rgbArr[1]),
                            b: parseInt(rgbArr[2]),
                        };
                        this.hex = this.rgb2hex(
                            parseInt(rgbArr[0]),
                            parseInt(rgbArr[1]),
                            parseInt(rgbArr[2])
                        );
                        let hsv = this.rgb2hsv(
                            parseInt(rgbArr[0]),
                            parseInt(rgbArr[1]),
                            parseInt(rgbArr[2])
                        );
                        this.$set(this.sv, "saturation", hsv[1]);
                        this.$set(this.sv, "value", hsv[2]);
                        this.h = hsv[0];
                    }
                }
            } else {
                this.noChangeHEX = "#ff0000";
            }
        },
    },
    mounted() {
        document.addEventListener("click", this.except);
    },
    created() {
        this.initColor();
    },
    computed: {
        RGB() {
            if (this.rgb) {
                const { r, g, b } = this.rgb;
                if ((r || r == 0) && (g || g == 0) && (r || r == 0))
                    if (this.showAlpha) {
                        return `rgba(${r}, ${g}, ${b}, ${this.a})`;
                    } else {
                        return `rgb(${r}, ${g}, ${b})`;
                    }
            } else {
                return "";
            }
        },
    },
    components: {
        ColorHueSlider,
        ColorSvPicker,
        colorAlphaSlider,
    },
    beforeDestroy() {
        document.removeEventListener("click", this.except);
    },
    watch: {
        sv(val) {
            this.rgb = this.hsv2rgb(this.h, val.saturation, val.value);
            this.hex = this.rgb2hex(this.rgb.r, this.rgb.g, this.rgb.b);
        },
        h(val) {
            this.noChangeRGB = this.hsv2rgb(val, 1, 1);
            this.rgb = this.hsv2rgb(val, this.sv.saturation, this.sv.value);
            this.hex = this.rgb2hex(this.rgb.r, this.rgb.g, this.rgb.b);
            this.noChangeHEX = this.rgb2hex(
                this.noChangeRGB.r,
                this.noChangeRGB.g,
                this.noChangeRGB.b
            );
        },
        hex(val) {
            if (this.isHex) {
                this.$emit("change", val);
                this.$emit("active-change", val);
            }
        },
        RGB(val) {
            if (!this.isHex) {
                this.$emit("change", val);
                this.$emit("active-change", val);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-color-picker {
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-block;

    .color-picker_color-box {
        width: 100%;
        height: 100%;
    }
    .color-picker_trigger {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 4px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        font-size: 0;
        position: relative;
        cursor: pointer;
        .color-picker_color {
            position: relative;
            display: block;
            box-sizing: border-box;
            border: 1px solid #999;
            transition: background-color 0.3s;
            border-radius: 2px;
            width: 100%;
            height: 100%;
            text-align: center;
        }
    }
    .dd-color-picker_mask {
        height: 38px;
        width: 38px;
        border-radius: 4px;
        position: absolute;
        top: 1px;
        left: 1px;
        z-index: 9;
        cursor: not-allowed;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .dd-color_dropdown {
        transform-origin: center top;
        z-index: 2005;
        position: absolute;
        top: 40px;
        // left: 0;
        left: -120px;
        .dd-color_control {
            display: flex;
            align-items: center;
            justify-content: space-between;
            :deep(.dd-color_clear) button {
                color: #409eff;
            }
            :deep(.dd-input) .dd-input_inner {
                width: 190px;
            }
        }
    }
    .dd-color-picker_pannel {
        padding: 6px;
        box-sizing: content-box;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
}
.medium {
    width: 36px;
    height: 36px;
}
.small {
    width: 32px;
    height: 32px;
}
.mini {
    width: 28px;
    height: 28px;
}
</style>
