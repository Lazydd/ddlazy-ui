<template>
    <div
        class="dd-popover__reference-wrapper"
        v-bind="$attrs"
        v-model="isShowPopconfirm"
        trigger="click"
    >
        {{ isShowPopconfirm }}
        <div @click="popconfirm_control" v-if="$slots.reference">
            <slot name="reference" />
        </div>
        <transition name="popconfirm-wrapper">
            <div
                class="dd-popover"
                v-show="isShowPopconfirm"
                :ref="`popconfirm${key}`"
                :key="`popconfirm${key}`"
            >
                <div class="dd-popconfirm-s"></div>
                <p class="dd-popconfirm__main">
                    <svg
                        class="icon"
                        aria-hidden="true"
                        :style="`color:${iconColor}`"
                    >
                        <use :xlink:href="`#${icon}`"></use>
                    </svg>
                    {{ title }}
                </p>
                <div class="dd-popconfirm__action">
                    <button class="dd-popconfirm__action_clear" @click="cancel">
                        {{ cancelButtonText }}
                    </button>
                    <dd-button size="mini" type="primary" @click="confirm">
                        {{ confirmButtonText }}
                    </dd-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ddPopconfirm",
    props: {
        title: {
            type: String,
        },
        confirmButtonText: {
            type: String,
            default: "确定",
        },
        cancelButtonText: {
            type: String,
            default: "取消",
        },
        icon: {
            type: String,
            default: "icon-prompt-fill",
        },
        iconColor: {
            type: String,
            default: "#f90",
        },
    },
    data() {
        return {
            isShowPopconfirm: false,
            vnode: null,
            key: null,
        };
    },
    methods: {
        confirm() {
            this.isShowPopconfirm = false;
            this.$emit("confirm");
        },
        cancel() {
            this.isShowPopconfirm = false;
            this.$emit("cancel");
        },
        popconfirm_control() {
            this.key = +new Date();
            this.isShowPopconfirm = !this.isShowPopconfirm;
        },
    },
    mounted() {
        document.onmousedown = (e) => {
            console.log(this.key);
            if (this?.$refs[`popconfirm${this.key}`]?.contains(e.target))
                return;
            // this.isShowPopconfirm = false;
        };
    },
    beforeDestroy() {
        document.onmousedown = null;
    },
};
</script>

<style lang="less" scoped>
.popconfirm-wrapper-enter-active,
.popconfirm-wrapper-leave-active {
    transition: all 0.3s;
}
.popconfirm-wrapper-enter {
    opacity: 0;
}
.popconfirm-wrapper-leave-to {
    opacity: 0;
}
.dd-popover__reference-wrapper {
    position: relative;
    .dd-popover {
        position: absolute;
        background: #fff;
        min-width: 150px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        padding: 12px;
        z-index: 2000;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        word-break: break-all;
        margin-top: 12px;
        z-index: 9;
        .dd-popconfirm__main {
            margin: 14px 0;
            display: inline-block;
            .icon {
                font-size: 16px;
            }
        }
        .dd-popconfirm__action {
            text-align: right;
            margin: 0;
            .dd-popconfirm__action_clear {
                border-color: transparent;
                background: transparent;
                cursor: pointer;
                color: #409eff;
                padding-left: 0;
                padding-right: 0;
            }
            .dd-button {
                margin-left: 10px;
            }
        }
        .dd-popconfirm-s {
            position: absolute;
            width: 0;
            height: 0;
            top: -6px;
            left: 20px;
            border-width: 0 6px 6px;
            z-index: 1;
            border-style: solid;
            border-color: transparent transparent #e4e7ed;
            &::before {
                content: "";
                position: absolute;
                display: inline-block;
                width: 0;
                height: 0;
                z-index: 2;
                top: -5px;
                left: -6px;
                border: 6px solid;
                border-color: transparent transparent #fff;
            }
        }
    }
}
</style>
