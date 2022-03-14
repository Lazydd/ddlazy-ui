<template>
    <div class="dd-option" @click="!disabled ? dd_select_Click() : null">
        <li
            :class="[
                'dd-select-dropdown',
                select_value === value ? 'selected' : '',
                disabled ? 'is-disabled' : '',
            ]"
        >
            {{ label || value }}
        </li>
    </div>
</template>

<script>
export default {
    name: "ddOption",
    props: {
        value: {},
        label: {},
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            select_value: this.$parent.value,
        };
    },
    methods: {
        dd_select_Click(e) {
            console.log(this.$options);
            this.select_value = this.value;
            this.$parent.select_change(this.select_value);
            this.$parent.isShow_dropdown = false;
            this.$parent.select_label = this.label || this.value;
        },
    },
    created() {
        if (this.value == this.$parent.value) {
            this.$parent.select_label = this.label || this.value;
        }
    },
    watch: {
        "$parent.select_value"(val) {
            this.select_value = val;
            // this.$parent.select_label = this.label || this.value;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-option {
    width: 100%;
    .dd-select-dropdown {
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: #f5f7fa;
        }
    }
    .selected {
        color: #409eff !important;
        font-weight: 700;
    }
    .is-disabled {
        cursor: not-allowed !important;
        color: #c0c4cc;
        background-color: #fff !important;
        border-color: #e4e7ed !important;
    }
}
</style>
