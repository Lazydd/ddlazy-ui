<template>
    <div
        class="dd-tooltip_main"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
    >
        <div class="dd-tooltip_box">
            <transition name="fale">
                <div v-if="isShow">
                    <div class="dd-tooltip_main-dropdown-s"></div>
                    <div :class="['dd-tooltip', 'dd-tooltip_popper', effect]">
                        {{ content }}
                    </div>
                </div>
            </transition>
            <div>
                <slot  v-if="$slots.default" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddTooltip",
    props: {
        effect: {
            type: String,
            default: "dark",
        },
        content: {
            type: String,
        },
        placement: {
            type: String,
            default: "bottom",
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        mouseenter(e) {
            this.isShow = true;
        },
        mouseleave(e) {
            this.isShow = false;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tooltip_main {
    position: relative;
    display: inline-block;
    &:hover {
    }
    .dd-tooltip_box {
        width: 100%;
        .dd-tooltip {
            position: relative;
        }
        .dark {
            background: #303133;
            color: #fff;
        }
        .light {
            background: #fff;
            border: 1px solid #303133;
        }
        .dd-tooltip_popper {
            position: absolute;
            top: -150%;
            border-radius: 4px;
            padding: 10px;
            z-index: 2000;
            font-size: 12px;
            line-height: 1.2;
            min-width: 10px;
            word-wrap: break-word;
        }
    }
}

.dd-tooltip_main-dropdown-s {
    position: absolute;
    width: 0;
    height: 0;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0px;
    z-index: 1;
    border-style: solid;
    border-color: #303133 transparent transparent;
    &::before {
        // content: "";
        // position: absolute;
        // display: inline-block;
        // width: 0;
        // height: 0;
        // z-index: 2;
        // top: -5px;
        // left: -6px;
        // border: 6px solid;
        // border-color: #fff transparent transparent;
    }
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
</style>
