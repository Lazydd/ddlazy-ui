<template>
    <div class="dd-scroll">
        <div
            class="dd-scrollbar_srap"
            style="margin-right: -17px; margin-bottom: -17px"
        >
            <slot  v-if="$slots.default" />
        </div>
        <div class="dd-scrollbar_bar is_horizontal"></div>
        <div class="dd-scrollbar_bar is_vertical">
            <div class="dd-scrollbar_thumb" style="height: 25%"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddScroll",
};
</script>

<style lang="less" scoped>
.dd-scroll {
    position: relative;
    overflow: hidden;
    height: 100%;
    .dd-scrollbar_srap {
        overflow: scroll;
        height: 100%;
    }
    .dd-scrollbar_bar {
        position: absolute;
        right: 2px;
        bottom: 2px;
        z-index: 1;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.12s ease-out;
    }
    .is_horizontal {
        height: 6px;
        left: 2px;
    }
    .is_vertical {
        width: 6px;
        top: 2px;
    }
    .dd-scrollbar_thumb {
        position: relative;
        display: block;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(144, 147, 153, 0.3);
        transition: background-color 0.3s;
    }
}
</style>
