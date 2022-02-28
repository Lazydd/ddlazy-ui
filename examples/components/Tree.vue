<template>
    <div class="page-box">
        <h2 class="_title">Tree 树形控件</h2>
        <p class="_descript">用清晰的层级结构展示信息，可展开或折叠。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tree
                    :data="data"
                    :props="defaultProps"
                    @node-click="handleNodeClick"
                ></dd-tree>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Tree",
    data() {
        return {
            data: [
                {
                    label: "一级 1",
                    children: [
                        {
                            label: "二级 1-1",
                            children: [
                                {
                                    label: "三级 1-1-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "一级 2",
                    children: [
                        {
                            label: "二级 2-1",
                            children: [
                                {
                                    label: "三级 2-1-1",
                                },
                            ],
                        },
                        {
                            label: "二级 2-2",
                            children: [
                                {
                                    label: "三级 2-2-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "一级 3",
                    children: [
                        {
                            label: "二级 3-1",
                            children: [
                                {
                                    label: "三级 3-1-1",
                                },
                            ],
                        },
                        {
                            label: "二级 3-2",
                            children: [
                                {
                                    label: "三级 3-2-1",
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
            code1: `

            `,
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
    },
};
</script>

<style lang="less" scoped></style>
