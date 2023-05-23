<template>
    <div class="page-box">
        <h2 class="_title">VirtualizedList 虚拟滚动列表</h2>
        <p class="_descript">
            通过虚拟化滚动列表组件，超大数据渲染将减少卡顿。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-virtualized-list
                    :data="list"
                    :data-key="'id'"
                    :config-obj="{
                        displayCount: 20,
                        innerHeight: 60,
                    }"
                    class="virtual-list"
                >
                    <template #default="{ item }">
                        <div>{{ item.name }}</div>
                    </template>
                </dd-virtualized-list>
            </template>
        </dd-block>
        <dd-block title="grid" :code="code2">
            <template #source>
                <dd-virtualized-list
                    :data="list"
                    :data-key="'id'"
                    :type="'grid'"
                    :config-obj="{
                        displayCount: 32,
                        innerHeight: 60,
                        gridTemplateColumns: 4,
                    }"
                    class="virtual-list2"
                >
                    <template #default="{ item }">
                        <div>{{ item.name }}</div>
                    </template>
                </dd-virtualized-list>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer
            left="InfiniteScroll 无限滚动"
            right="Echarts 图表"
        ></dd-footer>
    </div>
</template>

<script>
export default {
    name: "VirtualizedList",
    data() {
        return {
            code1: `
                <dd-virtualized-list
                    :data="list"
                    :data-key="'id'"
                    :config-obj="{
                        displayCount: 20,
                        innerHeight: 60,
                    }"
                    class="virtual-list"
                >
                    <template #default="{ item }">
                        <div>{{ item.name }}</div>
                    </template>
                </dd-virtualized-list>

                mounted() {
                    for (let i = 0; i < 100000; i++) {
                        this.list.push({ name: "列表" + i, id: i });
                    }
                },

                .virtual-list {
                    height: 500px;
                    border: 1px solid skyblue;
                    margin: 0 auto;
                    :deep(li) {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #e8f3fe;
                        margin: 0 10px;
                        color: #7dbcfc;
                        & + li {
                            margin-top: 10px;
                        }
                    }
                }
            `,
            code2: `
                <dd-virtualized-list
                    :data="list"
                    :data-key="'id'"
                    :type="'grid'"
                    :config-obj="{
                        displayCount: 32,
                        innerHeight: 60,
                        gridTemplateColumns: 4,
                    }"
                    class="virtual-list"
                >
                    <template #default="{ item }">
                        <div>{{ item.name }}</div>
                    </template>
                </dd-virtualized-list>

                .virtual-list2 {
                    height: 500px;
                    border: 1px solid skyblue;
                    margin: 0 auto;
                    :deep(li) {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #e8f3fe;
                        color: #7dbcfc;
                    }
                    :deep(.list-group) {
                        gap: 10px;
                    }
                }
            `,
            Attributes: [
                {
                    parameter: "data",
                    explain: "要在表中渲染的数据数组",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "data-key",
                    explain: "每行的 key 值，如果不提供，将使用索引 index 代替",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "type",
                    explain: "列表类型",
                    type: "string",
                    optional: "list/grid",
                    default: "list",
                },
                {
                    parameter: "config-obj",
                    explain: "配置项",
                    type: "object",
                    optional:
                        "displayCount:示数量,innerHeight:个li的高度,gridTemplateColumns:当type为grid时有效，表示每行几个",
                    default: "{displayCount: 20,innerHeight: 60,}",
                },
            ],
            list: [],
        };
    },
    mounted() {
        for (let i = 0; i < 100000; i++) {
            this.list.push({ name: "列表" + i, id: i });
        }
    },
};
</script>

<style lang="less" scoped>
.virtual-list {
    height: 500px;
    border: 1px solid skyblue;
    margin: 0 auto;
    :deep(li) {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e8f3fe;
        margin: 0 10px;
        color: #7dbcfc;
        & + li {
            margin-top: 10px;
        }
    }
}

.virtual-list2 {
    height: 500px;
    border: 1px solid skyblue;
    margin: 0 auto;
    :deep(li) {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e8f3fe;
        color: #7dbcfc;
    }
    :deep(.list-group) {
        gap: 10px;
    }
}
</style>
