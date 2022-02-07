<template>
    <div class="page-box">
        <h2 class="_title">Message 消息提示</h2>
        <p class="_descript">常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-message></dd-message>
                <dd-button @click="open">打开消息框</dd-button>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            code1: `

            `,
        };
    },
    methods:{
        open(){
            console.log(this.$message);
        }
    }
};
</script>

<style lang="less" scoped></style>
