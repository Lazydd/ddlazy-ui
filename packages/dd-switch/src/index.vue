<template>
    <div
        :class="['dd-switch']"
        :style="{ background: value ? activeColor : inactiveColor }"
        @click="switch_click"
    ></div>
</template>

<script>
export default {
    name: "ddSwitch",
    props: {
        value: {
            type: Boolean,
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
</style>
