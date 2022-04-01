<template>
    <div
        class="dd-tooltip_main"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
    >
        <!-- <div class="dd-tooltip_box" ref="dd-tooltip_box">
            <transition name="fale">
                <div
                    v-if="isShow"
                    class="dd-tooltip_container"
                    :style="`max-width:${maxWidth}px`"
                >
                    <div :class="['dd-tooltip', 'dd-tooltip_popper', effect]">
                        {{ content }}
                        <div class="dd-tooltip_main-dropdown-s"></div>
                    </div>
                </div>
            </transition>
        </div> -->
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
            type: Number,
            default: 300,
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
            vnode: null,
            abcde: null,
            node: null,
        };
    },
    methods: {
        append() {
            if (!this.isShow) document.body.appendChild(this.node);
        },
        remove() {
            if (this.isShow) document.body.removeChild(this.node);
        },
        mouseenter(e) {
            this.append();
            this.isShow = true;
        },
        mouseleave(e) {
            this.remove();
            this.isShow = false;
        },
        initNode() {
            let node = document.createElement("div");
            let { top, left, width, height } = this.getOffset(this.$el);
            node.className = "dd-tooltip_box";
            switch (this.placement) {
                case "top-left":
                    node.style.left = left + "px";
                    node.style.top = top - height - this.space + "px";
                case "top":
                    node.style.transform = "translateX(-50%)";
                    node.style.left = left + width / 2 + "px";
                    node.style.top = top - height - this.space + "px";
                case "top-right":
                    node.style.left = left + "px";
                    node.style.top = top - height - this.space + "px";
            }
            // node.style.left = left + "px";
            // node.style.top = top - height - this.space + "px";
            node.innerHTML = this.content;
            this.node = node;
        },
    },
    mounted() {
        this.initNode();
    },
};
</script>

<style lang="less" scoped>
.dd-tooltip_main {
    position: relative;
    display: inline-block;
    &:hover {
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
