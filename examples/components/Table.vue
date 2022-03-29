<template>
    <div class="page-box">
        <h2 class="_title">Table 表格</h2>
        <p class="_descript">
            用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="a(scope.row)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="带斑马纹表格" :code="code2">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="a(scope.row)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="固定宽度" :code="code3">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column
                        prop="date"
                        label="日期"
                        width="180"
                    ></dd-table-column>
                    <dd-table-column
                        prop="name"
                        label="姓名"
                        width="180"
                    ></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                        width="180"
                    ></dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="a(scope.row)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>
            </template>
        </dd-block>
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
            code1: `
                <dd-table :data="tableData">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="a(scope.row)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>


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
                <dd-table :data="tableData" stripe>
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                    ></dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="a(scope.row)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>
            `,
            code3: `

            `,
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
