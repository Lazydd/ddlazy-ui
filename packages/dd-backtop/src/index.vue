<template>
    <div
        class="dd-backtop"
        @click="$emit('click')"
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
        };
    },
    mounted() {
        window.addEventListener("scroll", () => {
            console.log(123123);
            if (window.pageYOffset > this.visibilityHeight) {
                this.isShowBacktop = true;
            }
        });
        // this.$refs.target;
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
