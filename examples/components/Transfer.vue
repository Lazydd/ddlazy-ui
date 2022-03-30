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
                        disabled: 'dis',
                    }"
                    :data="data2"
                ></dd-transfer>
            </template>
        </dd-block>
        <dd-block title="自定义" :code="code3">
            <template #source>
                <dd-transfer
                    v-model="value"
                    :data="data"
                    :button-texts="['到左边', '到右边']"
                    :titles="['Source', 'Target']"
                ></dd-transfer>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="TimePicker 时间选择器" right="Form 表单"></dd-footer>
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
        const generateData1 = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    value: i,
                    desc: `备选项 ${i}`,
                    dis: i % 4 === 0,
                });
            }
            return data;
        };
        return {
            value: [1, 4],
            value2: [1, 4],
            data: generateData(),
            data2: generateData1(),
            code1: `
                <dd-transfer v-model="value" :data="data"></dd-transfer>
            `,
            code2: `
                <dd-transfer
                    v-model="value2"
                    :props="{
                        key: 'value',
                        label: 'desc',
                        disabled: 'dis',
                    }"
                    :data="data2"
                ></dd-transfer>
            `,
            code3: `
                <dd-transfer
                    v-model="value"
                    :data="data"
                    :button-texts="['到左边', '到右边']"
                    :titles="['Source', 'Target']"
                ></dd-transfer>
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "data",
                    explain: "Transfer 的数据源",
                    type: "array[{ key, label, disabled }]",
                    optional: "—",
                    default: "[ ]",
                },
                {
                    parameter: "titles",
                    explain: "自定义列表标题",
                    type: "array",
                    optional: "—",
                    default: "['列表 1', '列表 2']",
                },
                {
                    parameter: "button-texts",
                    explain: "自定义按钮文案",
                    type: "array",
                    optional: "—",
                    default: "[ ]",
                },
                {
                    parameter: "props",
                    explain: "数据源的字段别名",
                    type: "object{key, label, disabled}",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "inactive-color",
                    explain: "switch 关闭时的背景色",
                    type: "string",
                    optional: "—",
                    default: "#C0CCDA",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "右侧列表元素变化时触发",
                    backParameter: "当前值",
                },
                {
                    name: "left-check-change",
                    explain: "左侧列表元素被用户选中 / 取消选中时触发",
                    backParameter: "当前被选中的元素的 key 数组",
                },
                {
                    name: "right-check-change",
                    explain: "右侧列表元素被用户选中 / 取消选中时触发",
                    backParameter: "当前被选中的元素的 key 数组",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped></style>
