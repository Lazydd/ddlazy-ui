<template>
    <div class="dd-cascader-item" v-if="options">
        <dd-transition name="dd-zoom-top">
            <div class="dd-cascader_dropdown">
                <div class="dd-time-select-dropdown-s"></div>
                <div class="dd-cascader-item-panel">
                    <div class="dd-cascader-item-menu">
                        <dd-scroll>
                            <div class="dd-cascader-item-menu_list">
                                <div
                                    class="dd-cascader-item-node"
                                    v-for="(item, i) in options"
                                    :key="`${item.label}${item.value}`"
                                    @click="
                                        item.children && item.children.length
                                            ? ddCascader_click(i, false)
                                            : ddCascader_click(i, true)
                                    "
                                >
                                    <span class="dd-cascader-item-node_label">
                                        {{ item.label }}
                                        <dd-icon
                                            v-if="
                                                item.children &&
                                                item.children.length
                                            "
                                            icon="icon-arrow-right"
                                        ></dd-icon>
                                    </span>
                                </div>
                            </div>
                        </dd-scroll>
                    </div>
                    <div class="children">
                        <cascader-list
                            v-if="isActive"
                            :options="options[index].children"
                            :node="options[index]"
                        ></cascader-list>
                    </div>
                </div>
            </div>
        </dd-transition>
    </div>
</template>

<script>
import ddIcon from "../../dd-icon";
import ddTransition from "../../dd-transition";
import ddScroll from "../../dd-scroll";
export default {
    name: "CascaderList",
    props: {
        value: {},
        options: {
            type: Array,
        },
        props: {
            type: Object,
        },
        node: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            cascader_label: "",
            index: null,
            towIndex: null,
            isActive: false,
            nodeLevel: 1,
            activeValue: [],
        };
    },
    methods: {
        ddCascader_click(index, isLastItem) {
            this.index = index;
            console.log(this.options[this.index]);
            this.activeValue[this.index] = null;
            this.$set(this.activeValue, index, this.options[this.index].value);
            console.log(this.activeValue);
            if (!isLastItem) this.isActive = true;
        },
        ddCascader_Twoclick(index) {
            this.towIndex = index;
        },
        initTree() {
            console.log(this.$parent?.nodeLevel);
            if (this.$parent?.nodeLevel) {
                let parentNodeLevel = this.$parent.nodeLevel;
                this.$set(this.node, "nodeLevel", parentNodeLevel + 1);
                this.nodeLevel = parentNodeLevel + 1;
            } else {
                this.$set(this.node, "nodeLevel", 1);
            }
        },
    },
    created() {
        this.initTree();
    },
    components: {
        ddTransition,
        ddIcon,
        ddScroll,
    },
};
</script>

<style lang="less" scoped>
.dd-cascader-item {
    position: relative;
    display: inline-block;
    .dd-cascader_dropdown {
        margin: 5px 0;
        font-size: 14px;
        background: #fff;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .dd-cascader-item-panel {
            display: flex;
            border-radius: 4px;
            font-size: 14px;
            .dd-cascader-item-menu {
                min-width: 180px;
                width: 100%;
                height: 204px;
                box-sizing: border-box;
                color: #606266;
                border-right: 1px solid #e4e7ed;
                .dd-cascader-item-menu_list {
                    position: relative;
                    min-height: 100%;
                    margin: 0;
                    padding: 6px 0;
                    list-style: none;
                    box-sizing: border-box;
                    .dd-cascader-item-node {
                        position: relative;
                        display: flex;
                        align-items: center;
                        padding: 0 30px 0 20px;
                        height: 34px;
                        line-height: 34px;
                        outline: none;
                        cursor: pointer;
                        &:hover {
                            background: #f5f7fa;
                        }
                        .dd-cascader-item-node_label {
                            flex: 1;
                            padding: 0 10px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            .dd-icon {
                                position: absolute;
                                right: 10px;
                            }
                        }
                        .children {
                            position: relative;
                        }
                    }
                    .active-node {
                        color: #409eff;
                        font-weight: 700;
                    }
                }
            }
        }
        .dd-time-select-dropdown-s {
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
    }
}
</style>
