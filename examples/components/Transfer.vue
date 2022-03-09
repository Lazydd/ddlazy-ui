<template>
    <div class="page-box">
        <h2 class="_title">Transfer 穿梭框</h2>
        <p class="_descript">基础用法</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-transfer v-model="value" :data="data"></dd-transfer>
            </template>
        </dd-block>
        <dd-block title="数据项属性别名" :code="code2">
            <template #source>
                <dd-transfer
                    v-model="value2"
                    :props="{
                        key: 'value',
                        label: 'desc',
                    }"
                    :data="data2"
                ></dd-transfer>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Transfer",
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0,
                });
            }
            return data;
        };
        return {
            value: [1, 4],
            value2: [1, 4],
            data: generateData(),
            data2: generateData(),
            code1: `
                <dd-transfer v-model="value" :data="data"></dd-transfer>
            `,
            code2: `
                <dd-transfer v-model="value" :data="data"></dd-transfer>
            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
