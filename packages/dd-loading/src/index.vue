<template>
    <transition name="loading">
        <div
            ref="ddLoading"
            v-show="visible"
            :style="`background-color: ${
                background ? background : 'rgba(0, 0, 0, 0.7)'
            }`"
            class="dd-loading is-fullscreen"
        >
            <div class="dd-loading-spinner">
                <div class="dd-icon" style="display: inline-block">
                    <svg class="icon" aria-hidden="true">
                        <use
                            :xlink:href="`#${
                                spinner ? spinner : 'icon-loading'
                            }`"
                        />
                    </svg>
                </div>
                <p class="dd-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ddLoading",
    data() {
        return {
            visible: false,
            text: "",
            spinner: "",
            background: "",
            area: "",
        };
    },
    methods: {
        ddMessage_closeBtn() {
            this.visible ? this.destroy() : null;
        },
        destroy() {
            this.visible = false;
            setTimeout(() => {
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
            }, 500);
        },
        close() {
            this.ddMessage_closeBtn();
        },
    },
    mounted() {
        if (this.area) this.area.style.position = "relative";
    },
};
</script>

<style lang="less" scoped>
@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.dd-loading {
    position: fixed;
    .dd-loading-spinner {
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .dd-icon {
        color: #409eff;
        font-size: 25px;
        animation: loading 2s linear infinite;
    }
    .dd-loading-text {
        color: #409eff;
        margin: 3px 0;
        font-size: 14px;
    }
}
.is-fullscreen {
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
}
.loading-enter {
    opacity: 0;
}
.loading-leave-to {
    opacity: 0;
}
</style>
