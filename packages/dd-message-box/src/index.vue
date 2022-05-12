<template>
    <transition name="dd-fade">
        <div
            ref="ddLoading"
            v-show="visible"
            :style="`background-color: ${
                background ? background : 'rgba(0, 0, 0, 0.7)'
            }`"
            class="dd-message-box is-fullscreen"
        >
            <div class="dd-loading-spinner">
                <div class="dd-message-box_header">
                    <div class="dd-message-box_title">
                        <span>{{ title }}</span>
                    </div>
                    <div
                        class="dd-message-box_headerbtn"
                        @click="dd_message_box_closeBtn"
                    >
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
                <div class="dd-message-box_content">
                    <div class="dd-message-box_container">
                        <p>{{ container }}</p>
                    </div>
                </div>
                <div class="dd-message-box_btns">
                    <dd-button
                        type="primary"
                        size="small"
                        @click="dd_message_confirm"
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
            confirmButtonText: "",
            spinner: "",
            background: "",
            callback: null,
        };
    },
    methods: {
        dd_message_confirm() {
            this.callback("confirm", this);
            this.dd_message_box_closeBtn();
        },
        dd_message_box_closeBtn() {
            this.$emit("close");
            this.visible ? this.destroy() : null;
        },
        destroy() {
            this.visible = false;
            setTimeout(() => {
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
            }, 1000);
        },
        // close() {
        //     this.visible = false;
        // },
    },
};
</script>

<style lang="less" scoped>
.dd-message-box {
    position: fixed;
    .dd-loading-spinner {
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
        .dd-message-box_content {
            padding: 10px 15px;
            color: #606266;
            font-size: 14px;
            .dd-message-box_container {
                position: relative;
                p {
                    line-height: 24px;
                }
            }
        }
        .dd-message-box_btns {
            padding: 5px 15px 0;
            text-align: right;
        }
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
</style>
