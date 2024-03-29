<template>
    <div class="dd-button">
        <button
            :class="[type, size, { plain }]"
            :disabled="disabled"
            :round="round"
            :circle="circle"
            :loading="loading"
            @click="$emit('click')"
        >
            <dd-icon v-if="loading" icon="icon-loading" class="loading" />
            <dd-icon v-if="icon" :icon="icon" />
            <span :class="['des', { ml5: icon }]" v-if="$slots.default">
                <slot />
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "ddButton",
    props: {
        type: {
            type: String,
            default: "default",
        },
        size: {
            type: String,
            default: "big",
        },
        circle: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        plain: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="less" scoped>
@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loading {
    margin-right: 5px;
    animation: loading 2s linear infinite;
}
.dd-button {
    display: inline-block;
    button {
        display: flex;
        align-items: center;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    //type
    .default {
        &:hover,
        &:focus {
            background: #ecf5ff;
            color: #409eff;
            border-color: #c6e2ff;
        }
        &.plain {
            color: #409eff;
            background: #fff;
            border-color: #b3d8ff;
            &:hover,
            &:focus {
                background: #fff;
                border-color: #409eff;
                color: #409eff;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #c0c4cc !important;
            background-color: #fff !important;
            border-color: #ebeef5 !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #c0c4cc !important;
            background-color: #fff !important;
            border-color: #ebeef5 !important;
        }
    }
    .primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
        &.plain {
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            &:hover,
            &:focus {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fff !important;
            background-color: #a0cfff !important;
            border-color: #a0cfff !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #fff !important;
            background-color: #a0cfff !important;
            border-color: #a0cfff !important;
        }
    }
    .success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
        &.plain {
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;
            &:hover,
            &:focus {
                color: #fff;
                background-color: #67c23a;
                border-color: #67c23a;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fff !important;
            background-color: #b3e19d !important;
            border-color: #b3e19d !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #fff !important;
            background-color: #b3e19d !important;
            border-color: #b3e19d !important;
        }
    }
    .info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
        &.plain {
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6;
            &:hover,
            &:focus {
                background: #a6a9ad;
                border-color: #a6a9ad;
                color: #fff;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fff !important;
            background-color: #c8c9cc !important;
            border-color: #c8c9cc !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #fff !important;
            background-color: #c8c9cc !important;
            border-color: #c8c9cc !important;
        }
    }
    .warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,
        &:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
        &.plain {
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1;
            &:hover,
            &:focus {
                color: #fff;
                background-color: #e6a23c;
                border-color: #e6a23c;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fff !important;
            background-color: #f3d19e !important;
            border-color: #f3d19e !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #fff !important;
            background-color: #f3d19e !important;
            border-color: #f3d19e !important;
        }
    }
    .danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
        &.plain {
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4;
            &:hover,
            &:focus {
                color: #fff;
                background-color: #f56c6c;
                border-color: #f56c6c;
            }
        }
        &[disabled] {
            cursor: not-allowed !important;
            color: #fff !important;
            background-color: #fab6b6 !important;
            border-color: #fab6b6 !important;
        }
        &[round] {
            border-radius: 20px;
        }
        &[circle] {
            border-radius: 50%;
            padding: 12px;
        }
        &[loading] {
            pointer-events: none;
            cursor: default !important;
            color: #fff !important;
            background-color: #fab6b6 !important;
            border-color: #fab6b6 !important;
        }
    }

    //size
    .medium {
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .small {
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .mini {
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .ml5 {
        margin-left: 5px;
    }
}
</style>
