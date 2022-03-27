<template>
    <div class="dd-tree">
        <div class="dd-tree-node" v-for="(item, i) in myTree" :key="i">
            <div
                class="dd-tree-node_content"
                :style="`padding-left:${level * 18}px`"
                v-if="item.label"
                @click="tree_header(item, i)"
            >
                <span
                    :class="[
                        'dd-tree-node_icon',
                        item.isActive ? 'dd-tree-node_icon_active' : '',
                    ]"
                    :style="!item.children ? `color:transparent` : ''"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-triangle-right-fill`"></use>
                    </svg>
                </span>
                {{ item.label }}
            </div>
            <div
                class="dd-tree-node_children"
                v-if="item.children && item.children.length"
            >
                <transition name="fale">
                    <dd-tree
                        v-if="item.isActive"
                        :data="load ? null : item.children"
                        :load="load ? load : null"
                        :props="props"
                        :level="level + 1"
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
