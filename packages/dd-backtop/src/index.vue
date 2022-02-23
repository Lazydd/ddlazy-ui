<template>
    <div
        class="dd-backtop"
        @click="dd_backtop"
        :style="`right: ${right}px; bottom: ${bottom}px`"
        v-if="isShowBacktop"
    >
        <slot v-if="$slots.default" />
        <div v-else class="dd-icon">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${icon}`"></use>
            </svg>
        </div>
    </div>
</template>

<script>
const cubic = (value) => Math.pow(value, 3);
const easeInOutCubic = (value) =>
    value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
export default {
    name: "ddBacktop",
    props: {
        icon: {
            type: String,
            default: "icon-arrow-up",
        },
        bottom: {
            type: Number,
            default: 40,
        },
        right: {
            type: Number,
            default: 40,
        },
        visibilityHeight: {
            type: Number,
            default: 200,
        },
        target: {
            type: String,
        },
    },
    data() {
        return {
            isShowBacktop: false,
            vnode: null,
        };
    },
    methods: {
        init() {
            if (this.target) {
                this.vnode = document.querySelector(this.target);
            } else {
                this.vnode = document.documentElement;
            }
        },
        dd_backtop() {
            this.$emit("click");
            this.dd_scrolltoTop();
        },
        dd_scrolltoTop() {
            console.log(this.vnode.scrollIntoView({ behavior: "smooth" }));
            this.vnode.scrollIntoView({ behavior: "smooth" });
            // const beginTime = Date.now();
            // const beginValue = this.vnode.scrollTop;
            // const rAF =
            //     window.requestAnimationFrame ||
            //     ((func) => setTimeout(func, 16));
            // const frameFunc = () => {
            //     const progress = (Date.now() - beginTime) / 500;
            //     if (progress < 1) {
            //         this.vnode.scrollTop =
            //             beginValue * (1 - easeInOutCubic(progress));
            //         rAF(frameFunc);
            //     } else {
            //         this.vnode.scrollTop = 0;
            //     }
            // };
            // rAF(frameFunc);
        },
    },
    mounted() {
        this.init();
        window.addEventListener(
            "scroll",
            () => {
                this.isShowBacktop =
                    this.vnode.scrollTop > this.visibilityHeight ? true : false;
            },
            true
        );
    },
};
</script>

<style lang="less" scoped>
.dd-backtop {
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    z-index: 5;
    .dd-icon {
        display: inline-block;
    }
    &:hover {
        background-color: #f2f6fc;
    }
}
</style>
