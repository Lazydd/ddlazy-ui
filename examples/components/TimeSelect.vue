<template>
    <div class="page-box">
        <h2 class="_title">TimePicker 时间选择器</h2>
        <p class="_descript">用于选择或输入日期</p>
        <dd-block title="固定时间点" :code="code1">
            <template #source>
                <dd-time-select
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    placeholder="选择时间"
                >
                </dd-time-select>
            </template>
        </dd-block>
        <dd-block title="固定时间范围" :code="code2">
            <template #source>
                <dd-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    style="margin-right: 15px"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                >
                </dd-time-select>
                <dd-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                        minTime: startTime,
                    }"
                >
                </dd-time-select>
            </template>
        </dd-block>
        <dd-block title="固定时间范围" :code="code3">
            <template #source>
                <dd-time-picker
                    placeholder="任意时间点"
                    v-model="value1"
                    style="margin-right: 15px"
                >
                </dd-time-picker>
            </template>
        </dd-block>
        <dd-block title="不同尺寸" :code="code5">
            <template #source>
                <dd-time-select
                    size="medium"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    style="margin-right: 15px"
                    placeholder="选择时间"
                >
                </dd-time-select>
                <dd-time-select
                    size="small"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    style="margin-right: 15px"
                    placeholder="选择时间"
                >
                </dd-time-select>
                <dd-time-select
                    size="mini"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    placeholder="选择时间"
                >
                </dd-time-select>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Time Select Options" :data="Attributes2"></dd-describe>
        <dd-describe title="Events" :data="Attributes3" events></dd-describe>
        <dd-footer left="Slider 滑块" right="Transfer 穿梭框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "TimeSelect",
    data() {
        return {
            value: "08:45:00",
            value1: new Date(2016, 9, 10, 18, 40),
            startTime: "",
            endTime: "",
            code1: `
                <dd-time-select
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    placeholder="选择时间"
                >
                </dd-time-select>
            `,
            code2: `
                <dd-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    style="margin-right: 15px"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                >
                </dd-time-select>
                <dd-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                        minTime: startTime,
                    }"
                >
                </dd-time-select>
            `,
            code3: `
                <dd-time-picker
                    placeholder="任意时间点"
                    v-model="value1"
                    style="margin-right: 15px"
                >
                </dd-time-picker>
            `,
            code5: `
                <dd-time-select
                    size="medium"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    style="margin-right: 15px"
                    placeholder="选择时间"
                >
                </dd-time-select>
                <dd-time-select
                    size="small"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    style="margin-right: 15px"
                    placeholder="选择时间"
                >
                </dd-time-select>
                <dd-time-select
                    size="mini"
                    v-model="value"
                    :picker-options="{
                        start: '08:30:00',
                        step: '00:15:00',
                        end: '18:30:00',
                    }"
                    placeholder="选择时间"
                >
                </dd-time-select>
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "date(TimePicker) / string(TimeSelect)",
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
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
                {
                    parameter: "picker-options",
                    explain: "当前时间日期选择器特有的选项参考下表",
                    type: "object",
                    optional: "—",
                    default: "{}",
                },
            ],
            Attributes2: [
                {
                    parameter: "start",
                    explain: "开始时间",
                    type: "string",
                    optional: "—",
                    default: "09:00",
                },
                {
                    parameter: "end",
                    explain: "结束时间",
                    type: "string",
                    optional: "—",
                    default: "18:00",
                },
                {
                    parameter: "step",
                    explain: "间隔时间",
                    type: "string",
                    optional: "—",
                    default: "00:30",
                },
                {
                    parameter: "minTime",
                    explain: "最小时间，小于该时间的时间段将被禁用",
                    type: "string",
                    optional: "—",
                    default: "00:00",
                },
                // {
                //     parameter: "maxTime",
                //     explain: "	最大时间，大于该时间的时间段将被禁用",
                //     type: "string",
                //     optional: "—",
                //     default: "—",
                // },
            ],
            Attributes3: [
                {
                    name: "change",
                    explain: "用户确认选定的值时触发",
                    backParameter: "组件绑定值",
                },
                {
                    name: "blur",
                    explain: "当 input 失去焦点时触发",
                    backParameter: "组件实例",
                },
                {
                    name: "focus",
                    explain: "当 input 获得焦点时触发",
                    backParameter: "组件实例",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped></style>
