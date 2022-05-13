<template>
    <div class="page-box">
        <h2 class="_title">MessageBox 弹框</h2>
        <p class="_descript">
            模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
        </p>
        <dd-block title="消息提示" :code="code1">
            <template #source>
                <dd-button @click="open">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
        <dd-block title="确认消息" :code="code2">
            <template #source>
                <dd-button @click="open2">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
        <dd-block title="自定义" :code="code3">
            <template #source>
                <dd-button @click="open3">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
        <dd-block title="使用 HTML 片段" :code="code4">
            <template #source>
                <dd-button @click="open4">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
        <dd-block title="居中布局" :code="code5">
            <template #source>
                <dd-button @click="open5">点击打开 Message Box</dd-button>
            </template>
        </dd-block>
        <dd-describe title="Options" :data="Attributes"></dd-describe>
        <dd-describe title="方法" :data="Attributes2" events></dd-describe>
        <dd-footer left="Message 消息提示" right="Tabs 标签页"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "MessageBox",
    data() {
        return {
            code1: `
                <dd-button @click="open">点击打开 Message Box</dd-button>

                open() {
                    this.$alert("这是一段内容", "标题名称", {
                        confirmButtonText: "确定",
                        callback: (action) => {
                            this.$message({
                                type: "info",
                                message: "action: " + action,
                            });
                        },
                    });
                }
            `,
            code2: `
                <dd-button @click="open2">点击打开 Message Box</dd-button>

                open2() {
                    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        showCancelButton: true,
                        type: "warning",
                    })
                    .then(() => {
                        this.$message({
                            type: "success",
                            message: "删除成功!",
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消删除",
                        });
                    });
                }
            `,
            code3: `
                <dd-button @click="open3">点击打开 Message Box</dd-button>

                open3() {
                    this.$confirm("这是一段内容", "标题名称", {
                        confirmButtonText: "确定",
                        closeOnClickModal: false,
                        confirmButtonLoading: true,
                        beforeClose: (instance) => {
                            instance.confirmButtonText = "执行中...";
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 3000);
                        },
                    }).then((action) => {
                        this.$message({
                            type: "info",
                            message: "action: " + action,
                        });
                    });
                },
            `,
            code4: `
                <dd-button @click="open4">点击打开 Message Box</dd-button>

                open4() {
                    this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
                        confirmButtonText: "确定",
                        dangerouslyUseHTMLString: true,
                    });
                },
            `,
            code5:`
                <dd-button @click="open5">点击打开 Message Box</dd-button>

                open5() {
                    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        showCancelButton: true,
                        type: "warning",
                        center: true,
                    })
                        .then(() => {
                            this.$message({
                                type: "success",
                                message: "删除成功!",
                            });
                        })
                        .catch(() => {
                            this.$message({
                                type: "info",
                                message: "已取消删除",
                            });
                        });
                },
            `,
            Attributes: [
                {
                    parameter: "title",
                    explain: "MessageBox 标题",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "message",
                    explain: "MessageBox 消息正文内容",
                    type: "string / VNode",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "dangerouslyUseHTMLString",
                    explain: "是否将 message 属性作为 HTML 片段处理",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "type",
                    explain: "消息类型，用于显示图标",
                    type: "string",
                    optional: "success / info / warning / error",
                    default: "—",
                },
                {
                    parameter: "callback",
                    explain:
                        "若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调",
                    type: "function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法	",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "showClose",
                    explain: "MessageBox 是否显示右上角关闭按钮",
                    type: "boolean",
                    optional: "—",
                    default: "true",
                },
                {
                    parameter: "beforeClose",
                    explain: "MessageBox 关闭前的回调，会暂停实例的关闭",
                    type: "function(action, instance)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "showCancelButton",
                    explain: "是否显示取消按钮	",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "showConfirmButton",
                    explain: "是否显示确定按钮		",
                    type: "boolean",
                    optional: "—",
                    default: "true",
                },
                {
                    parameter: "cancelButtonText",
                    explain: "取消按钮的文本内容	",
                    type: "string",
                    optional: "—",
                    default: "取消",
                },
                {
                    parameter: "confirmButtonText",
                    explain: "确认按钮的文本内容	",
                    type: "string",
                    optional: "—",
                    default: "确认",
                },
                {
                    parameter: "center",
                    explain: "是否居中布局",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "closeOnClickModal",
                    explain: "是否可通过点击遮罩关闭 MessageBox	",
                    type: "boolean",
                    optional: "—",
                    default: "true",
                },
            ],
            Attributes2: [
                {
                    name: "close",
                    explain: "关闭当前的 Message-Box的回调",
                    backParameter: "—",
                },
            ],
        };
    },
    methods: {
        open() {
            this.$alert("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.$message({
                        type: "info",
                        message: "action: " + action,
                    });
                },
            });
        },
        open2() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                showCancelButton: true,
                type: "warning",
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!",
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
        open3() {
            this.$confirm("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                closeOnClickModal: false,
                confirmButtonLoading: true,
                beforeClose: (instance) => {
                    instance.confirmButtonText = "执行中...";
                    setTimeout(() => {
                        instance.confirmButtonLoading = false;
                    }, 3000);
                },
            }).then((action) => {
                this.$message({
                    type: "info",
                    message: "action: " + action,
                });
            });
        },
        open4() {
            this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
                confirmButtonText: "确定",
                dangerouslyUseHTMLString: true,
            });
        },
        open5() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                showCancelButton: true,
                type: "warning",
                center: true,
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!",
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
    },
};
</script>

<style lang="less" scoped></style>
