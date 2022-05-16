<template>
    <div class="imagePreview" :style="`z-index:${zIndex}`">
        <div class="dd-image-viewer_mask"></div>
        <div class="dd-image-viewer_btn dd-image-viewer_close">
            <dd-icon icon="icon-close"></dd-icon>
        </div>
        <div class="dd-image-viewer_btn dd-image-viewer_prev">
            <dd-icon icon="icon-arrow-left"></dd-icon>
        </div>
        <div class="dd-image-viewer_btn dd-image-viewer_next">
            <dd-icon icon="icon-arrow-right"></dd-icon>
        </div>
        <div class="dd-image-viewer_btn dd-image-viewer_actions">
            <div class="dd-image-viewer_actions_inner">
                <dd-icon icon="icon-viewlarger"></dd-icon>
                <dd-icon icon="icon-suoxiao"></dd-icon>
                <dd-icon icon="icon-fullscreen"></dd-icon>
                <dd-icon icon="icon-fullscreen-exit"></dd-icon>
                <dd-icon icon="icon-xiangzuoxuanzhuan"></dd-icon>
                <dd-icon icon="icon-xiangyouxuanzhuan"></dd-icon>
            </div>
        </div>
        <div class="dd-image-viewer_canvas">
            {{ previewSrcList }}
            <!-- <img
                v-for="(item, i) in previewSrcList"
                :key="i"
                :src="item"
                alt=""
            /> -->
        </div>
    </div>
</template>

<script>
import ddIcon from "../../dd-icon";
export default {
    props: {
        zIndex: {
            type: Number,
            default: 2000,
        },
        previewSrcList: {
            type: Array,
        },
    },
    data() {
        return {};
    },
    methods: {},
    created() {},
};
</script>

<style scoped lang="less">
.imagePreview {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .dd-image-viewer_mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.5;
        background: #000;
    }
    .dd-image-viewer_btn {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        opacity: 0.8;
        cursor: pointer;
        box-sizing: border-box;
        user-select: none;
    }
    .dd-image-viewer_close {
        top: 40px;
        right: 40px;
        width: 40px;
        height: 40px;
        font-size: 24px;
        color: #fff;
        background-color: #606266;
    }
    .dd-image-viewer_prev,
    .dd-image-viewer_next {
        top: 50%;
        transform: translateY(-50%);
        width: 44px;
        height: 44px;
        font-size: 24px;
        color: #fff;
        background-color: #606266;
        border-color: #fff;
    }
    .dd-image-viewer_prev {
        left: 40px;
    }
    .dd-image-viewer_next {
        right: 40px;
        text-indent: 2px;
    }
    .dd-image-viewer_actions {
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        width: 282px;
        height: 44px;
        padding: 0 23px;
        background-color: #606266;
        border-color: #fff;
        border-radius: 22px;
        .dd-image-viewer_actions_inner {
            width: 100%;
            height: 100%;
            text-align: justify;
            cursor: default;
            font-size: 23px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
    .dd-image-viewer_canvas {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
