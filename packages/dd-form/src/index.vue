<template>
    <div class="dd-form">
        <form>
            <slot />
        </form>
    </div>
</template>

<script>
export default {
    name: "ddForm",
    props: {
        model: {
            type: Object,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-form {
}
</style>
