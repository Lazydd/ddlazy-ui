<template>
    <div class="page-box">
        <h2 class="_title">DatePicker 日期选择器</h2>
        <p class="_descript">用于选择或输入日期</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-date-picker v-model="value1"></dd-date-picker>
            </template>
        </dd-block>
        <dd-block title="可清空单选" :code="code2">
            <template #source>
                <dd-date-picker v-model="value2" clearable></dd-date-picker>
            </template>
        </dd-block>
        <dd-block title="其他日期单位" :code="code3">
            <template #source>
                <div class="container">
                    <div class="block">
                        <span class="demonstration">年</span>
                        <dd-date-picker
                            v-model="value3"
                            clearable
                            type="year"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">月</span>
                        <dd-date-picker
                            v-model="value4"
                            clearable
                            type="month"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">日</span>
                        <dd-date-picker
                            v-model="value5"
                            clearable
                            type="date"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">多个日期</span>
                        <dd-date-picker
                            v-model="value6"
                            clearable
                            type="dates"
                        ></dd-date-picker>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code4">
            <template #source>
                <dd-date-picker v-model="value7" disabled></dd-date-picker>
            </template>
        </dd-block>
        <dd-block title="尺寸" :code="code5">
            <template #source>
                <dd-date-picker v-model="value8" size="medium" style="margin-right: 20px"></dd-date-picker>
                <dd-date-picker v-model="value8" size="small" type="month" style="margin-right: 20px"></dd-date-picker>
                <dd-date-picker v-model="value8" size="mini" type="year"></dd-date-picker>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer
            left="TimePicker 时间选择器"
            right="Transfer 穿梭框"
        ></dd-footer>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    data() {
        return {
            value1: new Date(),
            value2: "",
            value3: new Date(),
            value4: "2020-12",
            value5: "",
            value6: "",
            value7: new Date(),
            value8: new Date(),
            code1: `
                <dd-date-picker v-model="value1"></dd-date-picker>

                value1: new Date(),
            `,
            code2: `
                <dd-date-picker v-model="value2" clearable></dd-date-picker>

                value2: "",
            `,
            code3: `
                <div class="container">
                    <div class="block">
                        <span class="demonstration">年</span>
                        <dd-date-picker
                            v-model="value3"
                            clearable
                            type="year"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">月</span>
                        <dd-date-picker
                            v-model="value4"
                            clearable
                            type="month"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">日</span>
                        <dd-date-picker
                            v-model="value5"
                            clearable
                            type="date"
                        ></dd-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">多个日期</span>
                        <dd-date-picker
                            v-model="value6"
                            clearable
                            type="dates"
                        ></dd-date-picker>
                    </div>
                </div>

                value3: new Date(),
                value4: "2020-12",
                value5: "",
                value6: ""
            `,
            code4: `
                <dd-date-picker v-model="value7" disabled></dd-date-picker>

                value7: new Date(),
            `,
            code5: `
                <dd-date-picker v-model="value8" size="medium" style="margin-right: 20px"></dd-date-picker>
                <dd-date-picker v-model="value8" size="small" style="margin-right: 20px"></dd-date-picker>
                <dd-date-picker v-model="value8" size="mini"></dd-date-picker>

                value8: new Date(),
            `,
            Attributes: [
                {
                    parameter: "model",
                    explain: "绑定值",
                    type: "date(DatePicker) / array(DateRangePicker)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用状态",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "clearable",
                    explain: "是否显示清除按钮",
                    type: "boolean",
                    optional: "true/false",
                    default: "false",
                },
                {
                    parameter: "size",
                    explain: "输入框尺寸",
                    type: "string",
                    optional: "large, small, mini",
                    default: "—",
                },
                {
                    parameter: "type",
                    explain: "显示类型",
                    type: "string",
                    optional: "year/month/date/dates",
                    default: "date",
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
        };
    },
};
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
        text-align: center;
    }
}
@media screen and(max-width:1900px) {
    .block {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-child(3),
        &:nth-child(4) {
            margin-top: 20px;
        }
    }
}
</style>
