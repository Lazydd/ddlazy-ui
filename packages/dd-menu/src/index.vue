<template>
    <div class="dd-menu dd-menu-vertical">
        
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddMenu",
    props: {},
};
</script>

<style lang="less" scoped>
.dd-menu {
    border-right: 1px solid #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
    
}
.dd-menu-vertical {
    width: 240px;
    min-height: 400px;
}
</style>
