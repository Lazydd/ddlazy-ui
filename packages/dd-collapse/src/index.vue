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
    data() {
        return {
            activeName: this.value,
        };
    },
    methods: {
        changeActive_name() {
            this.$emit("input", this.activeName);
            this.$emit("change", this.activeName);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-collapse {
}
</style>
