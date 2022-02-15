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
    </div>
</template>

<script>
export default {
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
        };
    },
};
</script>

<style lang="less" scoped></style>
