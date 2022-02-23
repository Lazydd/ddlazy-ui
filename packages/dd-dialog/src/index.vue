<template>
    <div class="dd-dialog" v-show="visible">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddDialog",
    props: {
        visible: {
            type: Boolean,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-dialog {
}
</style>
