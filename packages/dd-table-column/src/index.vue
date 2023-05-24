<template></template>
<script>
export default {
    name: "ddTableColumn",
    componentName: "ddTableColumn",
    props: {
        prop: {
            type: String,
        },
        label: {
            type: String,
        },
        width: {
            type: [Number, String],
        },
        minWidth: {
            type: [Number, String],
        },
        type: {
            type: String,
        },
        headerAlign: {
            type: String,
            default: "left",
            validator: (value) => {
                return (
                    value === "left" || value === "center" || value === "right"
                );
            },
        },
        align: {
            type: String,
            default: "left",
            validator: (value) => {
                return (
                    value === "left" || value === "center" || value === "right"
                );
            },
        },
        fixed: {
            type: String,
        },
    },
    data() {
        return {
            renderCell: {},
        };
    },
    created() {
        this.renderCell = (h, { row, column, index, align }) => {
            if (this.$scopedSlots.default) {
                const data = { row, $index: index + 1 };
                return this.$scopedSlots.default(data);
            }
            if (column.type === "selection") {
                return h("input", {
                    attrs: {
                        type: "checkbox",
                    },
                    on: {
                        click(e) {
                            console.log(e);
                        },
                    },
                });
            }
            if (column.type === "index") {
                return index + 1;
            }
            return row[column.prop];
        };
    },
};
</script>
