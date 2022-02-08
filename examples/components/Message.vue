<template>
    <div class="page-box">
        <h2 class="_title">Message 消息提示</h2>
        <p class="_descript">常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button @click="open">打开消息框</dd-button>
                <dd-button @click="open1">打开消息框</dd-button>
                <dd-button @click="open2">打开消息框</dd-button>
                <dd-button @click="open3">打开消息框</dd-button>
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
            // this.$message({type:'success',message:'33333'})
            this.$message.success('啊啊啊啊啊啊阿')
        },
        open1(){
            // this.$message({type:'success',message:'33333'})
            this.$message.info('啊啊啊啊啊啊阿')
        },
        open2(){
            // this.$message({type:'success',message:'33333'})
            this.$message.error('啊啊啊啊啊啊阿')
        },
        open3(){
            // this.$message({type:'success',message:'33333'})
            this.$message.warning('啊啊啊啊啊啊阿')
        },
    }
};
</script>

<style lang="less" scoped></style>
