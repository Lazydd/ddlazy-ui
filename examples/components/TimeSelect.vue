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
        };
    },
    created() {
        console.log(typeof this.value1);
        console.log( this.value1);
    },
};
</script>

<style lang="less" scoped></style>
