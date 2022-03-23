<template>
    <div class="dd-form-item">
        <div
            :class="['dd-form_label', prop ? 'dd-form_prop' : '']"
            :style="`width:${
                labelWidth
                    ? labelWidth
                    : $parent.labelWidth
                    ? $parent.labelWidth
                    : ''
            }`"
        >
            {{ label }}
        </div>
        <div
            class="dd-form_content"
            :style="`margin-left:${
                labelWidth
                    ? labelWidth
                    : $parent.labelWidth
                    ? $parent.labelWidth
                    : ''
            }`"
        >
            <slot v-if="$slots.default" />
            <dd-transition name="dd-zoom-top">
                <div v-if="prop && isValidate" class="dd-form-item__error">
                    {{ message }}
                </div>
            </dd-transition>
        </div>
    </div>
</template>

<script>
import ddTransition from "../../dd-transition";
export default {
    name: "ddFormItem",
    props: {
        label: {
            type: String,
        },
        labelWidth: {
            type: String,
        },
        prop: {
            type: String,
        },
    },
    data() {
        return {
            isValidate: false,
        };
    },
    methods: {
        valid() {
            this.isValidate = true;
        },
        resetFields() {
            this.isValidate = false;
        },
        validate() {
            console.log(this.$slots.default);
            return new Promise((resolve, reject) => {
                if (
                    (!this.$slots.default[0].data.model.value ||
                        !this.$slots.default[0].data.model.value.length) &&
                    this.prop
                ) {
                    this.isValidate = true;
                    reject();
                } else {
                    this.isValidate = false;
                    resolve();
                }
            });
        },
    },
    computed: {
        message() {
            let message = this.$parent.rules[this.prop].map((item) => {
                return item.message;
            });
            return message.join(",");
        },
    },
    components: {
        ddTransition,
    },
};
</script>

<style lang="less" scoped>
.dd-form-item {
    margin-bottom: 22px;
    .dd-form_label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .dd-form_prop {
        &::before {
            content: "*";
            color: #f56c6c;
            margin-right: 4px;
        }
    }
    .dd-form_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }
    .dd-form-item__error {
        color: #f56c6c;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
    }
}
</style>
