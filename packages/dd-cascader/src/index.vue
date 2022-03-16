<template>
    <div class="dd-cascader">
        <input
            ref="input"
            type="text"
            :placeholder="placeholder"
            :value="cascader_label"
            readonly="readonly"
            :class="['dd-cascader_label']"
        />
        <dd-cascader-list v-bind="$attrs"></dd-cascader-list>
    </div>
</template>

<script>
import ddIcon from "../../dd-icon";
import ddTransition from "../../dd-transition";
import ddScroll from "../../dd-scroll";
import ddCascaderList from "./CascaderList.vue";
export default {
    name: "ddCascader",
    props: {
        value: {},
        placeholder: {
            type: String,
            default: "请选择",
        },
    },
    data() {
        return {
            cascader_label: "",
            index: null,
            towIndex: null,
            isActive: false,
        };
    },
    methods: {
        ddCascader_click(index) {
            this.index = index;
            this.isActive = true;
        },
        ddCascader_Twoclick(index) {
            this.towIndex = index;
        },
    },
    components: {
        ddTransition,
        ddIcon,
        ddScroll,
        ddCascaderList,
    },
};
</script>

<style lang="less" scoped>
.dd-cascader {
    position: relative;
    display: inline-block;
    .dd-cascader_label {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        // width: 100%;
        min-width: 240px;
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
    > .dd-cascader-item {
        position: absolute;
        top: 50px;
        left: 0;
    }
    .dd-cascader-item {
        z-index: 99;
    }
}
</style>
