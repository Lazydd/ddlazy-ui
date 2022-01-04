<template>
    <div
        class="dd-col"
        :style="{
            flex: `0 0 ${(span / 24) * 100}%`,
            padding,
            'margin-left': (offset / 24) * 100 + '%',
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ddCol",
    props: {
        span: {
            type: [Number, String],
            default: 24,
        },
        offset: {
            type: [Number, String],
            default: 0,
        },
    },
    data() {
        return {
            viewWidth: document.body.clientWidth,
            gutter: this.$parent.gutter,
        };
    },
    computed: {
        padding() {
            return this.getPadding();
        },
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.viewWidth = window.innerWidth;
        });
    },
    methods: {
        getPadding() {
            return `0 ${this.gutter / 2}px`;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-col {
    height: 100%;
    // overflow: hidden;
}
</style>
