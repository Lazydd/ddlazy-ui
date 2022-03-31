<template>
    <div class="page-box">
        <h2 class="_title">Dialog 对话框</h2>
        <p class="_descript">
            在保留当前页面状态的情况下，告知用户并承载相关操作。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button @click="dialogVisible = true">
                    点击打开 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            </template>
        </dd-block>
        <dd-block title="自定义内容" :code="code2">
            <template #source>
                <dd-button
                    @click="dialogVisible1 = true"
                    style="margin-right: 15px"
                >
                    点击嵌套表单的 Dialog
                </dd-button>
                <dd-button @click="dialogVisible2 = true">
                    点击嵌套表格的 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="50%"
                >
                    <dd-form :model="form">
                        <dd-form-item label="活动名称" label-width="120px">
                            <dd-input
                                v-model="form.name"
                                style="width: 300px"
                            ></dd-input>
                        </dd-form-item>
                        <dd-form-item label="活动区域" label-width="120px">
                            <dd-select
                                v-model="form.region"
                                placeholder="请选择活动区域"
                                style="width: 300px"
                            >
                                <dd-option
                                    label="区域一"
                                    value="shanghai"
                                ></dd-option>
                                <dd-option
                                    label="区域二"
                                    value="beijing"
                                ></dd-option>
                            </dd-select>
                        </dd-form-item>
                    </dd-form>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible1 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible1 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>

                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible2"
                    width="50%"
                >
                    <dd-table :data="tableData" stripe>
                        <dd-table-column
                            prop="date"
                            label="日期"
                        ></dd-table-column>
                        <dd-table-column
                            prop="name"
                            label="姓名"
                        ></dd-table-column>
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
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible2 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible2 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            </template>
        </dd-block>
        <dd-block title="居中布局" :code="code3">
            <template #source>
                <dd-button @click="dialogVisible3 = true">
                    点击打开 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible3"
                    width="30%"
                    cente
                >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible3 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible3 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Dialog",
    data() {
        return {
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            dialogVisible3: false,
            form: {},
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
                <dd-button @click="dialogVisible = true">
                    点击打开 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            `,
            code2: `
                <dd-button
                    @click="dialogVisible1 = true"
                    style="margin-right: 15px"
                >
                    点击嵌套表单的 Dialog
                </dd-button>
                <dd-button @click="dialogVisible2 = true">
                    点击嵌套表格的 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="50%"
                >
                    <dd-form :model="form">
                        <dd-form-item label="活动名称" label-width="120px">
                            <dd-input
                                v-model="form.name"
                                style="width: 300px"
                            ></dd-input>
                        </dd-form-item>
                        <dd-form-item label="活动区域" label-width="120px">
                            <dd-select
                                v-model="form.region"
                                placeholder="请选择活动区域"
                                style="width: 300px"
                            >
                                <dd-option
                                    label="区域一"
                                    value="shanghai"
                                ></dd-option>
                                <dd-option
                                    label="区域二"
                                    value="beijing"
                                ></dd-option>
                            </dd-select>
                        </dd-form-item>
                    </dd-form>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible1 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible1 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>

                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible2"
                    width="50%"
                >
                    <dd-table :data="tableData" stripe>
                        <dd-table-column
                            prop="date"
                            label="日期"
                        ></dd-table-column>
                        <dd-table-column
                            prop="name"
                            label="姓名"
                        ></dd-table-column>
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
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible2 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible2 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>

                form: {},
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
            code3: `
                <dd-button @click="dialogVisible3 = true">
                    点击打开 Dialog
                </dd-button>
                <dd-dialog
                    title="提示"
                    :visible.sync="dialogVisible3"
                    width="30%"
                    cente
                >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <dd-button size="small" @click="dialogVisible3 = false"
                            >取 消</dd-button
                        >
                        <dd-button
                            type="primary"
                            size="small"
                            @click="dialogVisible3 = false"
                            >确 定</dd-button
                        >
                    </span>
                </dd-dialog>
            `,
            Attributes: [
                {
                    parameter: "visible",
                    explain: "是否显示 Dialog，支持 .sync 修饰符",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "title",
                    explain: "Dialog 的标题",
                    type: "String",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "width",
                    explain: "Dialog 的宽度",
                    type: "String",
                    optional: "—",
                    default: "50%",
                },
                {
                    parameter: "top",
                    explain: "Dialog CSS 中的 margin-top 值",
                    type: "String",
                    optional: "—",
                    default: "15vh",
                },
                {
                    parameter: "center",
                    explain: "是否对头部和底部采用居中布局",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "open",
                    explain: "Dialog 打开的回调",
                    backParameter: "—",
                },
                {
                    name: "close",
                    explain: "Dialog 关闭的回调",
                    backParameter: "—",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
