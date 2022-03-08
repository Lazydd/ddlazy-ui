<template>
    <div class="page-box">
        <h2 class="_title">Transfer 穿梭框</h2>
        <p class="_descript">基础用法</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-transfer v-model="value" :data="data"></dd-transfer>
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
            data: generateData(),
            code1: `
                
            `,
        };
    },
    created(){
        console.log(this.data);
    }
};
</script>

<style lang="less" scoped></style>
