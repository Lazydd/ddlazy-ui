<template>
    <div class="page-box">
        <h2 class="_title">Card 卡片</h2>
        <p class="_descript">将信息聚合在卡片容器中展示。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-divider></dd-divider>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Divider",
    data() {
        return {
            code1: `
                
            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
