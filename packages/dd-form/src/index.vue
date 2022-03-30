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
    data() {
        return {
            arr: [],
            a: 0,
        };
    },
    methods: {
        validate(callback) {
            this.arr = [];
            if (this.rules) {
                this.$children.map((item) => {
                    if (item.prop) {
                        const i = item.validate();
                        this.arr.push(i);
                    }
                });
                Promise.all(this.arr)
                    .then((res) => {
                        return callback(true);
                    })
                    .catch((err) => {
                        return callback(false);
                    });
            }
        },
        resetFields() {
            this.$children.map((item) => {
                item.resetFields();
            });
            // console.log(this.$options.data().model);
            // this.model = this.$options.data().model;
        },
        clearValidate() {
            this.$children.map((item) => {
                item.resetFields();
            });
        },
        ischange() {
            this.$emit("validate");
        },
    },
};
</script>

<style lang="less" scoped></style>
