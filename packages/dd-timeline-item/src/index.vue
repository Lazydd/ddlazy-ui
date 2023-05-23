<template>
    <div class="dd-timeline-item" />
</template>

<script>
export default {
    name: "ddTimelineItem",
    props: {
        timestamp: {
            type: String,
        },
        icon: {
            type: String,
        },
        type: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
            default: "normal",
        },
        placement: {
            type: String,
            default: "bottom",
        },
    },
};
</script>

<style lang="less" scoped>
.dd-timeline-item {
}
</style>
