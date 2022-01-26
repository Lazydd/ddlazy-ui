<template>
    <div class="dd-select">
        <input
            ref="input"
            type="text"
            @blur="select_onBlur"
            @click="select_Click"
            @focus="select_getFocus"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="select_label"
            readonly="readonly"
            :class="[
                'dd-select_inner',
                'is_focus',
                disabled ? 'is-disabled' : '',
            ]"
        />
        <span
            @click="select_Click"
            ref="select_icon"
            :class="['dd-select__suffix', disabled ? 'is-disabled' : '']"
        >
            <svg
                :class="[
                    'icon',
                    isActive ? 'select_active' : 'select_NOactive',
                ]"
                aria-hidden="true"
                style="color: #c0c4cc"
            >
                <use :xlink:href="`#icon-arrow-down`"></use>
            </svg>
        </span>
        <div
            :class="[
                'el-select-dropdown',
                isShow_dropdown ? 'show_dropdown' : '',
            ]"
        >
            <div class="el-select-dropdown-s"></div>
            <ul>
                <slot />
            </ul>
        </div>
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
            select_label: null,
            isActive: false,
            isShow_dropdown: false,
        };
    },
    methods: {
        select_onBlur(e) {
            this.isActive = false;
            this.$emit("blur", e);
        },
        select_Click(e) {
            this.isActive = !this.isActive;
        },
        select_getFocus(e) {
            this.isShow_dropdown = true;
        },
        select_change(item) {
            this.$emit("input", item);
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
    watch: {
        value(val) {
            this.select_value = val;
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
        width: 240px;
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
    .select_active {
        transform: rotate(180deg);
        transition: all 0.3s;
    }
    .select_NOactive {
        transform: rotate(360deg);
        transition: all 0.3s;
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
    .el-select-dropdown {
        min-width: 240px;
        position: absolute;
        transform-origin: center top;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        margin-top: 10px;
        display: none;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        box-sizing: border-box;
        z-index: 1000;
        transition: opacity 0.3s;
        ul {
            padding: 6px 0;
        }

        // margin: 5px 0;
    }
    .el-select-dropdown-s {
        position: absolute;
        width: 0;
        height: 0;
        top: -6px;
        left: 20px;
        border-width: 0 6px 6px;
        z-index: 1;
        border-style: solid;
        border-color: transparent transparent #e4e7ed;
        &::before {
            content: "";
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            z-index: 2;
            top: -5px;
            left: -6px;
            border: 6px solid;
            border-color: transparent transparent #fff;
        }
    }
    .show_dropdown {
        // transition: opacity 0.3s;
        // opacity: 1;
    }
}
</style>
