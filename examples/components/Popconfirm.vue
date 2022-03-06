<template>
    <div class="page-box">
        <h2 class="_title">Popconfirm 气泡确认框</h2>
        <p class="_descript">点击元素，弹出气泡确认框。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-popconfirm title="这是一段内容确定删除吗？">
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            </template>
        </dd-block>
        <dd-block title="自定义" :code="code2">
            <template #source>
                <dd-popconfirm
                    confirm-button-text="好的"
                    cancel-button-text="不用了"
                    icon="icon-reeor"
                    icon-color="red"
                    title="这是一段内容确定删除吗？"
                    @confirm="deleteClick"
                    @cancel="cancel"
                >
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Popconfirm",
    data() {
        return {
            code1: `
                <dd-popconfirm title="这是一段内容确定删除吗？">
                    <dd-button slot="reference">删除</dd-button>
                </dd-popconfirm>
            `,
            code2: `

            `,
        };
    },
    methods: {
        deleteClick() {
            console.log("确定");
        },
        cancel() {
            console.log("取消");
        },
    },
};
</script>

<style scoped lang="less"></style>
