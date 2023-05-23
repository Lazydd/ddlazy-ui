<template>
    <transition name="dd-fade">
        <div
            v-show="visible"
            :style="`background-color: ${
                background ? background : 'rgba(0, 0, 0, 0.7)'
            }`"
            @click.self="closeOnClickModalOther"
            class="dd-message-box is-fullscreen"
        >
            <div
                :class="[
                    'dd-message-box_spinner',
                    center ? 'dd-message-box_center-spinner' : '',
                ]"
                ref="dd-message-box_spinner"
            >
                <div
                    :class="[
                        'dd-message-box_header',
                        center ? 'dd-message-box_center' : '',
                    ]"
                >
                    <div
                        :class="[
                            'dd-message-box_title',
                            center ? 'dd-message-box_center-title' : '',
                        ]"
                    >
                        <div
                            v-if="type && center"
                            :class="[
                                'dd-message-box_status',
                                `dd-message_${type}`,
                            ]"
                        >
                            <div
                                style="
                                    display: inline-block;
                                    margin-right: 10px;
                                "
                            >
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${icon}`" />
                                </svg>
                            </div>
                        </div>
                        <span>{{ title }}</span>
                    </div>
                    <div
                        v-if="showClose"
                        class="dd-message-box_headerbtn"
                        @click="dd_message_box_closeBtn"
                    >
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-close" />
                        </svg>
                    </div>
                </div>
                <div
                    :class="[
                        'dd-message-box_content',
                        center ? 'dd-message-box_center-content' : '',
                    ]"
                >
                    <div
                        v-if="type && !center"
                        :class="['dd-message-box_status', `dd-message_${type}`]"
                    >
                        <div style="display: inline-block; margin-right: 10px">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#${icon}`" />
                            </svg>
                        </div>
                    </div>
                    <div class="dd-message-box_container">
                        <p v-if="!dangerouslyUseHTMLString">{{ container }}</p>
                        <p v-else v-html="container" />
                    </div>
                </div>
                <div
                    :class="[
                        'dd-message-box_btns',
                        center ? 'dd-message-box_center-btns' : '',
                    ]"
                >
                    <dd-button
                        size="small"
                        @click="dd_message_cancel"
                        v-if="showCancelButton"
                    >
                        {{ cancelButtonText }}
                    </dd-button>
                    <dd-button
                        type="primary"
                        size="small"
                        :loading="isLoading"
                        @click="dd_message_confirm"
                        v-if="showConfirmButton"
                    >
                        {{ confirmButtonText }}
                    </dd-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ddMessageBox",
    data() {
        return {
            visible: false,
            title: "",
            container: "",
            confirmButtonText: "确定",
            showConfirmButton: true,
            cancelButtonText: "取消",
            showCancelButton: false,
            spinner: "",
            type: "",
            background: "",
            callback: null,
            showClose: true,
            beforeClose: null,
            closeOnClickModal: true,
            confirmButtonLoading: false,
            isLoading: false,
            dangerouslyUseHTMLString: false,
            center: false,
        };
    },
    methods: {
        dd_message_confirm() {
            this.dd_useDestroy("confirm", "confirm");
            if (this.confirmButtonLoading) {
                this.isLoading = true;
            }
        },
        dd_message_cancel() {
            this.dd_useDestroy("cancel", "cancel");
        },
        dd_message_box_closeBtn() {
            this.dd_useDestroy("cancel", "close");
        },
        dd_useDestroy(type, tips) {
            this.beforeClose
                ? this.beforeClose(tips, this, () => this.destroy(type, tips))
                : null;
            this.callback ? this.callback(tips, this) : null;
            this.visible ? this.destroy(type, tips) : null;
        },
        closeOnClickModalOther() {
            if (this.closeOnClickModal) {
                this.destroy("cancel", "cancel");
            }
        },
        destroy(type, tips) {
            if (!this.confirmButtonLoading) {
                this.$emit("close");
                this.isLoading = false;
                this[type](tips);
                this.visible = false;
                setTimeout(() => {
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
                }, 500);
            }
        },
    },
    computed: {
        icon() {
            let icon = "";
            if (this.type == "info") {
                icon = "icon-prompt-fill";
            } else if (this.type == "success") {
                icon = "icon-success-fill";
            } else if (this.type == "warning") {
                icon = "icon-warning-fill-1";
            } else if (this.type == "error") {
                icon = "icon-reeor-fill";
            }
            return icon;
        },
    },
    watch: {
        confirmButtonLoading(val) {
            if (!val) {
                this.destroy("confirm", "confirm");
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-message-box {
    position: fixed;
    .dd-message-box_spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 420px;
        transform: translate(-50%, -50%);
        padding-bottom: 10px;
        vertical-align: middle;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        font-size: 18px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        text-align: left;
        overflow: hidden;
        backface-visibility: hidden;
        .dd-message-box_header {
            position: relative;
            padding: 15px 15px 10px;
            .dd-message-box_title {
                font-size: 18px;
                line-height: 1;
                color: #303133;
            }
            .dd-message-box_center-title {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .dd-message-box_headerbtn {
                position: absolute;
                top: 15px;
                right: 15px;
                padding: 0;
                border: none;
                outline: none;
                background: transparent;
                color: #909399;
                font-size: 16px;
                cursor: pointer;
            }
        }
        .dd-message-box_center {
            padding-top: 30px;
            // display: flex;
            // align-items: center;
            // justify-content: center;
        }
        .dd-message-box_content {
            display: flex;
            align-items: flex-start;
            padding: 10px 15px;
            color: #606266;
            font-size: 14px;

            .dd-message-box_container {
                padding-right: 12px;
                p {
                    line-height: 28px;
                    text-align: justify;
                }
            }
        }
        .dd-message-box_center-content {
            justify-content: center;
        }
        .dd-message-box_status {
            font-size: 24px !important;
        }
        .dd-message-box_btns {
            padding: 5px 15px 0;
            text-align: right;
            .dd-button {
                &:nth-child(2) {
                    margin-left: 10px;
                }
            }
        }
        .dd-message-box_center-btns {
            text-align: center;
        }
    }
    .dd-message-box_center-spinner {
        padding-bottom: 30px;
    }
}
.is-fullscreen {
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.5s;
}
.dd-message_info {
    color: #909399;
}
.dd-message_success {
    border-color: #e1f3d8;
    color: #67c23a;
}
.dd-message_warning {
    border-color: #faecd8;
    color: #e6a23c;
}
.dd-message_error {
    border-color: #fef0f0;
    color: #f67878;
}
</style>
