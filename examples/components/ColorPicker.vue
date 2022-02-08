<template>
    <div class="page-box">
        <h2 class="_title">ColorPicker 颜色选择器</h2>
        <p class="_descript">用于颜色选择，支持多种格式。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-color-picker v-model="color1"></dd-color-picker>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "ColorPicker",
    data() {
        return {
            color1: "",
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
