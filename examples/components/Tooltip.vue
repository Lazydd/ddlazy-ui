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
                        placement="left"
                    >
                        <dd-button>左边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Right 提示文字"
                        placement="right"
                    >
                        <dd-button>右边</dd-button>
                    </dd-tooltip>
                </div>
                <div class="flex-box">
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="bottom-left"
                    >
                        <dd-button>下左</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom 提示文字"
                        placement="bottom"
                    >
                        <dd-button>下边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="bottom-right"
                    >
                        <dd-button>下右</dd-button>
                    </dd-tooltip>
                </div>
            </template>
        </dd-block>
        <dd-block title="多行文本" :code="code2">
            <template #source>
                <dd-tooltip
                    effect="dark"
                    content="这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字..."
                    placement="top-left"
                    maxWidth="200"
                >
                    <dd-button>多行文本</dd-button>
                </dd-tooltip>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="Dialog 对话框" right="Popconfirm 气泡确认框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Tooltip",
    data() {
        return {
            code1: `
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
                        placement="left"
                    >
                        <dd-button>左边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Right 提示文字"
                        placement="right"
                    >
                        <dd-button>右边</dd-button>
                    </dd-tooltip>
                </div>
                <div class="flex-box">
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="bottom-left"
                    >
                        <dd-button>下左</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom 提示文字"
                        placement="bottom"
                    >
                        <dd-button>下边</dd-button>
                    </dd-tooltip>
                    <dd-tooltip
                        effect="dark"
                        content="Bottom Left 提示文字"
                        placement="bottom-right"
                    >
                        <dd-button>下右</dd-button>
                    </dd-tooltip>
                </div>
            `,
            code2: `
                <dd-tooltip
                    effect="dark"
                    content="这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字...这是一段很长的文字..."
                    placement="top-left"
                    maxWidth="200"
                >
                    <dd-button>多行文本</dd-button>
                </dd-tooltip>
            `,
            Attributes: [
                {
                    parameter: "content",
                    explain: "显示的内容",
                    type: "String",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "placement",
                    explain: "Tooltip 的出现位置",
                    type: "String",
                    optional: "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
                    default: "top",
                },
                {
                    parameter: "offset",
                    explain: "出现位置的偏移量",
                    type: "Number/String",
                    optional: "—",
                    default: "8",
                },
                {
                    parameter: "maxWidth",
                    explain: "最大宽度，内容超出则换行",
                    type: "Number/String",
                    optional: "—",
                    default: "500",
                },
            ],
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
