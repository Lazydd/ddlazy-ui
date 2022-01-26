<template>
    <div class="dd-input-number">
        <div :class="['dd-input_NumberGroup', disabled ? 'is-disabled' : '']">
            <div
                :class="[
                    'dd-control',
                    'dd-input_Numberprepend',
                    input_value <= min ? 'is-disabled' : '',
                ]"
                @click="
                    !disabled && input_value > min
                        ? dd_changeNumber('decrement')
                        : null
                "
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-sami-select`"></use>
                </svg>
            </div>
            <input
                ref="input"
                type="text"
                @input="changInput"
                @focus="input_getFocus"
                @blur="input_onBlur"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="input_value"
                :class="['dd-input_inner', disabled ? 'is-disabled' : '']"
            />
            <div
                :class="[
                    'dd-control',
                    'dd-input_Numberappend',
                    input_value >= max ? 'is-disabled' : '',
                ]"
                @click="
                    !disabled && input_value < max
                        ? dd_changeNumber('increment')
                        : null
                "
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-add-select`"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddInputNumber",
    props: {
        value: {},
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
        },
        step: {
            type: Number,
            default: 1,
        },
        min: {
            type: Number,
            default: -Infinity,
        },
        max: {
            type: Number,
            default: Infinity,
        },
    },
    data() {
        return {
            input_value: this.value,
        };
    },
    methods: {
        changInput(e) {
            // this.$emit("input", e);
        },
        input_getFocus(e) {
            this.isFocus = true;
            this.$emit("focus", e);
        },
        input_onBlur(e) {
            if (e.target.value > this.max) {
                this.input_value = this.max;
            } else if (e.target.value < this.min) {
                this.input_value = this.min;
            } else {
                this.input_value = e.target.value;
            }
            this.$emit("input", this.input_value);
            this.$emit("handleChange", this.input_value);
            this.$emit("blur", e);
        },
        dd_changeNumber(type) {
            if (type === "increment") {
                this.input_value += this.step;
            } else if (type === "decrement") {
                this.input_value -= this.step;
            }
            this.$emit("input", this.input_value);
            this.$emit("handleChange", this.input_value);
        },
    },
    computed: {
        input() {
            return this.$refs.input;
        },
    },
    watch: {
        value(val) {
            this.input_value = this.input_value
                ? Number(this.input_value)
                : val;
            console.log(this.input_value);
        },
        input_value(val) {
            this.$emit("handleChange", val);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-input-number {
    display: inline-block;
    .dd-input_NumberGroup {
        position: relative;
        transition: all 0.3s;
        &:hover {
            .dd-input_inner {
                border-color: #c0c4cc;
            }
        }
    }
    .dd-input_inner {
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266 !important;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        width: 180px;
        height: 40px;
        outline: none;
        padding: 0 50px;
        text-align: center;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s;
        &:focus {
            border-color: #409eff !important;
        }
    }
    .is-disabled {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        background-color: #f5f7fa;
        border-color: #e4e7ed !important;
        .dd-control {
            cursor: not-allowed !important;
            color: #c0c4cc !important;
            background-color: #f5f7fa;
            border-color: #e4e7ed !important;
        }
    }
    .dd-control {
        position: absolute;
        top: 1px;
        bottom: 1px;
        z-index: 1;
        height: 38px;
        width: 39px;
        line-height: 40px;
        text-align: center;
        color: #606266;
        background: #f5f7fa;
        cursor: pointer;
        font-size: 13px;
    }
    .dd-input_Numberprepend {
        left: 1px;

        border-right: 1px solid #dcdfe6;
    }
    .dd-input_Numberappend {
        right: 1px;
        border-left: 1px solid #dcdfe6;
    }
}
</style>
