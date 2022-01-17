<template>
    <div class="page-box">
        <h2 class="_title">Checkbox 多选框</h2>
        <p class="_descript">一组备选项中进行多选</p>
        {{ checked }}
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-checkbox v-model="checked">备选项</dd-checkbox>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-checkbox v-model="checked1" disabled>备选项1</dd-checkbox>
                <dd-checkbox v-model="checked2" disabled>备选项</dd-checkbox>
            </template>
        </dd-block>
        {{ checkList }}
        <dd-block title="多选框组" :code="code3">
            <template #source>
                <dd-checkbox-group v-model="checkList">
                    <dd-checkbox label="复选框A"></dd-checkbox>
                    <dd-checkbox label="复选框B"></dd-checkbox>
                    <dd-checkbox label="复选框C"></dd-checkbox>
                    <dd-checkbox disabled label="禁用"></dd-checkbox>
                    <dd-checkbox disabled label="选中且禁用"></dd-checkbox>
                </dd-checkbox-group>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    data() {
        return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ["复选框A", "选中且禁用"],
            code1: `
                <dd-checkbox v-model="checked">备选项</dd-checkbox>
            `,
            code2: `
                <dd-checkbox v-model="checked1" disabled>备选项1</dd-checkbox>
                <dd-checkbox v-model="checked2" disabled>备选项</dd-checkbox>
            `,
            code3: `
                <dd-checkbox-group v-model="checkList">
                    <dd-checkbox label="">复选框A</dd-checkbox>
                    <dd-checkbox label="备选项B"></dd-checkbox>
                    <dd-checkbox label="备选项C"></dd-checkbox>
                    <dd-checkbox disabled>禁用</dd-checkbox>
                    <dd-checkbox disabled>选中且禁用</dd-checkbox>
                </dd-checkbox-group>

                checkList: ["复选框A", "选中且禁用"],
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
