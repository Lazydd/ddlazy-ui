<template>
    <div
        :class="[
            'dd-checkbox-button',
            { is_checked: !isDisabled && (group ? isActive : value) },
        ]"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateCheckbox()"
    >
        <span
            :class="[
                'checkbox_inner',
                { is_checked: group ? isActive : value },
                { checkbox_inner_hover: !isDisabled },
                size,
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
let newArr = [];
export default {
    name: "ddCheckboxButton",
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
    },
    data() {
        return {
            group: null,
            isActive: false,
            groupActive: this.$parent.value || [],
            isDisabled: false,
            size: this.$parent.size,
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
                    for (let i = 0; i < arr.length; i++) {
                        if (arr.indexOf(str) == -1) {
                            newArr = [...arr, str];
                            break;
                        } else {
                            newArr = arr.filter((item) => item !== str);
                            break;
                        }
                    }
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
.dd-checkbox-button {
    display: inline-block;
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    user-select: none;
    &:last-child {
        margin-right: 0;
    }

    .checkbox_inner {
        border: 1px solid #dcdfe6;
        padding: 12px 20px;
        border-left: 0;
        background-color: #fff;
        position: relative;
        vertical-align: bottom;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .is_checked {
        color: #fff !important;
        border-color: #409eff !important;
        background-color: #409eff !important;
        transition: all 0.3s;
        border-left-color: #fff !important;
        border-right-color: #fff !important;
    }
    .checkbox_inner_hover {
        &:hover {
            color: #409eff;
        }
    }
    &:first-child .checkbox_inner {
        border-left: 1px solid #dcdfe6;
        border-radius: 4px 0 0 4px;
    }
    &:first-child .is_checked {
        border-left-color: #409eff !important;
    }
    &:last-child .is_checked {
        border-right-color: #409eff !important;
    }
    &:last-child .checkbox_inner {
        border-radius: 0 4px 4px 0;
    }
    &[disabled] {
        cursor: not-allowed !important;
        color: #c0c4cc !important;

        span {
            cursor: not-allowed !important;
            border-color: #ebeef5 !important;
        }
        .is_checked {
            background-color: #f5f7fa !important;
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
