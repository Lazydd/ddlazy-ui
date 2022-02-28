<template>
    <div class="dd-form-item">
        <div
            :class="['dd-form_label', prop ? 'dd-form_prop' : '']"
            :style="`width:${$parent.labelWidth ? $parent.labelWidth : ''}`"
        >
            {{ label }}
        </div>
        <div
            class="dd-form_content"
            :style="`margin-left:${
                $parent.labelWidth ? $parent.labelWidth : ''
            }`"
        >
            <slot v-if="$slots.default" />
            <div v-if="prop && isValidate" class="dd-form-item__error">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddFormItem",
    props: {
        label: {
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
    },
    computed: {
        message() {
            let message = this.$parent.rules[this.prop].map((item) => {
                return item.message;
            });
            return message.join(",");
        },
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
