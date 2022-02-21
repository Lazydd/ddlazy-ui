<template>
    <div class="dd-breadcrumb" aria-label="Breadcrumb">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddBreadcrumb",
    props: {
        separator: {
            type: String,
            default: "/",
        },
        separatorClass: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-breadcrumb {
}
</style>
