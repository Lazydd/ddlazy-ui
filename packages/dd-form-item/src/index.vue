<template>
    <div class="dd-form-item">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ddFormItem",
    props: {
        label: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-form-item {
    margin-bottom: 22px;
}
</style>
