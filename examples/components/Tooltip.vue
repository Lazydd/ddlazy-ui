<template>
    <div class="page-box">
        <h2 class="_title">Tooltip 文字提示</h2>
        <p class="_descript">常用于展示鼠标 hover 时的提示信息。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="flex-box">
                    <dd-tooltip
                        effect="dark"
                        content="Top Left 提示文字"
                        placement="top-left"
                    >
                        <dd-button>上左</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Top 提示文字"
                        placement="top"
                    >
                        <dd-button>上边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Top Right 提示文字"
                        placement="top-right"
                    >
                        <dd-button>上右</dd-button>
                    </dd-tooltip>
                </div>
                <div class="flex-box">
                    <dd-tooltip
                        effect="dark"
                        content="Left 提示文字"
                        placement="top"
                    >
                        <dd-button>左边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Right 提示文字"
                        placement="top"
                    >
                        <dd-button>右边</dd-button>
                    </dd-tooltip>
                </div>
                <div class="flex-box">
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="top"
                    >
                        <dd-button>下左</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom 提示文字"
                        placement="top"
                    >
                        <dd-button>下边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="top"
                    >
                        <dd-button>下右</dd-button>
                    </dd-tooltip>
                </div>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Tooltip",
    data() {
        return {
            code1: `
                <dd-tooltip
                    effect="dark"
                    content="Top Left 提示文字"
                    placement="top"
                >
                    <dd-button>上边</dd-button>
                </dd-tooltip>
            `,
        };
    },
};
</script>

<style scoped lang="less">
.page-box {
    width: 100%;
    .flex-box {
        display: flex;
        justify-content: space-between;
        width: 250px;
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
