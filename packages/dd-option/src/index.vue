<template>
    <div class="dd-option"></div>
</template>

<script>
export default {
    name: "ddOption",
    props: {
        value: {},
        label: {},
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-option {
}
</style>
