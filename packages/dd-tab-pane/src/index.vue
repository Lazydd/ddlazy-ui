<template>
    <div class="dd-tab-pane">
        <slot  v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddTabPane",
    props: {
        label: {
            type: String,
        },
        name: {
            type: String,
        },
        icon: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tab-pane {
}
</style>
