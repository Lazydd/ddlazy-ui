<template>
    <div class="page-box">
        <h2 class="_title">MessageBox 弹框</h2>
        <p class="_descript">
            模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button @click="open">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "MessageBox",
    data() {
        return {
            code1: `
            `,
        };
    },
    methods: {
        open() {
            this.$alert("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.$message({
                        type: "info",
                        message: `action: ${action}`,
                    });
                },
            });
        },
    },
};
</script>

<style lang="less" scoped></style>
