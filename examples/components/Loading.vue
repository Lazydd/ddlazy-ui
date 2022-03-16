<template>
    <div class="page-box">
        <h2 class="_title">Loading 加载</h2>
        <p class="_descript">加载数据时显示动效。</p>
        <dd-block title="区域加载" :code="code1">
            <template #source>
                <dd-table :data="tableData" stripe v-loading="loading1">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="整页加载" :code="code2">
            <template #source>
                <dd-button type="primary" @click="openFullScreen"
                    >服务方式</dd-button
                >
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            loading1: true,
            code1: `
                <dd-table :data="tableData" stripe v-loading="loading1">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                </dd-table>
                loading1: true,
                tableData: [
                    {
                        date: "2016-05-02",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄",
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1517 弄",
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                    },
                ],
            `,
            code2: `
                <dd-button type="primary" @click="openFullScreen">服务方式</dd-button>

                this.$loading.service("Loading");
                setTimeout(() => {
                    this.$loading.close();
                }, 3000);
            `,
        };
    },
    methods: {
        openFullScreen() {
            // const loading = this.$loading({
            //     lock: true,
            //     text: "Loading",
            //     spinner: "icon-loading",
            // });
            // setTimeout(() => {
            //     loading.close();
            // }, 3000);

            this.$loading.service("Loading");
            setTimeout(() => {
                this.$loading.close();
            }, 3000);
        },
    },
};
</script>

<style lang="less" scoped></style>
