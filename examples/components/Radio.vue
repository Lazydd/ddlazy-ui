<template>
    <div class="page-box">
        <h2 class="_title">Radio 单选框</h2>
        <p class="_descript">在一组备选项中进行单选</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-radio v-model="radio" label="1">备选项1</dd-radio>
                <dd-radio v-model="radio" label="2">备选项2</dd-radio>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code1">
            <template #source>
                <dd-radio disabled v-model="radio" label="1">备选项1</dd-radio>
                <dd-radio disabled v-model="radio" label="2">备选项2</dd-radio>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            code1: ``,
            radio: "1",
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
    .dd-radio {
        margin-right: 30px;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
