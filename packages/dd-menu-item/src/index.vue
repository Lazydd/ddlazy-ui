<template>
    <div class="dd-menu-item">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddMenuItem",
    props: {},
};
</script>

<style lang="less" scoped>
.dd-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 200px;
    font-size: 14px;
    color: #303133;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    box-sizing: border-box;
    white-space: nowrap;
    &:hover {
        outline: none;
        background-color: #ecf5ff;
    }
}
</style>
