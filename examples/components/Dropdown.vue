<template>
    <div class="page-box">
        <h2 class="_title">Dropdown 下拉菜单</h2>
        <p class="_descript">将动作或菜单折叠到下拉菜单中。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-dropdown>
                    <span class="dd-dropdown-link">
                        下拉菜单
                        <dd-icon
                            class="dd-icon-arrow-down"
                            icon="icon-arrow-down"
                        ></dd-icon>
                    </span>
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            </template>
        </dd-block>
        <dd-block title="触发方式" :code="code2">
            <template #source>
                <dd-dropdown trigger="click">
                    <span class="dd-dropdown-link">
                        下拉菜单
                        <dd-icon
                            class="dd-icon-arrow-down"
                            icon="icon-arrow-down"
                        ></dd-icon>
                    </span>
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            </template>
        </dd-block>
        <dd-block title="按钮类型" :code="code3">
            <template #source>
                <dd-dropdown split-button>
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            </template>
        </dd-block>
        <!-- <dd-block title="不同尺寸" :code="code4">
            <template #source>
                <dd-dropdown split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="medium" split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="small" split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="mini" split-button type="primary">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            </template>
        </dd-block> -->
    </div>
</template>

<script>
export default {
    name: "Dropdown",
    data() {
        return {
            code1: `
                <dd-dropdown>
                    <span class="dd-dropdown-link">
                        下拉菜单
                        <dd-icon
                            class="dd-icon-arrow-down"
                            icon="icon-arrow-down"
                        ></dd-icon>
                    </span>
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            `,
            code2: `
                <dd-dropdown trigger="click">
                    <span class="dd-dropdown-link">
                        下拉菜单
                        <dd-icon
                            class="dd-icon-arrow-down"
                            icon="icon-arrow-down"
                        ></dd-icon>
                    </span>
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            `,
            code3: `
                <dd-dropdown split-button>
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            `,
            code4: `
                <dd-dropdown split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="medium" split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="small" split-button type="primary" style="margin-right:15px">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
                <dd-dropdown size="mini" split-button type="primary">
                    下拉菜单
                    <dd-dropdown-menu slot="dropdown">
                        <dd-dropdown-item>黄金糕</dd-dropdown-item>
                        <dd-dropdown-item>狮子头</dd-dropdown-item>
                        <dd-dropdown-item>螺蛳粉</dd-dropdown-item>
                        <dd-dropdown-item disabled>双皮奶</dd-dropdown-item>
                        <dd-dropdown-item divided>蚵仔煎</dd-dropdown-item>
                    </dd-dropdown-menu>
                </dd-dropdown>
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.dd-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.dd-icon-arrow-down {
    font-size: 12px;
}
</style>
