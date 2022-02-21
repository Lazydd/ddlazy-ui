<template>
    <div class="dd-radio-group">
        <slot  v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddRadioGroup",
    props: {
        value: {
            type: [String, Number],
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
    methods: {
        change(value) {
            this.$emit("change", value);
        },
    },
};
</script>

<style lang="less" scoped></style>
