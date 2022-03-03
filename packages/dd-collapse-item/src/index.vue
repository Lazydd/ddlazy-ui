<template>
    <div :class="['dd-collapse-item', isActive ? 'is-active' : '']">
        <div
            class="dd-collapse-item__header"
            @click="sollapseChange"
            :style="!isActive ? 'border-bottom: 1px solid #ebeef5;' : ''"
        >
            {{ title }}
            <div class="dd-collapse-item__arrow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </div>
        </div>
        <transition name="fale">
            <div class="dd-collapse-item__wrap" v-show="isActive">
                <div class="dd-collapse-item__content"><slot /></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ddCollapseItem",
    props: {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        sollapseChange() {
            this.isActive = !this.isActive;
            this.$emit("input", this.isActive);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-collapse-item {
    .dd-collapse-item__header {
        display: flex;
        align-items: center;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        color: #303133;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        outline: none;
        .dd-collapse-item__arrow {
            display: inline-block;
            margin: 0 8px 0 auto;
            transition: transform 0.3s;
            font-weight: 300;
            font-size: 20px;
        }
    }
    .dd-collapse-item__wrap {
        height: auto;
        background-color: #fff;
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px solid #ebeef5;
        .dd-collapse-item__content {
            padding-bottom: 25px;
            font-size: 13px;
            color: #303133;
            line-height: 1.7692307692;
        }
    }
}
.is-active {
    .dd-collapse-item__header {
        .dd-collapse-item__arrow {
            transform: rotate(90deg);
        }
    }
}
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.3s;
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
