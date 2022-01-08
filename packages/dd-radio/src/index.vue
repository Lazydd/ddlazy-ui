<template>
    <div
        class="dd-radio"
        :disabled="disabled"
        @click="disabled ? null : updateRadio()"
    >
        <span
            class="radio_inner"
            :class="[!disabled ? 'radio_inner_hover' : '']"
        >
            <span
                :class="[
                    (group ? groupActive : value) == label
                        ? 'radio_origina'
                        : null,
                ]"
            ></span>
        </span>
        <span class="radio__label"><slot /></span>
    </div>
</template>

<script>
export default {
    name: "ddRadio",
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
        };
    },
    methods: {
        updateRadio() {
            let parent = this.isGroup();
            if (!this.isActive) {
                // parent ? !parent.isActive : !this.isActive;
                this.isActive = !this.isActive;
            }
            parent
                ? parent.$emit("input", this.label)
                : this.$emit("input", this.label);
        },
        isGroup() {
            let parent = this.$parent;
            while (parent && parent.$options.name != "ddRadioGroup") {
                parent = parent.$parent;
            }
            this.group = parent ? true : false;
            return parent;
        },
    },
    created(){
        this.isGroup()
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
        }
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
        span {
            cursor: not-allowed !important;
        }
    }
}
</style>
