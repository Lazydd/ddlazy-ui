<template>
    <div class="dd-badge">
        <slot />
        <sup
            v-if="!hidden"
            :class="[
                'dd-badge_content',
                'is-fixed',
                type,
                isDot ? 'is-dot' : '',
            ]"
            >{{ max ? (value >= max ? max + "+" : value) : value }}</sup
        >
    </div>
</template>

<script>
export default {
    name: "ddBadge",
    props: {
        value: {
            type: [String, Number],
        },
        type: {
            type: String,
        },
        max: {
            type: Number,
        },
        isDot: {
            type: Boolean,
            default: false,
        },
        hidden: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-badge {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    .dd-badge_content {
        background-color: #f56c6c;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
    }
    .is-fixed {
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
    }
    .is-dot {
        height: 8px;
        width: 8px;
        padding: 0;
        right: 5px;
        border-radius: 50%;
    }
    .primary {
        background-color: #409eff;
    }
    .warning {
        background-color: #e6a23c;
    }
    .success {
        background-color: #67c23a;
    }
    .danger {
        background-color: #f56c6c;
    }
    .info {
        background-color: #909399;
    }
}
</style>
