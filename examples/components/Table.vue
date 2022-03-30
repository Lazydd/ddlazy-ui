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
                    <dd-table-column prop="address"label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="带斑马纹表格" :code="code2">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="固定宽度" :code="code3">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column prop="date" label="日期" width="180"></dd-table-column>
                    <dd-table-column prop="name" label="姓名" width="180"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="序号" :code="code4">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column type="index" label="序号"></dd-table-column>
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="居中" :code="code5">
            <template #source>
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column
                        prop="date"
                        label="日期"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                    <dd-table-column
                        prop="name"
                        label="姓名"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="带边框表格" :code="code6">
            <template #source>
                <dd-table :data="tableData" border style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="多选" :code="code7">
            <template #source>
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column type="selection"></dd-table-column>
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            </template>
        </dd-block>
        <dd-block title="自定义内容" :code="code8">
            <template #source>
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column prop="date" label="日期">
                        <template slot-scope="scope">
                            <dd-icon
                                icon="icon-ontimeshipment"
                                style="font-size: 15px"
                            ></dd-icon>
                            <span style="margin-left: 10px">{{
                                scope.row.date
                            }}</span>
                        </template>
                    </dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址">
                        <template slot-scope="scope">
                            <dd-tag>标签一</dd-tag>
                            <dd-tag>标签一</dd-tag>
                        </template>
                    </dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="edit(scope)"
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
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address"label="地址"></dd-table-column>
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
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            `,
            code3: `
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column prop="date" label="日期" width="180"></dd-table-column>
                    <dd-table-column prop="name" label="姓名" width="180"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            `,
            code4: `
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column type="index" label="序号"></dd-table-column>
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            `,
            code5: `
                <dd-table :data="tableData" stripe style="width: 100%">
                    <dd-table-column
                        prop="date"
                        label="日期"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                    <dd-table-column
                        prop="name"
                        label="姓名"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                    <dd-table-column
                        prop="address"
                        label="地址"
                        header-align="center"
                        align="center"
                    ></dd-table-column>
                </dd-table>
            `,
            code6: `
                <dd-table :data="tableData" border style="width: 100%">
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            `,
            code7: `
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column type="selection"></dd-table-column>
                    <dd-table-column prop="date" label="日期"></dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址"></dd-table-column>
                </dd-table>
            `,
            code8: `
                <dd-table :data="tableData" style="width: 100%">
                    <dd-table-column prop="date" label="日期">
                        <template slot-scope="scope">
                            <dd-icon
                                icon="icon-ontimeshipment"
                                style="font-size: 15px"
                            ></dd-icon>
                            <span style="margin-left: 10px">{{
                                scope.row.date
                            }}</span>
                        </template>
                    </dd-table-column>
                    <dd-table-column prop="name" label="姓名"></dd-table-column>
                    <dd-table-column prop="address" label="地址">
                        <template slot-scope="scope">
                            <dd-tag>标签一</dd-tag>
                            <dd-tag>标签一</dd-tag>
                        </template>
                    </dd-table-column>
                    <dd-table-column label="操作">
                        <template slot-scope="scope">
                            <dd-button size="small" @click="edit(scope)"
                                >编辑</dd-button
                            >
                            <dd-button size="small" type="danger"
                                >删除</dd-button
                            >
                        </template>
                    </dd-table-column>
                </dd-table>
            `,
        };
    },
    methods: {
        edit(item) {
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
