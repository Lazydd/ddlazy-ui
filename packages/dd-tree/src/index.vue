<template>
    <div class="dd-tree">
        <div class="dd-tree-node" v-for="(item, i) in data" :key="i">
            <div
                class="dd-tree-node__content"
                :style="`padding-left:${node.nodeLevel * 18}px`"
                v-if="item[props.label]"
            >
                {{ item[props.label] }}
            </div>
            <div
                class="dd-tree-node__children"
                v-if="item[props.children] && item[props.children].length"
            >
                <dd-tree
                    :data="item[props.children]"
                    :props="props"
                    :node="item"
                ></dd-tree>
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
        .dd-tree-node__children {
            display: block;
        }
        .dd-tree-node__content {
            display: flex;
            align-items: center;
            height: 26px;
            cursor: pointer;
            &:hover {
                background-color: #f5f7fa;
            }
        }
    }
}
</style>
