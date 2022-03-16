<template>
    <div class="dd-cascader-item" v-if="options">
        <dd-transition name="dd-zoom-top">
            <div class="dd-cascader_dropdown">
                <div class="dd-cascader-item-panel">
                    <div class="dd-cascader-item-menu">
                        <dd-scroll>
                            <div class="dd-cascader-item-menu_list">
                                <div
                                    class="dd-cascader-item-node"
                                    v-for="(item, i) in options"
                                    :key="item.label"
                                    @click="
                                        item.children && item.children.length
                                            ? ddCascader_click(i)
                                            : null
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
                // border-right: 1px solid #e4e7ed;
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
    }
}
</style>
