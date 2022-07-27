<template>
    <div class="dd-print">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddPrint",
    props: {},
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.dd-print {
    width: 0;
    height: 0;
    overflow: hidden;
}
</style>
