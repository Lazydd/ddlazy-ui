<template>
    <div
        class="dd-tooltip_main"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
    >
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddTooltip",
    mixins: [mixin],
    props: {
        effect: {
            type: String,
            default: "dark",
        },
        content: {
            type: String,
        },
        maxWidth: {
            type: [Number, String],
            default: 500,
        },
        placement: {
            type: String,
            default: "top",
        },
        space: {
            type: [Number, String],
            default: 8,
        },
    },
    data() {
        return {
            isShow: false,
            node: null,
        };
    },
    methods: {
        remove() {
            if (this.isShow) document.body.removeChild(this.node);
        },
        mouseenter(e) {
            this.initNode();
            this.isShow = true;
        },
        mouseleave(e) {
            this.remove();
            this.isShow = false;
        },
        initNode() {
            let node = document.createElement("div");
            let windowWidth = this.getWindow().width;
            let { top, left, width, height } = this.getOffset(this.$el);
            node.innerHTML = this.content;
            node.className = `dd-tooltip_box ${this.placement}`;
            node.style.maxWidth = this.maxWidth + "px";
            this.node = node;
            document.body.appendChild(this.node);
            switch (this.placement) {
                case "top-left":
                    node.style.left = left + "px";
                    node.style.top =
                        top - this.node.offsetHeight - this.space + "px";
                    break;
                case "top":
                    node.style.transform = "translateX(-50%)";
                    node.style.left = left + width / 2 + "px";
                    node.style.top =
                        top - this.node.offsetHeight - this.space + "px";
                    break;
                case "top-right":
                    node.style.left = left - width + "px";
                    node.style.top =
                        top - this.node.offsetHeight - this.space + "px";
                    break;
                case "left":
                    node.style.transform = "translateY(-50%)";
                    node.style.right =
                        windowWidth - left + this.space + 5 + "px";
                    node.style.top = top + height / 2 + "px";
                    break;
                case "right":
                    node.style.transform = "translateY(-50%)";
                    node.style.left = width + left + this.space + 5 + "px";
                    node.style.top = top + height / 2 + "px";
                    break;
                case "bottom-left":
                    node.style.left = left + "px";
                    node.style.top = top + height + this.space + 5 + "px";
                    break;
                case "bottom":
                    node.style.transform = "translateX(-50%)";
                    node.style.left = left + width / 2 + "px";
                    node.style.top = top + height + this.space + 5 + "px";
                    break;
                case "bottom-right":
                    node.style.left = left - width + "px";
                    node.style.top = top + height + this.space + 5 + "px";
                    break;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tooltip_main {
    position: relative;
    display: inline-block;
}
</style>
