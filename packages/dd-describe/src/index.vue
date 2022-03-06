<template>
    <div class="page-component">
        <h3 class="_title">{{ title }}</h3>
        <div class="content>">
            <dd-table :data="data">
                <dd-table-column
                    prop="parameter"
                    label="参数"
                ></dd-table-column>
                <dd-table-column prop="explain" label="说明"></dd-table-column>
                <dd-table-column prop="type" label="类型"></dd-table-column>
                <dd-table-column
                    prop="optional"
                    label="可选值"
                ></dd-table-column>
                <dd-table-column
                    prop="default"
                    label="默认值"
                ></dd-table-column>
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
