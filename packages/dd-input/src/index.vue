<template>
    <div class="dd-input">
        <div class="dd-textarea" v-if="type === 'textarea'">
            <textarea
                :style="{ 'min-height': '33px', resize: resize }"
                :rows="autosize.minRows ? autosize.minRows : rows"
                :class="[disabled ? 'is-disabled' : '']"
            ></textarea>
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
                isInput__suffix ? 'dd-input_inner' : '',
                disabled ? 'is-disabled' : '',
            ]"
        />

        <span class="dd-input__suffix">
            <dd-icon
                v-if="clearable && input_value != ''"
                @click="dd_input_delete"
                icon="icon-reeor"
            ></dd-icon>
            <dd-icon
                v-if="showPassword && isFocus"
                @click="dd_input_showPWD"
                icon="icon-password-visible"
            ></dd-icon>
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
        autosize: {
            type: [Boolean, Object],
            default: false,
        },
    },
    data() {
        return {
            isInput__suffix: this.clearable || this.showPassword || false,
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
            this.input.focus();
        },
        dd_input_showPWD() {
            this.input_type = this.input_type === "text" ? "password" : "text";
        },
        input_getFocus() {
            this.isFocus = true;
        },
        input_onBlur() {
            this.isFocus = false;
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
    width: 180px;
    position: relative;
    input {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        cursor: pointer;
        box-sizing: border-box;
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
        .dd-icon {
            color: #c0c4cc;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #909399;
            }
        }
    }
    .dd-input_inner {
        padding-right: 30px;
    }
}
</style>
