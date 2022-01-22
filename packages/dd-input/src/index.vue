<template>
    <div class="dd-input">
        <input
            ref="input"
            type="text"
            @input="changInput"
            :placeholder="placeholder"
            :disabled="disabled"
            :class="[
                isInput__suffix ? 'dd-input_inner' : '',
                disabled ? 'is-disabled' : '',
            ]"
        />
        <span class="dd-input__suffix">
            <dd-icon
                v-if="clearable"
                @click="dd_input_delete"
                icon="icon-reeor"
            ></dd-icon>
        </span>
    </div>
</template>

<script>
export default {
    name: "ddInput",
    props: {
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
    },
    data() {
        return {
            isInput__suffix: this.clearable || false,
        };
    },
    methods: {
        changInput(e) {
            this.$emit("input", e.target.value);
        },
        dd_input_delete() {
            this.value = "";
        },
    },
    computed: {
        input() {
            return this.$refs.input;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-input {
    width: 180px;
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
    .is-disabled {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        background-color: #f5f7fa;
        border-color: #e4e7ed !important;
    }
    .dd-input__suffix {
        position: absolute;
        height: 100%;
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
