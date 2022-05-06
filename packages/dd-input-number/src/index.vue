<template>
    <div :class="['dd-input-number']">
        <div
            :class="[
                'dd-input_NumberGroup',
                disabled ? 'is-disabled' : '',
                size,
            ]"
        >
            <div
                v-if="controlsPosition !== 'right'"
                onselectstart="return false"
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
                v-if="controlsPosition !== 'right'"
                onselectstart="return false"
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
            <div
                v-if="controlsPosition === 'right'"
                onselectstart="return false"
                @click="
                    !disabled && input_value > min
                        ? dd_changeNumber('decrement')
                        : null
                "
                :class="[
                    'dd-control',
                    'is-controls-decrement',
                    'is-controls-right',
                    input_value <= min ? 'is-disabled' : '',
                ]"
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-down`"></use>
                </svg>
            </div>
            <div
                v-if="controlsPosition === 'right'"
                onselectstart="return false"
                @click="
                    !disabled && input_value < max
                        ? dd_changeNumber('increment')
                        : null
                "
                :class="[
                    'dd-control',
                    'is-controls-increment',
                    'is-controls-right',
                    input_value >= max ? 'is-disabled' : '',
                ]"
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-up`"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddInputNumber",
    props: {
        value: {
            type: [Number, String],
            default: 0,
        },
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
        precision: {
            type: Number,
        },
        size: {
            type: String,
        },
        controlsPosition: {
            type: String,
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
            let oldvalue = parseFloat(this.input_value);
            if (e.target.value > this.max) {
                if (this.precision >= 0) {
                    this.max = parseFloat(this.max).toFixed(this.precision);
                }
                this.input_value = this.max;
            } else if (e.target.value < this.min) {
                if (this.precision >= 0) {
                    this.min = parseFloat(this.min).toFixed(this.precision);
                }
                this.input_value = this.min;
            } else {
                if (this.precision >= 0) {
                    e.target.value = parseFloat(e.target.value).toFixed(
                        this.precision
                    );
                }
                this.input_value = parseFloat(e.target.value).toFixed(
                    this.precision
                );
            }
            this.$emit("input", this.input_value);
            this.$emit("change", this.input_value, oldvalue);
            this.$emit("blur", e);
        },
        dd_changeNumber(type) {
            let oldvalue = parseFloat(this.input_value);
            if (this.precision >= 0) {
                this.input_value = parseFloat(this.input_value).toFixed(
                    this.precision
                );
            }
            if (type === "increment") {
                this.input_value = (
                    parseFloat(this.input_value) + this.step
                ).toFixed(this.precision);
            } else if (type === "decrement") {
                this.input_value = (
                    parseFloat(this.input_value) - this.step
                ).toFixed(this.precision);
            }
            this.$emit("input", this.input_value);
            this.$emit("change", this.input_value, oldvalue);
        },
    },
    computed: {
        input() {
            return this.$refs.input;
        },
    },
    watch: {
        value(val) {
            this.input_value = val;
        },
        input_value(val, old) {
            this.$emit("change", val, old);
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
    .is-controls-right {
        border-right: none;
        border-left: 1px solid #dcdfe6;
        height: auto;
        line-height: 19px;
        left: auto;
        right: 1px;
    }
    .is-controls-decrement {
        bottom: 1px;
        top: auto;
    }
    .is-controls-increment {
        bottom: auto;
        top: 1;
        border-bottom: 1px solid #dcdfe6;
    }
    .dd-input_Numberprepend {
        left: 1px;
        border-right: 1px solid #dcdfe6;
    }
    .dd-input_Numberappend {
        right: 1px;
        border-left: 1px solid #dcdfe6;
    }
    .medium {
        .dd-input_inner {
            height: 36px;
            width: 200px;
            line-height: 36px;
        }
        .dd-control {
            width: 28px;
            height: 34px;
            line-height: 34px;
            font-size: 14px;
        }
    }
    .small {
        .dd-input_inner {
            height: 32px;
            width: 130px;
            line-height: 32px;
        }
        .dd-control {
            width: 28px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
        }
    }
    .mini {
        .dd-input_inner {
            height: 28px;
            width: 130px;
            line-height: 26px;
        }
        .dd-control {
            width: 28px;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
        }
    }
}
</style>
