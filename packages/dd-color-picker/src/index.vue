<template>
    <div class="dd-color-picker">
        {{ h }},{{ sv.saturation }},{{ sv.value }}
        <color-hue-slider v-model="h"></color-hue-slider>
        <color-sv-picker v-model="sv"></color-sv-picker>
    </div>
</template>

<script>
import ColorHueSlider from "./color-hue-slider.vue";
import ColorSvPicker from "./color-sv-picker.vue";
export default {
    name: "ddColorPicker",
    props: {},
    data() {
        return {
            sv: {
                saturation: 0,
                value: 0,
            },
            h: 0,
        };
    },
    components: {
        ColorHueSlider,
        ColorSvPicker,
    },
};
</script>

<style lang="less" scoped>
.dd-color-picker {
}
</style>
