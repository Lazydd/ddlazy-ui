<template>
    <tbody>
        <template>
            <tr
                v-for="(row, rowIndex) in data"
                :class="[
                    'dd-table_cell',
                    stripe && rowIndex % 2 !== 0 ? 'striped' : '',
                ]"
                :key="rowIndex"
            >
                <table-td
                    v-for="(column, index) in dd_td"
                    :key="index"
                    :row="row"
                    :column="column"
                    :index="rowIndex"
                >
                </table-td>
            </tr>
        </template>
    </tbody>
</template>

<script>
import TableTd from "./table-td.vue";
export default {
    props: {
        data: {
            type: Array,
        },
        stripe: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
        },
    },
    computed: {
        dd_td() {
            return this.$parent.column;
        },
    },
    components: {
        TableTd,
    },
};
</script>

<style scoped lang="less">
tbody {
    .dd-table_cell {
        &:hover {
            transition: background-color 0.25s ease;
            background-color: #f5f7fa !important;
        }
    }
    .striped {
        background-color: #fafafa;
    }
}
</style>
