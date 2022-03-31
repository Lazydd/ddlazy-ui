<template>
    <div class="page-box">
        <h2 class="_title">Backtop 回到顶部</h2>
        <p class="_descript">返回页面顶部的操作按钮</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                Scroll down to see the bottom-right button.
                <dd-backtop target=".main-box"></dd-backtop>
            </template>
        </dd-block>
        <dd-block title="自定义显示内容" :code="code2">
            <template #source>
                Scroll down to see the bottom-right button.
                <dd-backtop target=".main-box" :bottom="100">
                    <div
                        style="
                             {
                                height: 100%;
                                width: 100%;
                                background-color: #f2f5f6;
                                box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
                                text-align: center;
                                line-height: 40px;
                                color: #1989fa;
                            }
                        "
                    >
                        UP
                    </div>
                </dd-backtop>
            </template>
        </dd-block>
        <dd-block title="自定义距离顶部距离" :code="code3">
            <template #source>
                Scroll down to see the bottom-right button.
                <dd-backtop
                    icon="icon-pointerleft"
                    :bottom="160"
                    target=".main-box"
                    :offsetTop="100"
                ></dd-backtop>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="Scroll 滚动条"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Backtop",
    data() {
        return {
            code1: `
                Scroll down to see the bottom-right button.
                <dd-backtop target=".main-box"></dd-backtop>
            `,
            code2: `
                Scroll down to see the bottom-right button.
                <dd-backtop target=".main-box" :bottom="100">
                    <div
                        style="
                             {
                                height: 100%;
                                width: 100%;
                                background-color: #f2f5f6;
                                box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
                                text-align: center;
                                line-height: 40px;
                                color: #1989fa;
                            }
                        "
                    >
                        UP
                    </div>
                </dd-backtop>
            `,
            code3: `
                Scroll down to see the bottom-right button.
                <dd-backtop
                    icon="icon-pointerleft"
                    :bottom="160"
                    target=".main-box"
                    :offsetTop="100"
                ></dd-backtop>
            `,
            Attributes: [
                {
                    parameter: "target",
                    explain: "触发滚动的对象",
                    type: "string",
                    optional: "",
                    default: "",
                },
                {
                    parameter: "visibility-height",
                    explain: "滚动高度达到此参数值才出现",
                    type: "number",
                    optional: "",
                    default: "200",
                },
                {
                    parameter: "right",
                    explain: "控制其显示位置, 距离页面右边距",
                    type: "number",
                    optional: "",
                    default: "40",
                },
                {
                    parameter: "bottom",
                    explain: "控制其显示位置, 距离页面底部距离",
                    type: "number	",
                    optional: "",
                    default: "40",
                },
            ],
            Attributes2: [
                {
                    name: "click",
                    explain: "点击按钮触发的事件",
                    backParameter: "点击事件",
                },
            ]
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
    height: 2000px;
}
</style>
