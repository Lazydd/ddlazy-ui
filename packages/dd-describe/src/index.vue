<template>
    <div>
        <h3 class="_title">{{ title }}</h3>
        
    </div>
</template>

<script>
export default {
    name: "ddDescribe",
    props: {
        title: {
            type: String,
            default: "Attributes",
        },
        data: {
            type: Array,
        },
    },
};
</script>

<style lang="less" scoped>

</style>
