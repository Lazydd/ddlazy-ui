<template>
    <div class="page-box">
        <h2 class="_title">Dialog 对话框</h2>
        <p class="_descript">
            在保留当前页面状态的情况下，告知用户并承载相关操作。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button @click="dialogVisible = true">
                    点击打开 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <dd-button @click="dialogVisible = false"
                            >取 消</dd-button
                        >
                        <dd-button type="primary" @click="dialogVisible = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Link",
    data() {
        return {
            dialogVisible: false,
            code1: `
                
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
