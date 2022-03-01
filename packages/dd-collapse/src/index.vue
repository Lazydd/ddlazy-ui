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
            type: Array,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-collapse {
}
</style>
