<template>
    <div class="dd-carousel-item">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ddCarouselItem",
    props: {},
};
</script>

<style lang="less" scoped>
.dd-carousel-item{
    width: 100%;
}
</style>
