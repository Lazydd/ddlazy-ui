<template>
    <div class="page-component">
        <h3 class="_title">{{ title }}</h3>
        <div class="content>">
            <dd-table :data="data" v-if="!events && !methods && !slots">
                <dd-table-column prop="parameter" width="150" label="参数" />
                <dd-table-column prop="explain" label="说明" />
                <dd-table-column prop="type" label="类型" minWidth="200" />
                <dd-table-column
                    prop="optional"
                    label="可选值"
                    minWidth="100"
                />
                <dd-table-column prop="default" label="默认值" minWidth="100" />
            </dd-table>
            <dd-table :data="data" v-if="events">
                <dd-table-column prop="name" label="事件名称" />
                <dd-table-column prop="explain" label="说明" />
                <dd-table-column prop="backParameter" label="回调参数" />
            </dd-table>
            <dd-table :data="data" v-if="methods">
                <dd-table-column prop="name" label="方法名" />
                <dd-table-column prop="explain" label="说明" />
                <dd-table-column prop="parameter" label="参数" />
            </dd-table>
            <dd-table :data="data" v-if="slots">
                <dd-table-column prop="name" label="名称" />
                <dd-table-column prop="explain" label="说明" />
            </dd-table>
        </div>
    </div>
</template>

<script>
import ddTable from "../../dd-table";
import ddTableColumn from "../../dd-table-column";
export default {
    name: "ddDescribe",
    props: {
        title: {
            type: String,
            default: "Attributes",
        },
        data: {
            type: Array,
        },
        events: {
            type: Boolean,
            default: false,
        },
        methods: {
            type: Boolean,
            default: false,
        },
        slots: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        ddTable,
        ddTableColumn,
    },
};
</script>

<style lang="less" scoped>
.page-component {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
}
</style>
