<template>
    <div class="dd-collapse">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ddCollapse",
    props: {
        value: {
            type: [Array, String],
        },
        accordion: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-collapse {
}
</style>
