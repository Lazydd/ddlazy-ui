<template>
    <div class="dd-checkbox-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ddCheckboxGroup",
    props: {
        value: {
            type: Array,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "big",
        },
    },
};
</script>

<style lang="less" scoped></style>
