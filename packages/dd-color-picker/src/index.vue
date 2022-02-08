<template>
    <div class="dd-color-picker">
        <!-- <input type="color" /> -->
        <color-hue-slider></color-hue-slider>
    </div>
</template>

<script>
import ColorHueSlider from "./color-hue-slider.vue";
export default {
    name: "ddColorPicker",
    props: {},
    components: {
        ColorHueSlider,
    },
};
</script>

<style lang="less" scoped>
.dd-color-picker {
}
</style>
