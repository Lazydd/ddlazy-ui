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
                <use :xlink:href="`#${icon}`" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddBacktop",
    props: {
        icon: {
            type: String,
            default: "icon-triangle-up-fill",
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
        offsetTop: {
            type: Number,
            default: 0,
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
            this.vnode.scrollTo({ behavior: "smooth", top: this.offsetTop });
        },
        dd_isShowBacktop() {
            this.isShowBacktop =
                this.vnode.scrollTop > this.visibilityHeight ? true : false;
        },
    },
    mounted() {
        this.init();
        window.addEventListener("scroll", this.dd_isShowBacktop, true);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.dd_isShowBacktop);
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
