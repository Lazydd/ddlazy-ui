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
        <dd-describe title="AttribuTable Attributestes" :data="Attributes"></dd-describe>
        <dd-describe title="Table-column Attributes" :data="Attributes2"></dd-describe>
        <dd-footer left="Form 表单" right="Tag 标签"></dd-footer>
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
            Attributes: [
                {
                    parameter: "data",
                    explain: "显示的数据",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "stripe",
                    explain: "是否为斑马纹 table",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "border",
                    explain: "是否带有纵向边框",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "align",
                    explain: "对齐方式",
                    type: "string",
                    optional: "left/center/right",
                    default: "left",
                },
            ],
            Attributes2: [
                {
                    parameter: "type",
                    explain: "对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；",
                    type: "string",
                    optional: "selection/index",
                    default: "—",
                },
                {
                    parameter: "label",
                    explain: "显示的标题",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "prop",
                    explain: "对应列内容的字段名，也可以使用 property 属性",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "width",
                    explain: "对应列的宽度",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "min-width",
                    explain: "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列	",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "align",
                    explain: "对齐方式",
                    type: "string",
                    optional: "left/center/right",
                    default: "left",
                },
            ],
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
