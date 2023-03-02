<template>
    <div class="page-box">
        <h2 class="_title">Carousel 走马灯</h2>
        <p class="_descript">
            在有限空间内，循环播放同一类型的图片、文字等内容
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-carousel :height="150">
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
        <dd-block title="无限滚动" :code="code2">
            <template #source>
                <dd-carousel :height="150" loop>
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
        <dd-block title="指示器" :code="code3">
            <template #source>
                <dd-carousel
                    :height="150"
                    loop
                    arrow="always"
                    active-color="red"
                    inactive-color="black"
                    slide-type="rectangle"
                    indicator-position="outside"
                >
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
        <dd-block title="卡片化" :code="code4">
            <template #source>
                <dd-carousel
                    :height="150"
                    :showNumber="3"
                    type="card"
                    indicator-position="outside"
                >
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
        <dd-block title="方向" :code="code5">
            <template #source>
                <dd-carousel :height="150" loop direction="vertical">
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
        <dd-describe
            title="Carousel Attributes"
            :data="Attributes"
        ></dd-describe>
        <dd-footer
            left="Dialog 对话框"
            right="Popconfirm 气泡确认框"
        ></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            code1: `
                <dd-carousel :height="150">
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            `,
            code2: `
                <dd-carousel :height="150" loop>
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            `,
            code3: `
                <dd-carousel
                    :height="150"
                    loop
                    arrow="always"
                    active-color="red"
                    inactive-color="black"
                    slide-type="rectangle"
                    indicator-position="outside"
                >
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            `,
            code4: `
                <dd-carousel
                    :height="150"
                    loop
                    type="card"
                    indicator-position="outside"
                >
                    <dd-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            `,
            code5: `
                <dd-carousel :height="150" loop direction="vertical">
                    <dd-carousel-item
                        v-for="item in 4"
                        :key="item"
                        :class="item % 2 == 0 ? 'a' : 'b'"
                    >
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            `,
            Attributes: [
                {
                    parameter: "height",
                    explain: "走马灯高度",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "loop",
                    explain: "是否循环显示",
                    type: "boolean",
                    optional: "-",
                    default: "true",
                },
                {
                    parameter: "activeColor",
                    explain: "激活指示器颜色",
                    type: "string",
                    optional: "—",
                    default: "#999",
                },
                {
                    parameter: "inactiveColor",
                    explain: "未激活指示器颜色",
                    type: "string",
                    optional: "—",
                    default: "#c0c4cc",
                },
                {
                    parameter: "slideType",
                    explain: "指示器类型",
                    type: "string",
                    optional: "circle/rectangle",
                    default: "circle",
                },
                {
                    parameter: "duration",
                    explain: "动画时间",
                    type: "number",
                    optional: "1000",
                    default: "mm",
                },
                {
                    parameter: "direction",
                    explain: "走马灯展示的方向",
                    type: "string",
                    optional: "horizontal/vertical",
                    default: "horizontal",
                },
                {
                    parameter: "type",
                    explain: "走马灯的类型",
                    type: "string",
                    optional: "card",
                    default: "—",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
:deep(.dd-carousel-item) {
    text-align: center;
}
.a {
    background-color: #99a9bf;
}
.b {
    background-color: #d3dce6;
}

:deep(.dd-carousel-item) h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
</style>
