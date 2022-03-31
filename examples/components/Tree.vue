<template>
    <div class="page-box">
        <h2 class="_title">Tree 树形控件</h2>
        <p class="_descript">用清晰的层级结构展示信息，可展开或折叠。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tree :data="data" @node-click="handleNodeClick"></dd-tree>
            </template>
        </dd-block>
        <dd-block title="数据项属性别名" :code="code2">
            <template #source>
                <dd-tree
                    :data="data2"
                    :props="defaultProps"
                    @node-click="handleNodeClick"
                ></dd-tree>
            </template>
        </dd-block>
        <dd-block title="懒加载自定义叶子节点(待完成)" :code="code3">
            <template #source>
                <dd-tree
                    :load="loadNode"
                    @node-click="handleNodeClick"
                ></dd-tree>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
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
            data2: [
                {
                    name: "一级 1",
                    value: [
                        {
                            name: "二级 1-1",
                            value: [
                                {
                                    name: "三级 1-1-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "一级 2",
                    value: [
                        {
                            name: "二级 2-1",
                            value: [
                                {
                                    name: "三级 2-1-1",
                                },
                            ],
                        },
                        {
                            name: "二级 2-2",
                            value: [
                                {
                                    name: "三级 2-2-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "一级 3",
                    value: [
                        {
                            name: "二级 3-1",
                            value: [
                                {
                                    name: "三级 3-1-1",
                                },
                            ],
                        },
                        {
                            name: "二级 3-2",
                            value: [
                                {
                                    name: "三级 3-2-1",
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "value",
                label: "name",
            },
            code1: `
                <dd-tree :data="data" @node-click="handleNodeClick"></dd-tree>

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
            `,
            code2: `
                <dd-tree
                    :data="data2"
                    :props="defaultProps"
                    @node-click="handleNodeClick"
                ></dd-tree>

                data2: [
                    {
                        name: "一级 1",
                        value: [
                            {
                                name: "二级 1-1",
                                value: [
                                    {
                                        name: "三级 1-1-1",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "一级 2",
                        value: [
                            {
                                name: "二级 2-1",
                                value: [
                                    {
                                        name: "三级 2-1-1",
                                    },
                                ],
                            },
                            {
                                name: "二级 2-2",
                                value: [
                                    {
                                        name: "三级 2-2-1",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "一级 3",
                        value: [
                            {
                                name: "二级 3-1",
                                value: [
                                    {
                                        name: "三级 3-1-1",
                                    },
                                ],
                            },
                            {
                                name: "二级 3-2",
                                value: [
                                    {
                                        name: "三级 3-2-1",
                                    },
                                ],
                            },
                        ],
                    },
                ],

                defaultProps: {
                    children: "value",
                    label: "name",
                },
            `,
            code3: `

            `,
            Attributes: [
                {
                    parameter: "data",
                    explain: "展示数据",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "props",
                    explain: "配置选项，具体看下表",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "load",
                    explain: "加载子树数据的方法",
                    type: "function(node, resolve)",
                    optional: "—",
                    default: "—",
                },
            ],
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([{ label: "region" }, { label: "region1" }]);
            }
            if (node.level > 1) return resolve([]);

            setTimeout(() => {
                const data = [
                    {
                        label: "leaf",
                    },
                    {
                        label: "zone",
                    },
                ];

                resolve(data);
            }, 500);
        },
    },
};
</script>

<style lang="less" scoped></style>
