<template>
    <div
        ref="ddMessage"
        v-show="visible"
        :class="['dd-message', `dd-message_${type}`]"
        :style="{ top: top + 'px' }"
    >
        <div class="dd-message_main">
            <div style="display: inline-block; margin-right: 10px">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${icon}`"></use>
                </svg>
            </div>
            {{ message }}
        </div>
        <div class="dd-message_closeBtn" @click="ddMessage_closeBtn">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-close'"></use>
            </svg>
        </div>
    </div>
</template>

<script>
let _MessageHeight = 0;
export default {
    name: "ddMessage",
    data() {
        return {
            visible: false,
            message: "",
            top: -50,
            type: "default",
            duration: 3000,
        };
    },
    methods: {
        ddMessage_closeBtn() {
            this.visible ? this.destroy() : null;
        },
        destroy() {
            this.top = _MessageHeight * -1;
            setTimeout(() => {
                this.visible = false;
                this.$emit("close");
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
            }, 500);
        },
    },
    mounted() {
        setTimeout(() => {
            _MessageHeight = this.$refs.ddMessage.offsetHeight;
            this.top = -1 * _MessageHeight;
            // this.top = _MessageHeight;
            this.top = 50;
        }, 100);
        setTimeout(() => {
            this.visible ? this.destroy() : null;
        }, this.duration);
    },
    computed: {
        icon() {
            let icon = "";
            if (this.type == "info") {
                icon = "icon-prompt-fill";
            } else if (this.type == "success") {
                icon = "icon-success-fill";
            } else if (this.type == "warning") {
                icon = "icon-warning-fill";
            } else if (this.type == "error") {
                icon = "icon-reeor-fill";
            }
            return icon;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-message {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dd-message_main {
        display: flex;
        align-items: center;
    }
    .dd-message_closeBtn {
        margin-left: 10px;
        display: inline-block;
        cursor: pointer;
        &:hover {
            color: #c0c4cc;
        }
    }
}
.dd-message_info {
    color: #909399;
}
.dd-message_success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
}
.dd-message_warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
}
.dd-message_error {
    background-color: #fef0f0;
    border-color: #fef0f0;
    color: #f67878;
}
</style>
