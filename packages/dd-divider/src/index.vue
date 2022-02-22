<template>
    <div
        :class="[
            'dd-divider',
            direction === 'horizontal'
                ? 'dd-divider_horizontal'
                : 'dd-divider_vertical',
        ]"
    >
        <div
            class="is-left dd-divider_text"
            v-if="$slots.default && contentPosition === 'left'"
        >
            <slot />
        </div>
        <div
            class="is-center dd-divider_text"
            v-if="$slots.default && contentPosition === 'center'"
        >
            <slot />
        </div>
        <div
            class="is-right dd-divider_text"
            v-if="$slots.default && contentPosition === 'right'"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "ddDivider",
    props: {
        contentPosition: {
            type: String,
            default: "center",
        },
        direction: {
            type: String,
            default: "horizontal",
        },
    },
};
</script>

<style lang="less" scoped>
.dd-divider {
    background-color: #dcdfe6;
    position: relative;
    .dd-divider_text {
        position: absolute;
        background-color: #fff;
        padding: 0 20px;
        font-weight: 500;
        color: #303133;
        font-size: 14px;
    }
    .dd-icon {
        font-size: 20px;
    }
    .is-left {
        left: 20px;
        transform: translateY(-50%);
    }
    .is-center {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .is-right {
        right: 20px;
        transform: translateY(-50%);
    }
}
.dd-divider_horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
}
.dd-divider_vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}
</style>
