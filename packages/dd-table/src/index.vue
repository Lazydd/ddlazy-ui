<template>
    <div class="dd-table">
        <table>
            <thead>
                <slot></slot>
            </thead>
            <tbody>
                <tr>
                    <th v-for="(thead, i) in data" :key="i">{{ thead }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ddTable",
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
};
</script>

<style lang="less" scoped>
.thead {
    display: flex;
}
</style>
