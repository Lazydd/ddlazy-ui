<template>
    <div class="dd-scroll">
        <div class="dd-scrollbar_srap">
            <slot v-if="$slots.default" />
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
        max-height: 200px;
        /*滚动条样式*/
        &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 5px;
            /*高宽分别对应横竖滚动条的尺寸*/
            height: 5px;
        }
        &::-webkit-scrollbar-thumb {
            /* 滚动条里面小方块 */
            background: #eee;
            visibility: hidden;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            background: #fff;
        }
        &:hover::-webkit-scrollbar-thumb {
            background: #eee;
            visibility: visible;
            border-radius: 5px;
        }
    }
}
</style>
