<template>
    <div class="dd-color-picker" ref="dd-color_dropdown">
        <div class="color-picker_trigger" @click="isShow = !isShow">
            <div
                class="color-picker_color"
                :style="`background-color: ${hex}`"
            ></div>
        </div>
        <div>
            <dd-transition name="dd-zoom-top">
                <div
                    class="dd-color_dropdown dd-color-picker_pannel"
                    v-if="isShow"
                >
                    <color-sv-picker
                        v-model="sv"
                        :hex="noChangeHEX"
                    ></color-sv-picker
                    ><color-hue-slider
                        v-model="h"
                        style="margin: 8px 0"
                    ></color-hue-slider>
                    <div class="dd-color_control">
                        <div>
                            <dd-input v-model="hex" size="mini"></dd-input
                            ><dd-input
                                v-model="RGB"
                                size="mini"
                                style="margin-top: 8px"
                            ></dd-input>
                        </div>
                        <div>
                            <dd-button
                                size="mini"
                                class="dd-color_clear"
                                @click="dd_color_clear"
                                >清空</dd-button
                            >
                            <dd-button
                                size="mini"
                                @click="dd_color_determine"
                                style="margin-top: 8px"
                                >确定</dd-button
                            >
                        </div>
                    </div>
                </div>
            </dd-transition>
        </div>
    </div>
</template>

<script>
import ColorHueSlider from "./color-hue-slider.vue";
import ColorSvPicker from "./color-sv-picker.vue";
import ddTransition from "../../dd-transition";
export default {
    name: "ddColorPicker",
    props: {},
    data() {
        return {
            sv: {
                saturation: 1,
                value: 1,
            },
            h: 0,
            rgb: {},
            hex: "",
            noChangeHEX: "",
            noChangeRGB: "",
            isShow: false,
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
        rgb2hex(r, g, b) {
            var hex =
                "#" +
                ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            return hex;
        },
        dd_color_clear() {
            this.hex = "";
            this.rgb = {};
            this.noChangeRGB = "";
            this.isShow = false;
        },
        dd_color_determine() {
            this.isShow = false;
        },
        except(e) {
            let isSelf = this.$refs["dd-color_dropdown"].contains(e.target);
            if (!isSelf) this.isShow = false;
        },
    },
    mounted() {
        this.rgb = this.hsv2rgb(this.h, this.sv.saturation, this.sv.value);
        this.hex = this.rgb2hex(this.rgb.r, this.rgb.g, this.rgb.b);
        this.noChangeHEX = this.hex;
        document.addEventListener("click", this.except);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.except);
    },
    computed: {
        RGB() {
            if (this.rgb) {
                const { r, g, b } = this.rgb;
                if (r & g & b) return `rgb(${r}, ${g}, ${b})`;
            } else {
                return "";
            }
        },
    },
    components: {
        ColorHueSlider,
        ColorSvPicker,
        ddTransition,
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
    },
};
</script>

<style lang="less" scoped>
.dd-color-picker {
    position: relative;
    width: 40px;
    height: 40px;
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
    .dd-color_dropdown {
        transform-origin: center top;
        z-index: 2005;
        position: absolute;
        top: 40px;
        left: 0;
        .dd-color_control {
            display: flex;
            align-items: center;
            justify-content: space-between;
            /deep/.dd-color_clear button {
                color: #409eff;
            }
            /deep/.dd-input .dd-input_inner {
                width: 160px;
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
</style>
