<template>
    <div class="dd-link">
        <a
            :href="!disabled ? href : null"
            target="_blank"
            :class="[type]"
            :disabled="disabled"
            :underline="underline"
        >
            <span>
                <dd-icon v-if="icon" :icon="icon"></dd-icon>
                <slot />
            </span>
        </a>
    </div>
</template>

<script>
export default {
    name: "ddLink",
    props: {
        type: {
            type: String,
            default: "default",
        },
        href: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        underline: {
            type: Boolean,
            default: true,
        },
        icon: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-link {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    .default {
        color: #606266;
        text-decoration: none;
        &:hover {
            color: #409eff;
            border-bottom: 1px solid #409eff;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #c0c4cc !important;
            border: none !important;
        }
    }
    .primary {
        color: #409eff;
        text-decoration: none;
        &:hover {
            color: #66b1ff;
            border-bottom: 1px solid #66b1ff;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #a0cfff !important;
            border: none !important;
        }
    }
    .success {
        color: #67c23a;
        text-decoration: none;
        &:hover {
            color: #85ce61;
            border-bottom: 1px solid #85ce61;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #b3e19d !important;
            border: none !important;
        }
    }
    .warning {
        color: #e6a23c;
        text-decoration: none;
        &:hover {
            color: #ebb563;
            border-bottom: 1px solid #ebb563;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #f3d19e !important;
            border: none !important;
        }
    }
    .danger {
        color: #f56c6c;
        text-decoration: none;
        &:hover {
            color: #f78989;
            border-bottom: 1px solid #f56c6c;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fab6b6 !important;
            border: none !important;
        }
    }
    .info {
        color: #909399;
        text-decoration: none;
        &:hover {
            color: #a6a9ad;
            border-bottom: 1px solid #a6a9ad;
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #c8c9cc !important;
            border: none !important;
        }
    }
    a {
        &[underline] {
            &:hover {
                border: none !important;
            }
        }
    }
}
</style>
