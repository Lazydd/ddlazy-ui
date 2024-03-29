<template>
    <div
        class="dd-radio"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateRadio()"
    >
        <span
            :class="[
                'radio_inner',
                {
                    radio_inner_hover:
                        !isDisabled && (group ? groupActive : value) != label,
                },
            ]"
        >
            <span
                :class="{
                    radio_origina: (group ? groupActive : value) == label,
                }"
            />
        </span>
        <span
            :class="[
                'radio__label',
                {
                    radio_origina_text:
                        !isDisabled &&
                        (group ? groupActive : value) == label &&
                        !disabled,
                },
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "ddRadio",
    props: {
        label: {
            type: [String, Boolean],
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
            this.isDisabled = this.group
                ? this.$parent.disabled
                : this.disabled;
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
.dd-radio {
    display: inline-block;
    color: #606266;
    font-weight: 500;
    line-height: 1;
    margin-right: 30px;
    user-select: none;
    &:last-child {
        margin-right: 0;
    }
    cursor: pointer;
    .radio_inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        vertical-align: bottom;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        .radio_origina {
            display: inline-block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            border: 4px solid #409eff;
            border-radius: 100%;
            transition: all 0.3s;
        }
    }
    .radio_origina_text {
        color: #409eff;
        transition: color 0.3s;
    }
    .radio_inner_hover {
        &:hover {
            border-color: #409eff;
        }
    }
    .radio__label {
        padding-left: 10px;
        font-size: 14px;
    }

    &[disabled] {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        border-color: #c0c4cc !important;
        span {
            cursor: not-allowed !important;
        }
        .radio_inner {
            background-color: #f5f7fa !important;
            .radio_origina {
                border-color: #c0c4cc !important;
            }
        }
    }

    &[size] {
        font-size: 50px;
    }
}
</style>
