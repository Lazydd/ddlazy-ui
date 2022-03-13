<template>
    <div class="page-box">
        <h2 class="_title">TimePicker 时间选择器</h2>
        <p class="_descript">用于选择或输入日期</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-time-select
                    v-model="value"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                    }"
                    placeholder="选择时间"
                >
                </dd-time-select>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Link",
    data() {
        return {
            value: "",
            code1: `
                
            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
