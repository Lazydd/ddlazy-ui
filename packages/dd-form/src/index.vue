<template>
    <div class="dd-form">
        <form>
            <slot v-if="$slots.default" />
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
        labelWidth: {
            type: String,
        },
        rules: {
            type: Object,
        },
    },
    methods: {
        validate(callback) {
            console.log(this.$slots.default);
            if (!this.model) {
                return;
            }
            let promise = 123;
            return promise;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-form {
}
</style>
