<template>
    <div
        :class="[
            'dd-checkbox',
            !isDisabled && (group ? isActive : value) ? 'is_checked' : '',
        ]"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateCheckbox()"
    >
        <span
            :class="[
                'checkbox_inner',
                !isDisabled && (group ? isActive : value) ? 'is_checked' : '',
                /*   !isDisabled && (group ? groupActive : value) != label */
                !disabled ? 'checkbox_inner_hover' : '',
                indeterminate ? 'is_checked' : '',
            ]"
        >
            <span
                :class="[
                    (group ? isActive : value) ? 'checkbox_origina' : null,
                    indeterminate ? 'checkbox_origina' : null,
                    'checkbox_input',
                ]"
            >
                <dd-icon v-if="!indeterminate" icon="icon-seleted" />
                <dd-icon v-if="indeterminate" icon="icon-sami-select" />
            </span>
        </span>
        <span class="checkbox__label">
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
let newArr = [];
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddCheckbox",
    mixins: [mixin],
    props: {
        label: {
            type: String,
        },
        value: {
            type: [String, Number, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            group: null,
            isActive: false,
            groupActive: this.$parent.value || [],
            isDisabled: false,
        };
    },
    methods: {
        updateCheckbox() {
            let parent = this.isGroup();
            if (!this.isActive) {
                this.isActive = !this.isActive;
            }
            if (parent) {
                let arr = [...parent.value];
                let str = this.label ? this.label : this.$slots.default[0].text;
                if (arr.length) {
                    newArr = this.multipleChoice(arr, str);
                } else {
                    newArr = [...arr, str];
                }
                parent.$emit("input", newArr);
                parent.change(newArr);
            } else {
                this.$emit("input", !this.value);
                this.$emit("change", !this.value);
            }
        },
        isGroup() {
            let parent = this.$parent;
            while (parent && parent.$options.name != "ddCheckboxGroup") {
                parent = parent.$parent;
            }
            this.group = parent ? true : false;
            this.isDisabled = this.group
                ? this.$parent.disabled
                : this.disabled;
            return parent;
        },
        isGroupActive() {
            if (this.groupActive.length) {
                for (let i = 0; i < this.groupActive.length; i++) {
                    if (
                        this.groupActive[i] ===
                        (this.label ? this.label : this.$slots.default[0].text)
                    ) {
                        this.isActive = true;
                        break;
                    } else {
                        this.isActive = false;
                    }
                }
            } else {
                this.isActive = false;
            }
        },
    },
    created() {
        this.isGroup();
        this.isGroupActive();
    },
    watch: {
        "$parent.value"(val) {
            this.groupActive = val;
            this.isGroupActive();
        },
    },
};
</script>

<style lang="less" scoped>
.dd-checkbox {
    display: inline-block;
    color: #606266;
    font-weight: 500;
    line-height: 1;
    margin-right: 30px;
    cursor: pointer;
    user-select: none;
    &:last-child {
        margin-right: 0;
    }
    .is_checked {
        color: #409eff !important;
        border-color: #409eff !important;
        background-color: #409eff !important;
    }
    .checkbox_inner {
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        width: 14px;
        height: 14px;
        color: #fff;
        background-color: #fff;
        position: relative;
        vertical-align: bottom;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        .checkbox_origina {
            display: inline-block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            color: #fff;
            background-color: #409eff;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
                background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
        }
        transition: all 0.3s;
    }
    .checkbox_inner_hover {
        &:hover {
            border-color: #409eff;
        }
    }
    .checkbox__label {
        padding-left: 10px;
        font-size: 14px;
    }

    &[disabled] {
        cursor: not-allowed !important;
        color: #c0c4cc !important;

        span {
            cursor: not-allowed !important;
        }
        .checkbox_inner {
            border-color: #c0c4cc !important;
            background-color: #f5f7fa !important;
            .checkbox_origina {
                background-color: #f5f7fa !important;
                color: #c0c4cc !important;
            }
        }
    }

    &[size] {
        font-size: 50px;
    }
}
.is_checked {
    color: #409eff;
}
</style>
