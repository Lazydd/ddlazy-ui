<template>
    <div class="dd-radio-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ddRadioGroup",
    props: {
        value: {
            type: [String, Number],
        },
    },
};
</script>

<style lang="less" scoped></style>
