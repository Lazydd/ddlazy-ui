<template>
    <div class="page-box">
        <h2 class="_title">Select 选择器</h2>
        <p class="_descript">当选项过多时，使用下拉菜单展示并选择内容。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-select v-model="value" placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            </template>
        </dd-block>
        <dd-block title="有禁用选项" :code="code2">
            <template #source>
                <dd-select v-model="value2" placeholder="请选择">
                    <dd-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                    >
                    </dd-option>
                </dd-select>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code3">
            <template #source>
                <dd-select v-model="value3" disabled placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            </template>
        </dd-block>
        <dd-block title="可清空单选" :code="code4">
            <template #source>
                <dd-select v-model="value4" clearable placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            </template>
        </dd-block>
        <dd-block title="尺寸" :code="code5">
            <template #source>
                <dd-select
                    v-model="value5"
                    placeholder="请选择"
                    style="margin-right: 20px"
                >
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
                <dd-select
                    v-model="value5"
                    placeholder="请选择"
                    style="margin-right: 20px"
                    size="small"
                >
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
                <dd-select v-model="value5" placeholder="请选择" size="mini">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            </template>
        </dd-block>
        <dd-describe title="Select Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Select Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Option Attributes" :data="Attributes3"></dd-describe>
        <dd-describe title="Methods" :data="Attributes4" methods></dd-describe>
        <dd-footer left="InputNumber 计数器" right="Cascader 级联选择器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            code1: `
                <dd-select v-model="value" placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>

                options: [
                    {
                        value: "选项1",
                        label: "黄金糕",
                    },
                    {
                        value: "选项2",
                        label: "双皮奶",
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎",
                    },
                    {
                        value: "选项4",
                        label: "龙须面",
                    },
                    {
                        value: "选项5",
                        label: "北京烤鸭",
                    },
                ],
                value: "选项3",
            `,
            code2: `
                <dd-select v-model="value2" placeholder="请选择">
                    <dd-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                    >
                    </dd-option>
                </dd-select>

                options2: [
                    {
                        value: "选项1",
                        label: "黄金糕",
                    },
                    {
                        value: "选项2",
                        label: "双皮奶",
                        disabled: true,
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎",
                    },
                    {
                        value: "选项4",
                        label: "龙须面",
                    },
                    {
                        value: "选项5",
                        label: "北京烤鸭",
                    },
                ],
            `,
            code3: `
                <dd-select v-model="value2" disabled placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            `,
            code4: `
                <dd-select v-model="value4" clearable placeholder="请选择">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            `,
            code5: `
                <dd-select
                    v-model="value5"
                    placeholder="请选择"
                    style="margin-right: 20px"
                >
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
                <dd-select
                    v-model="value5"
                    placeholder="请选择"
                    style="margin-right: 20px"
                    size="small"
                >
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
                <dd-select v-model="value5" placeholder="请选择" size="mini">
                    <dd-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </dd-option>
                </dd-select>
            `,
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            options2: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                    disabled: true,
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            value: "选项3",
            value2: "",
            value3: "",
            value4: "选项5",
            value5: "",
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "size",
                    explain: "输入框尺寸",
                    type: "	string",
                    optional: "medium/small/mini",
                    default: "—",
                },
                {
                    parameter: "clearable",
                    explain: "是否可以清空选项",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "选中值发生变化时触发",
                    backParameter: "目前的选中值",
                },
                {
                    name: "visible-change",
                    explain: "下拉框出现/隐藏时触发",
                    backParameter: "出现则为 true，隐藏则为 false",
                },
                {
                    name: "clear",
                    explain: "可清空的单选模式下用户点击清空按钮时触发",
                    backParameter: "—",
                },
                {
                    name: "blur",
                    explain: "当 input 失去焦点时触发",
                    backParameter: "(event: Event)",
                },
                {
                    name: "focus",
                    explain: "当 input 获得焦点时触发",
                    backParameter: "(event: Event)",
                },
            ],
            Attributes3: [
                {
                    parameter: "label",
                    explain: "选项的标签，若不设置则默认与 value 相同",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "value",
                    explain: "是选项的值否禁用",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用该选项",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes4: [
                {
                    name: "blur",
                    explain: "使 input 失去焦点，并隐藏下拉框",
                    parameter: "-",
                },
                {
                    name: "focus",
                    explain: "当 input 获得焦点时触发",
                    parameter: "-",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped></style>
