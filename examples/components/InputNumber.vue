<template>
    <div class="page-box">
        <h2 class="_title">InputNumber 计数器</h2>
        <p class="_descript">仅允许输入标准的数字值，可定义范围</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-input-number v-model="num"></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-input-number v-model="num2" disabled></dd-input-number>
            </template>
        </dd-block>
        <dd-block title="严格步数" :code="code3">
            <template #source>
                <dd-input-number v-model="num3" :step="2"></dd-input-number>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Input-Number",
    data() {
        return {
            num: 1,
            num2: 1,
            num3: 5,
            code1: `
                <dd-input-number v-model="num"></dd-input-number>
            `,
            code2: `
                <dd-input-number v-model="num2" disabled></dd-input-number>
            `,
            code3: `
                <dd-input-number v-model="num3" :step="2"></dd-input-number>
            `,
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
    },
};
</script>

<style lang="less" scoped></style>
