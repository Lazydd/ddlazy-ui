<template>
    <div class="dd-icon" @click="$emit('click')">
        <svg class="icon" aria-hidden="true" :style="{ fill: color }">
            <use :xlink:href="`#${icon}`" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "ddIcon",
    props: {
        icon: {
            type: String,
            require: true,
        },
        color: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-icon {
    display: inline-block;
    // font-size: 1.5em;
}
</style>
