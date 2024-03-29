<template>
    <div class="dd-tree">
        <div class="dd-tree-node" v-for="(item, i) in myTree" :key="i">
            <div
                class="dd-tree-node_content"
                :style="`padding-left:${node.nodeLevel * 18}px`"
                v-if="item.label"
                @click="tree_header(item, i)"
            >
                <span
                    :class="[
                        'dd-tree-node_icon',
                        { 'dd-tree-node_icon_active': item.isActive },
                    ]"
                    :style="!item.children ? `color:transparent` : ''"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-triangle-right-fill`" />
                    </svg>
                </span>
                {{ item.label }}
            </div>
            <div
                class="dd-tree-node_children"
                v-if="item.children && item.children.length"
            >
                <dd-transition>
                    <dd-tree
                        v-if="item.isActive"
                        :data="load ? null : item.children"
                        :load="load ? load : null"
                        :props="props"
                        :node="item"
                        :level="level + 1"
                    />
                </dd-transition>
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
            default() {
                return {
                    label: "label",
                    children: "children",
                };
            },
            validator: (value) => {
                let keys = Object.keys(value);
                return keys.includes("label") && keys.includes("children");
            },
        },
        level: {
            type: Number,
            default: 0,
        },
        node: {
            type: Object,
            default: () => ({}),
        },
        load: {
            type: Function,
        },
    },
    data() {
        return {
            nodeLevel: 1,
            isActive: false,
            myTree: this.data?.map((item) => {
                return {
                    label: item[this.props.label],
                    children: item[this.props.children],
                    isActive: false,
                };
            }),
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
        initLoad() {
            let node = {
                level: 0,
            };
            let resolve = (data) => {
                data.forEach((item) => {
                    item.isActive = false;
                });
                this.myTree = data;
            };
            this.load(node, resolve);
        },
        tree_header(item, i) {
            this.$emit("node-click", item, this.$vnode, this);
            item.isActive = !item.isActive;
            this.load
                ? this.load({ level: 0 }, (data) => {
                      item.children = data;
                      this.$set(this.myTree, i, item);
                  })
                : null;
        },
    },
    created() {
        this.initTree();
        if (this.load) {
            this.initLoad();
        }
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
</style>
