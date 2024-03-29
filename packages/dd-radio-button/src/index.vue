<template>
    <div
        class="dd-radio-button"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateRadio()"
    >
        <span
            :class="[
                'radio__label',
                {
                    radio_origina: (group ? groupActive : value) == label,
                    radio_inner_hover: !isDisabled,
                },
                size,
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "ddRadioButton",
    props: {
        label: {
            type: String,
        },
        value: {
            type: [String, Number],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            group: null,
            isActive: false,
            groupActive: this.$parent.value,
            isDisabled: false,
            size: this.$parent.size,
        };
    },
    methods: {
        updateRadio() {
            let parent = this.isGroup();
            if (!this.isActive) {
                this.isActive = !this.isActive;
            }
            if (parent) {
                parent.$emit("input", this.label);
                if (this.label != parent.value) parent.change(this.label);
            } else {
                this.$emit("input", this.label);
                this.$emit("change", this.label || undefined);
            }
        },
        isGroup() {
            let parent = this.$parent;
            while (parent && parent.$options.name != "ddRadioGroup") {
                parent = parent.$parent;
            }
            this.group = parent ? true : false;
            this.isDisabled = !this.group
                ? this.disabled
                : this.$parent.disabled;
            return parent;
        },
    },
    created() {
        this.isGroup();
    },
    watch: {
        "$parent.value"(val) {
            this.groupActive = val;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-radio-button {
    display: inline-block;
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }

    .radio_origina {
        color: #fff !important;
        background-color: #409eff !important;
        border-color: #409eff !important;
        transition: all 0.3s;
    }
    .radio_inner_hover {
        &:hover {
            color: #409eff;
        }
    }
    .radio__label {
        background: #fff;
        border: 1px solid #dcdfe6;
        font-weight: 500;
        border-left: 0;
        color: #606266;
        position: relative;
        vertical-align: bottom;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
        padding: 12px 20px;
        font-size: 14px;
        transition: all 0.3s;
    }
    &:first-child .radio__label {
        border-left: 1px solid #dcdfe6;
        border-radius: 4px 0 0 4px;
    }
    &:last-child .radio__label {
        border-radius: 0 4px 4px 0;
    }
    &[disabled] {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        span {
            background-image: none !important;
            box-shadow: none !important;
            border-color: #ebeef5 !important;
            cursor: not-allowed !important;
            color: #c0c4cc !important;
        }
        .radio_origina {
            background-color: #f2f6fc !important;
            border-color: #ebeef5 !important;
            color: #c0c4cc !important;
            background-image: none !important;
            span {
                background-color: #f5f7fa !important;
            }
        }
    }

    .medium {
        padding: 10px 20px;
        font-size: 14px;
    }
    .small {
        padding: 9px 15px;
        font-size: 12px;
    }
    .mini {
        padding: 7px 15px;
        font-size: 12px;
    }
}
</style>
