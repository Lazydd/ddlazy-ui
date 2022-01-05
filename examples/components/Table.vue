<template>
    <div>
        <dd-table :data="tableData" stripe>
            <dd-table-column prop="date" label="日期"></dd-table-column>
            <dd-table-column prop="name" label="姓名"></dd-table-column>
            <dd-table-column prop="address" label="地址"></dd-table-column>
            <dd-table-column label="操作">
                <template slot-scope="scope">
                   <dd-button size="small" @click="a(scope.row)">编辑</dd-button>
                    <dd-button size="small" type="danger">删除</dd-button>
                </template>
            </dd-table-column>
        </dd-table>
    </div>
</template>

<script>
export default {
    name: "Table",
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
        };
    },
    methods: {
        a(item) {
            console.log(item);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-button {
    margin: 0 5px;
}
</style>
