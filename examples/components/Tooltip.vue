<template>
    <div class="page-box">
        <h2 class="_title">Tooltip 文字提示</h2>
        <p class="_descript">常用于展示鼠标 hover 时的提示信息。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tooltip
                    effect="dark"
                    content="Top Left 提示文字"
                    placement="top"
                >
                    <dd-button>上边</dd-button>
                </dd-tooltip>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Tooltip",
    data() {
        return {
            code1:`
                <dd-tooltip
                    effect="dark"
                    content="Top Left 提示文字"
                    placement="top"
                >
                    <dd-button>上边</dd-button>
                </dd-tooltip>
            `
        }
    },
};
</script>

<style scoped lang="less">
.page-box {
    width: 100%;
}
</style>
