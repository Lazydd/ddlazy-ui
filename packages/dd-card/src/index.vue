<template>
    <div
        :class="[
            'dd-card',
            { 'is-always-shadow': shadow === 'always' },
            { 'is-hover-shadow': shadow === 'hover' },
            { 'is-never-shadow': shadow === 'never' },
        ]"
    >
        <div class="card_header" v-if="$slots.header">
            <slot name="header" />
        </div>
        <div class="card_body" v-if="$slots.default" :style="bodyStyle">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "ddCard",
    props: {
        shadow: {
            type: String,
            default: "always",
        },
        bodyStyle: {
            type: Object,
            default: () => ({ padding: "20px" }),
        },
    },
};
</script>

<style lang="less" scoped>
.dd-card {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    .card_header {
        padding: 18px 20px;
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
    }
    .card_body {
        padding: 20px;
    }
}
.is-hover-shadow {
    &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
}
.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.is-never-shadow {
    box-shadow: none;
}
</style>
