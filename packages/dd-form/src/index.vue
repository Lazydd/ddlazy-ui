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
        };
    },
    methods: {
        validate(callback) {
            this.$children.map((item) => {
                const i = item.validate();
                this.arr.push(i);
            });
            Promise.all(this.arr)
                .then((res) => {
                    console.log(1111);
                })
                .catch((err) => {
                    console.log(2222);
                });
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
