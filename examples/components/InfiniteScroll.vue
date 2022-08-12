<template>
    <div class="page-box">
        <h2 class="_title">InfiniteScroll 无限滚动</h2>
        <p class="_descript">滚动至底部时，加载更多数据。</p>
        <dd-block title="基础用法" :code="code">
            <template #source>
                <ul
                    class="infinite-list"
                    v-infinite-scroll="load"
                    style="overflow: auto"
                    infinite-scroll-distance="20"
                    infinite-scroll-delay="200"
                    :infinite-scroll-disabled="disabled"
                >
                    <li v-for="i in count" class="infinite-list-item">
                        {{ i }}
                    </li>
                    <p v-if="loading">加载中...</p>
                    <p v-if="noMore">没有更多了</p>
                </ul>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Backtop 回到顶部" right="VirtualizedList 虚拟滚动列表"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "ddInfiniteScroll",
    data() {
        return {
            count: 10,
            code: `
                <ul
                    class="infinite-list"
                    v-infinite-scroll="load"
                    style="overflow: auto"
                    infinite-scroll-distance="20"
                    infinite-scroll-delay="200"
                    :infinite-scroll-disabled="disabled"
                >
                    <li v-for="i in count" class="infinite-list-item">
                        {{ i }}
                    </li>
                </ul>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">没有更多了</p>

                count: 10,
                loading: false,

                methods: {
                    load() {
                        this.loading = true;
                        setTimeout(() => {
                            this.count += 2;
                            this.loading = false;
                        }, 2000);
                    },
                },
                computed: {
                    noMore() {
                        return this.count >= 20;
                    },
                    disabled() {
                        return this.loading || this.noMore;
                    },
                },

                .infinite-list {
                    height: 300px;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
                .infinite-list-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                    background: #e8f3fe;
                    margin: 10px;
                    color: #7dbcfc;
                }
                p {
                    text-align: center;
                    font-size: 14px;
                    color: #5e6d82;
                    line-height: 1.5em;
                }
            `,
            Attributes: [
                {
                    parameter: "infinite-scroll-disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "-",
                    default: "false",
                },
                {
                    parameter: "infinite-scroll-delay",
                    explain: "节流时延，单位为ms",
                    type: "number",
                    optional: "-",
                    default: "200",
                },
                {
                    parameter: "infinite-scroll-distance",
                    explain: "触发加载的距离阈值，单位为px",
                    type: "number",
                    optional: "-",
                    default: "0",
                },
            ],
            loading: false,
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.count += 2;
                this.loading = false;
            }, 2000);
        },
    },
    computed: {
        noMore() {
            return this.count >= 20;
        },
        disabled() {
            return this.loading || this.noMore;
        },
    },
};
</script>

<style lang="less" scoped>
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
    .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #e8f3fe;
        margin: 10px;
        color: #7dbcfc;
    }
    p {
        text-align: center;
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
    }
}
</style>
