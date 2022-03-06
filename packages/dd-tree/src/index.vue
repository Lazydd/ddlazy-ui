<template>
    <div class="dd-tree">
        <div class="dd-tree-node" v-for="(item, i) in data" :key="i">
            <div
                class="dd-tree-node_content"
                :style="`padding-left:${node.nodeLevel * 18}px`"
                v-if="item[props.label]"
                @click="tree_header(node)"
            >
                <span
                    :class="[
                        'dd-tree-node_icon',
                        isActive ? 'dd-tree-node_icon_active' : '',
                    ]"
                    :style="!item[props.children] ? `color:transparent` : ''"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-triangle-right-fill`"></use>
                    </svg>
                </span>
                {{ item[props.label] }}
            </div>
            <div
                class="dd-tree-node_children"
                v-if="item[props.children] && item[props.children].length"
            >
                <transition name="fale">
                    <dd-tree
                        v-if="isActive"
                        :data="item[props.children]"
                        :props="props"
                        :node="item"
                    ></dd-tree>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddTree",
    props: {
        data: {
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
            nodeLevel: 1,
            isActive: false,
        };
    },
    methods: {
        initTree() {
            if (this.$parent?.nodeLevel) {
                let parentNodeLevel = this.$parent.nodeLevel;
                this.$set(this.node, "nodeLevel", parentNodeLevel + 1);
                this.nodeLevel = parentNodeLevel + 1;
            } else {
                this.$set(this.node, "nodeLevel", 1);
            }
        },
        tree_header(item) {
            console.log(item);
            this.isActive = !this.isActive;
        },
    },
    created() {
        this.initTree();
    },
};
</script>

<style lang="less" scoped>
.dd-tree {
    position: relative;
    cursor: default;
    background: #fff;
    color: #606266;
    .dd-tree-node {
        white-space: nowrap;
        outline: none;
        .dd-tree-node_children {
            display: block;
        }
        .dd-tree-node_content {
            display: flex;
            align-items: center;
            height: 26px;
            cursor: pointer;
            &:hover {
                background-color: #f5f7fa;
            }
            .dd-tree-node_icon {
                display: inline-block;
                padding: 6px;
                cursor: pointer;
                color: #c0c4cc;
                font-size: 12px;
                transform: rotate(0deg);
                transition: transform 0.3s ease-in-out;
                // &::before {
                //     content: "";
                // }
            }
            .dd-tree-node_icon_active {
                transform: rotate(90deg);
                transition: transform 0.3s ease-in-out;
            }
        }
    }
}
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.3s;
}
.fale-enter,
.fale-leave-to {
    opacity: 0;
}
.fale-enter-to,
.fale-leave {
    opacity: 1;
}
</style>
