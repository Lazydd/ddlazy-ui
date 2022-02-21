<template>
    <div class="dd-breadcrumb">
        <slot kk="123" />
    </div>
</template>

<script>
export default {
    name: "ddBreadcrumb",
    props: {
        separator: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-breadcrumb {
}
</style>
