<template>
    <div
        class="dd-popover__reference-wrapper"
        v-bind="$attrs"
        v-model="isShowPopconfirm"
        trigger="click"
    >
        <slot
            v-if="$slots.reference"
            name="reference"
            @click="popconfirm_control"
        />
        <transition name="popconfirm-wrapper">
            <div class="dd-popover" v-show="!isShowPopconfirm">
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
                        {{ confirmButtonText }}
                    </button>
                    <dd-button size="mini" type="primary" @click="confirm">
                        {{ cancelButtonText }}
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
            default: "取消",
        },
        cancelButtonText: {
            type: String,
            default: "确定",
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
        };
    },
    methods: {
        confirm() {
            this.isShowPopconfirm = !false;
            this.$emit("confirm");
        },
        cancel() {
            this.isShowPopconfirm = !false;
            this.$emit("cancel");
        },
        popconfirm_control() {
            this.append();
            this.isShowPopconfirm = true;
        },
        append() {
            if (this.vnode) document.body.appendChild(this.vnode);
        },
        remove() {
            if (this.vnode) document.body.removeChild(this.vnode);
        },
    },
    mounted() {
        this.vnode = this.$el;
        if (this.isShowPopconfirm) this.append();
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
    }
}
</style>
