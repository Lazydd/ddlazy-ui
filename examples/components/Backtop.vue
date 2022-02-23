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
    </div>
</template>

<script>
export default {
    name: "Backtop",
    data() {
        return {
            code1: `
                Scroll down to see the bottom-right button.
                <dd-backtop></dd-backtop>
            `,
            code2: `
                Scroll down to see the bottom-right button.
                <dd-backtop></dd-backtop>
            `,
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
