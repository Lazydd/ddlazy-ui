<template>
    <div>
        <h3 class="_title">{{ title }}</h3>
        <div class="box" ref="meta">
            <div class="dd-block">
                <div class="source">
                    <slot name="source" />
                </div>
            </div>
            <dd-transition>
                <div v-if="isShow" class="code" ref="codeWidth">
                    <pre v-highlightjs="code"><code class="html" /></pre>
                </div>
            </dd-transition>
            <div
                :class="['control', { 'is-fixed': fixedControl }]"
                @click="show"
                ref="control"
            >
                <dd-icon :icon="isShow ? 'icon-arrow-up' : 'icon-arrow-down'" />
                <span>
                    {{ isShow ? "影藏代码" : "显示代码" }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddBlock",
    props: {
        title: {
            type: String,
        },
        code: {
            type: String,
        },
    },
    data() {
        return {
            isShow: false,
            fixedControl: false,
            scrollParent: null,
        };
    },
    methods: {
        show() {
            this.isShow = !this.isShow;
        },
        scrollHandler() {
            const { top, bottom, left } =
                this.$refs.meta.getBoundingClientRect();
            this.fixedControl =
                bottom > document.documentElement.clientHeight &&
                top + 44 <= document.documentElement.clientHeight;
            this.$refs.control.style.width = this.fixedControl
                ? `${this.codeWidth}px`
                : "100%";
        },
        removeScrollHandler() {
            this.scrollParent &&
                this.scrollParent.removeEventListener(
                    "scroll",
                    this.scrollHandler
                );
        },
    },
    mounted() {
        // 手机端监听或者用touchmove
        // window.onscroll = () => {
        //     this.scrollHandler();
        // };
    },
    computed: {
        //此处有bug，暂时无法监听宽度的变化
        //https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver
        codeWidth() {
            return this.$refs.codeWidth.offsetWidth;
        },
    },
    beforeDestroy() {
        this.removeScrollHandler();
    },
    watch: {
        isShow(val) {
            if (!val) {
                this.fixedControl = false;
                this.removeScrollHandler();
                return;
            }
            setTimeout(() => {
                this.scrollParent = document.querySelector(".main-box");
                this.scrollParent &&
                    this.scrollParent.addEventListener(
                        "scroll",
                        this.scrollHandler
                    );
                this.scrollHandler();
            }, 200);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-block {
    border: 1px solid #ebebeb;
    border-radius: 3px 3px 0 0;
    transition: 0.2s;
}
.source {
    width: 100%;
    padding: 24px;
}
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.5s;
}
.fale-enter,
.fale-leave-to {
    opacity: 0;
}
.fale-enter-to,
.fale-leave {
    opacity: 1;
}
.control {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 0 0 3px 3px;
    border-top: none;
    color: #d3dce6;
    cursor: pointer;
    transition: background-color 1s;
    span {
        transition: 0.5s;
        opacity: 0;
    }
    .dd-icon {
        transition: 0.5s;
    }
    &:hover {
        color: #4096ff !important;
        background-color: rgba(215, 215, 215, 0.3);
        span {
            opacity: 1;
        }
    }
    &.is-fixed {
        position: fixed;
        bottom: 0;
        // min-width: 946px;
    }
}
.box {
    z-index: 5;

    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
        transition: all 0.3s;
        .control {
            user-select: none;
            color: #d3dce6;
            .dd-icon,
            span {
                transform: translateX(-30px);
                opacity: 1;
            }
        }
    }
    transition: all 0.3s;
}
</style>
