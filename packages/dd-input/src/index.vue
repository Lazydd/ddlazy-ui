<template>
    <div
        class="dd-input"
        :style="$slots.prepend || $slots.append ? 'width:100%' : ''"
    >
        <div :class="['dd-input_group']">
            <div class="dd-input_prepend" v-if="$slots.prepend">
                <slot name="prepend" />
            </div>
            <div class="dd-textarea" v-if="type === 'textarea'">
                <textarea
                    :style="{ 'min-height': '33px', resize: resize }"
                    :rows="rows"
                    :class="{ 'is-disabled': disabled }"
                    @input="changInput"
                    v-model="input_value"
                />
            </div>
            <input
                v-else
                ref="input"
                :type="input_type"
                @input="changInput"
                @focus="input_getFocus"
                @blur="input_onBlur"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="input_value"
                :class="[
                    'dd-input_inner',
                    { 'dd-input_sufinner': isInput__suffix },
                    { 'dd-input_preinner': isInput__prefix },
                    { 'dd-input_Left': $slots.prepend },
                    { 'dd-input_Right': $slots.append },
                    { 'is-disabled': disabled },
                    size,
                ]"
            />
            <div class="dd-input_append" v-if="$slots.append">
                <slot name="append" />
            </div>
        </div>
        <span class="dd-input__prefix">
            <svg
                v-if="prefixIcon"
                class="icon"
                aria-hidden="true"
                style="color: #c0c4cc"
            >
                <use :xlink:href="`#${prefixIcon}`" />
            </svg>
        </span>
        <span class="dd-input__suffix">
            <svg
                v-if="clearable && input_value != ''"
                class="icon is_input_change"
                @click="dd_input_delete"
                aria-hidden="true"
                style="color: #c0c4cc"
            >
                <use :xlink:href="`#icon-reeor`" />
            </svg>
            <svg
                v-if="showPassword && isFocus"
                class="icon is_input_change"
                @click="dd_input_showPWD"
                aria-hidden="true"
                style="color: #c0c4cc"
            >
                <use :xlink:href="`#icon-password-visible`" />
            </svg>
            <svg
                v-if="suffixIcon"
                class="icon"
                aria-hidden="true"
                style="color: #c0c4cc"
            >
                <use :xlink:href="`#${suffixIcon}`" />
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    name: "ddInput",
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
        },
        value: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        showPassword: {
            type: Boolean,
            default: false,
        },
        rows: {
            type: Number,
            default: 2,
        },
        resize: {
            type: String,
        },
        suffixIcon: {
            type: String,
        },
        prefixIcon: {
            type: String,
        },
        size: {
            type: String,
        },
    },
    data() {
        return {
            isInput__suffix:
                this.clearable || this.showPassword || this.suffixIcon || false,
            isInput__prefix: this.prefixIcon,
            input_value: this.value,
            input_type: this.type,
            isFocus: false,
        };
    },
    methods: {
        changInput(e) {
            this.$emit("input", e.target.value);
        },
        dd_input_delete() {
            this.input_value = "";
            this.$emit("input", this.input_value);
            this.$emit("clear");
            this.input.focus();
        },
        dd_input_showPWD() {
            this.input_type = this.input_type === "text" ? "password" : "text";
        },
        input_getFocus(e) {
            this.isFocus = true;
            this.$emit("focus", e);
        },
        input_onBlur(e) {
            this.$emit("blur", e);
            // this.isFocus = false;
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
    },
};
</script>

<style lang="less" scoped>
.dd-input {
    position: relative;
    display: inline-block;
    .dd-input_group {
        display: inline-flex;
        width: 100%;
        line-height: 40px;
    }
    .dd-input_inner {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        // width: 180px;
        height: 40px;
        outline: none;
        padding: 0 15px;
        cursor: pointer;
        transition: all 0.3s;
        &:focus {
            border-color: #409eff !important;
        }
        &:hover {
            border-color: #c0c4cc;
        }
    }
    .dd-textarea {
        width: 414px;
        textarea {
            display: block;
            resize: vertical;
            padding: 5px 15px;
            line-height: 1.5;
            cursor: text;
            box-sizing: border-box;
            width: 100%;
            font-size: inherit;
            color: #606266;
            outline: none;
            background-color: #fff;
            background-image: none;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:focus {
                border-color: #409eff !important;
            }
            &:hover {
                border-color: #c0c4cc;
            }
        }
    }
    .is-disabled {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        background-color: #f5f7fa;
        border-color: #e4e7ed !important;
    }
    .dd-input__suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        svg {
            color: #c0c4cc;
            font-size: 20px;
        }
        .is_input_change {
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #909399 !important;
            }
        }
    }
    .dd-input__prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        svg {
            color: #c0c4cc;
            font-size: 20px;
        }
    }
    .dd-input_sufinner {
        padding-right: 30px;
    }
    .dd-input_preinner {
        padding-left: 30px;
    }
    .dd-input_Left {
        width: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .dd-input_Right {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .dd-input_prepend {
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        white-space: nowrap;
    }
    .dd-input_append {
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        white-space: nowrap;
    }

    .medium {
        height: 36px;
        line-height: 36px;
    }
    .small {
        height: 32px;
        line-height: 32px;
    }
    .mini {
        height: 28px;
        line-height: 28px;
    }
}
</style>
