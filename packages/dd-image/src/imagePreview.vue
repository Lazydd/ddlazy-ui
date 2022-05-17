<template>
    <div class="imagePreview" :style="`z-index:${zIndex}`" @wheel="handleWheel">
        <div class="dd-image-viewer_mask"></div>
        <div class="dd-image-viewer_btn dd-image-viewer_close" @click="onClose">
            <dd-icon icon="icon-close"></dd-icon>
        </div>
        <div
            class="dd-image-viewer_btn dd-image-viewer_prev"
            @click="ddImageAction('prev')"
        >
            <dd-icon icon="icon-arrow-left"></dd-icon>
        </div>
        <div
            class="dd-image-viewer_btn dd-image-viewer_next"
            @click="ddImageAction('next')"
        >
            <dd-icon icon="icon-arrow-right"></dd-icon>
        </div>
        <div class="dd-image-viewer_btn dd-image-viewer_actions">
            <div class="dd-image-viewer_actions_inner">
                <dd-icon
                    icon="icon-viewlarger"
                    @click="ddImageAction('out')"
                ></dd-icon>
                <dd-icon
                    icon="icon-suoxiao"
                    @click="ddImageAction('in')"
                ></dd-icon>
                <dd-icon
                    v-if="!options.screen"
                    icon="icon-fullscreen"
                    @click="ddImageAction('screenTrue')"
                ></dd-icon>
                <dd-icon
                    v-if="options.screen"
                    icon="icon-fullscreen-exit"
                    @click="ddImageAction('screenFalse')"
                ></dd-icon>
                <dd-icon
                    icon="icon-xiangzuoxuanzhuan"
                    @click="ddImageAction('leftRotate')"
                ></dd-icon>
                <dd-icon
                    icon="icon-xiangyouxuanzhuan"
                    @click="ddImageAction('rightRotate')"
                ></dd-icon>
            </div>
        </div>
        <div class="dd-image-viewer_canvas">
            <img
                v-for="(item, i) in urlList"
                v-if="i === index"
                :key="i"
                :src="item"
                alt=""
                :style="`transform: scale(${options.scale}) rotate(${
                    options.rotate
                }deg);
                    margin-left: 0px;
                    margin-top: 0px;
                    transition: transform 0.3s ease 0s;
                    ${
                        !options.screen
                            ? 'max-height: 100%;max-width: 100%;'
                            : ''
                    }`"
            />
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
        urlList: {
            type: Array,
        },
        appendToBody: {
            type: Boolean,
            default: true,
        },
        onClose: {
            type: Function,
            default: () => {},
        },
        initIndex: {
            type: [Number, String],
        },
    },
    data() {
        return {
            index: this.initIndex,
            options: {
                scale: 1,
                rotate: 0,
                screen: false,
            },
        };
    },
    mounted() {
        if (this.appendToBody) {
            document.body.appendChild(this.$el);
        }
    },
    methods: {
        ddImageChange(type) {
            this.options = this.$options.data().options;
            if (type === "next") {
                this.index++;
                if (this.index > this.urlList.length - 1) {
                    this.index = 0;
                }
            } else if (type == "prev") {
                this.index--;
                if (this.index < 0) {
                    this.index = this.urlList.length - 1;
                }
            }
        },
        ddImageAction(type, step) {
            let { options } = this;
            switch (type) {
                case "out":
                    options.scale = parseFloat(
                        (options.scale + (step ? step : 0.2)).toFixed(3)
                    );
                    break;
                case "in":
                    if (options.scale > 0.4) {
                        let finalValue = parseFloat(
                            (options.scale - (step ? step : 0.2)).toFixed(3)
                        );
                        options.scale = finalValue < 0.4 ? 0.4 : finalValue;
                    }
                    break;
                case "leftRotate":
                    options.rotate -= 90;
                    break;
                case "rightRotate":
                    options.rotate += 90;
                    break;
                case "screenTrue":
                    options.scale = 1;
                    options.rotate = 0;
                    options.screen = true;
                    break;
                case "screenFalse":
                    options.scale = 1;
                    options.rotate = 0;
                    options.screen = false;
                    break;
                case "prev":
                    this.ddImageChange("prev");
                    break;
                case "next":
                    this.ddImageChange("next");
                    break;
            }
        },
        handleWheel(e) {
            e.stopPropagation();
            if (e.deltaY > 0) {
                //向下
                this.ddImageAction("in", 0.1);
            } else if (e.deltaY < 0) {
                //向上
                this.ddImageAction("out", 0.1);
            }
        },
    },
    watch: {
        index(val) {
            this.$emit("change", val);
        },
    },
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
