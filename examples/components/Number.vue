<template>
    <div class="page-box">
        <h2 class="_title">Number 数字滚动</h2>
        <p class="_descript">数字滚动</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-number class="number" v-model="value" :time="1000" />
            </template>
        </dd-block>
        <dd-block title="基础用法" :code="code2">
            <template #source>
                <dd-button @click="pause = false">开始</dd-button>
                <dd-button @click="pause = true">暂停</dd-button>
                <dd-button @click="clear">清空</dd-button>
                <dd-number
                    class="number"
                    v-model="value2"
                    :time="1000"
                    :mounte="false"
                    :pause="pause"
                />
            </template>
        </dd-block>
        <dd-describe title="Options" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="InputNumber 计数器" right="Select 选择器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Number",
    data() {
        return {
            code1: `
                <dd-number class="number" v-model="value" :time="1000" />

                value: 500,
            `,
            code2:`
                <dd-button @click="pause = false">开始</dd-button>
                <dd-button @click="pause = true">暂停</dd-button>
                <dd-button @click="clear">清空</dd-button>
                <dd-number
                    class="number"
                    v-model="value2"
                    :time="1000"
                    :mounte="false"
                    :pause="pause"
                />

                pause: true,
                value2: 500,

                clear() {
                    this.pause = true;
                    this.value2 = 0;
                },
            `,
            Attributes: [
                {
                    parameter: "value",
                    explain: "数字的值",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "time",
                    explain: "数字滚动时间（毫秒）",
                    type: "number",
                    optional: "—",
                    default: "1000",
                },
                {
                    parameter: "mounte",
                    explain: "是否页面挂在完成后执行",
                    type: "boolean",
                    optional: "true/false",
                    default: "true",
                },
                {
                    parameter: "pause",
                    explain: "是否暂停",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "pause",
                    explain: "暂停状态改变触发",
                    backParameter: "(type:当前状态, val:当前值)",
                },
            ],
            pause: true,
            value: 500,
            value2: 500,
        };
    },
    methods: {
        clear() {
            this.pause = true;
            this.value2 = 0;
        },
    },
};
</script>

<style lang="less" scoped>
.number {
    font-size: 50px;
}
</style>
