<template>
    <div class="dd-table-column">
        <thead>
            <tr>
                <td>
                    {{ label }}
                </td>
            </tr>
        </thead>
    </div>
</template>

<script>
export default {
    name: "ddTableColumn",
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
    },
};
</script>

<style lang="less" scoped></style>
