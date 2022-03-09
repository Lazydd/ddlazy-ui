<template>
    <div class="dd-form">
        <div>
            <slot v-if="$slots.default" />
        </div>
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
            this.$children.map((item) => {
                item.valid();
            });
            console.log(this.$slots.default);
            // if (!this.model) {
            //     return;
            // }
            // let promise = 123;
            // return promise;
        },
        resetFields() {
            this.$children.map((item) => {
                item.resetFields();
            });
        },
    },
};
</script>

<style lang="less" scoped>
.dd-form {
}
</style>
