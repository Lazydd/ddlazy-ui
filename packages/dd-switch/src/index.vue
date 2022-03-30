<template>
    <div :style="'display: inline-block'" :class="[value ? 'is-checked' : '']">
        <span
            class="dd-switch_label"
            :style="{ color: !value ? '#409eff' : '' }"
            @click="!disabled ? switch_click() : null"
            >{{ activeText }}</span
        >
        <div
            :class="['dd-switch']"
            onselectstart="return false"
            :disabled="disabled"
            :switch_value="!switch_value && disabled"
            :style="{
                background: value ? activeColor : inactiveColor,
                'margin-right': inactiveText ? '10px' : '',
                'margin-left': activeText ? '10px' : '',
            }"
            @click="!disabled ? switch_click() : null"
        ></div>
        <span
            class="dd-switch_label"
            :style="{
                color: value ? '#409eff' : '',
            }"
            @click="!disabled ? switch_click() : null"
            >{{ inactiveText }}</span
        >
    </div>
</template>

<script>
export default {
    name: "ddSwitch",
    props: {
        value: {
            type: [Boolean, String],
            default: false,
        },
        activeColor: {
            type: String,
            default: "#409EFF",
        },
        inactiveColor: {
            type: String,
            default: "#C0CCDA",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        activeText: {
            type: String,
        },
        inactiveText: {
            type: String,
        },
    },
    data() {
        return {
            switch_value: this.value,
        };
    },
    methods: {
        switch_click() {
            this.switch_value = !this.switch_value;
            this.$emit("input", this.switch_value);
            this.$emit("change", this.switch_value);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-switch {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &[disabled] {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        border-color: #409eff;
        background: #409eff !important;
        opacity: 0.6;
    }
    &[switch_value] {
        border-color: #dcdfe6;
        background: #dcdfe6 !important;
    }
    &::after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all 0.3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
}
.dd-switch_label {
    transition: 0.2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
    cursor: pointer;
}
.is-checked {
    .dd-switch {
        &::after {
            left: 100%;
            margin-left: -17px;
        }
    }
}
</style>
