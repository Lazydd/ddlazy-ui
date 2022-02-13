<template>
    <div class="page-box">
        <h2 class="_title">Pagination 分页</h2>
        <p class="_descript">当数据量过多时，使用分页分解数据。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-pagination
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-block title="带有背景色的分页" :code="code2">
            <template #source>
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            </template>
        </dd-block>
        <dd-block title="小型分页" :code="code3">
            <template #source>
                <dd-pagination
                    small
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    data() {
        return {
            page: 1,
            code1: `
                <dd-pagination
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            `,
            code2: `
                <dd-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            `,
            code3: `
                <dd-pagination
                    small
                    layout="prev, pager, next"
                    :current-page.sync="page"
                    :total="52"
                    :page-sizes="10"
                ></dd-pagination>
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
