<template>
    <transition name="list">
        <div class="dd-tag">
            <span :class="[type, size]">
                <slot />
                <dd-icon
                    v-if="closable"
                    @click="dd_tag_close"
                    class="dd-tag_close dd-icon_close"
                    icon="icon-close"
                ></dd-icon>
            </span>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ddTag",
    props: {
        type: {
            type: String,
        },
        size: {
            type: String,
        },
        closable: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        dd_tag_close() {
            this.$emit("close", this.$slots.default[0].text.trim());
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tag {
    display: inline-block;
    margin-left: 10px;
    &:first-child {
        margin-left: 0;
    }
    span {
        background-color: #ecf5ff;
        display: inline-block;
        height: 32px;
        padding: 0 10px;
        line-height: 30px;
        font-size: 12px;
        color: #409eff;
        border: 1px solid #d9ecff;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        .dd-icon_close {
            display: inline-block;
            border-radius: 50%;
            text-align: center;
            position: relative;
            cursor: pointer;
            font-size: 12px;
            height: 16px;
            width: 16px;
            line-height: 16px;
            vertical-align: middle;
            top: -1px;
            right: -5px;
        }
        .dd-tag_close {
            &:hover {
                color: #fff;
                background: #409eff;
            }
        }
    }
    .success {
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        color: #67c23a;
        .dd-tag_close {
            &:hover {
                color: #fff;
                background: #67c23a;
            }
        }
    }
    .info {
        background-color: #f4f4f5;
        border-color: #e9e9eb;
        color: #909399;
        .dd-tag_close {
            &:hover {
                color: #fff;
                background: #909399;
            }
        }
    }
    .warning {
        background-color: #fdf6ec;
        border-color: #faecd8;
        color: #e6a23c;
        .dd-tag_close {
            &:hover {
                color: #fff;
                background: #e6a23c;
            }
        }
    }
    .danger {
        background-color: #fef0f0;
        border-color: #fde2e2;
        color: #f56c6c;
        .dd-tag_close {
            &:hover {
                color: #fff;
                background: #f56c6c;
            }
        }
    }
    .medium {
        height: 28px;
        line-height: 26px;
    }
    .small {
        height: 24px;
        padding: 0 8px;
        line-height: 22px;
    }
    .mini {
        height: 20px;
        padding: 0 5px;
        line-height: 19px;
    }
}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>
