<template>
    <div class="dd-popover__reference-wrapper" v-bind="$attrs" trigger="click">
        <div
            @click="popconfirm_control"
            v-if="$slots.reference"
            ref="popconfirm"
        >
            <slot name="reference" />
        </div>
        <transition name="dd-fade">
            <div class="dd-popover" v-if="isShowPopconfirm">
                <div class="dd-popconfirm-s" />
                <p class="dd-popconfirm__main">
                    <svg
                        v-if="!hideIcon"
                        class="icon"
                        aria-hidden="true"
                        :style="`color:${iconColor}`"
                    >
                        <use :xlink:href="`#${icon}`" />
                    </svg>
                    {{ title }}
                </p>
                <div class="dd-popconfirm__action">
                    <button class="dd-popconfirm__action_clear" @click="cancel">
                        {{ cancelButtonText }}
                    </button>
                    <dd-button
                        size="mini"
                        :type="confirmButtonType"
                        @click="confirm"
                    >
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
        confirmButtonType: {
            type: String,
            default: "primary",
        },
        icon: {
            type: String,
            default: "icon-prompt-fill",
        },
        iconColor: {
            type: String,
            default: "#f90",
        },
        hideIcon: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isShowPopconfirm: false,
            vnode: null,
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
            this.isShowPopconfirm = !this.isShowPopconfirm;
        },
        except(e) {
            let isSelf = this.$refs["popconfirm"].contains(e.target);
            if (!isSelf) this.isShowPopconfirm = false;
        },
    },
    mounted() {
        document.addEventListener("click", this.except);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.except);
    },
};
</script>

<style lang="less" scoped>
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
