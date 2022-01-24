<template>
    <div class="dd-select">
        <input
            ref="input"
            type="text"
            @focus="select_getFocus"
            @blur="select_onBlur"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="select_value"
            readonly="readonly"
            :class="[
                'dd-select_inner',
                'is_focus',
                disabled ? 'is-disabled' : '',
            ]"
        />
        <span
            ref="select_icon"
            :class="['dd-select__suffix', disabled ? 'is-disabled' : '']"
        >
            <svg class="icon" aria-hidden="true" style="color: #c0c4cc">
                <use :xlink:href="`#icon-arrow-down`"></use>
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    name: "ddSelect",
    props: {
        value: {},
        placeholder: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            select_value: this.value,
        };
    },
    methods: {
        select_onBlur(e) {
            this.$emit("blur", e);
        },
        select_getFocus(e) {
            this.select_icon.setAttribute(
                "style",
                "transform:rotate(180deg) center center"
            );
        },
    },
    computed: {
        select_icon() {
            return this.$refs.select_icon;
        },
        select_input() {
            return this.$refs.input;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-select {
    position: relative;
    display: inline-block;
    .dd-select_inner {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        width: 180px;
        height: 40px;
        outline: none;
        padding: 0 15px;
        padding-right: 30px;
        cursor: pointer;
        transition: all 0.3s;
        &:focus {
            border-color: #409eff !important;
        }
        &:hover {
            border-color: #c0c4cc;
        }
    }
    .is_focus {
    }
    .dd-select__suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        transition: all 0.3s;
        cursor: pointer;
        svg {
            color: #c0c4cc;
            font-size: 20px;
        }
    }
    .is-disabled {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        background-color: #f5f7fa;
        border-color: #e4e7ed !important;
    }
}
</style>
