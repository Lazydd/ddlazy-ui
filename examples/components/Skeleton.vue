<template>
    <div class="page-box">
        <h2 class="_title">Skeleton 骨架屏</h2>
        <p class="_descript">
            在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading
            的视觉效果更好。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-skeleton />
            </template>
        </dd-block>
        <dd-block title="更多参数" :code="code2">
            <template #source>
                <dd-skeleton :rows="6" />
            </template>
        </dd-block>
        <dd-block title="动画效果" :code="code3">
            <template #source>
                <dd-skeleton :rows="6" animated />
            </template>
        </dd-block>
        <dd-block title="图片样式" :code="code4">
            <template #source>
                <dd-skeleton
                    variant="image"
                    style="width: 240px; height: 240px"
                >
                </dd-skeleton>
            </template>
        </dd-block>
        <dd-block title="Loading 状态" :code="code5">
            <template #source>
                <div style="margin-bottom: 15px">
                    <label style="margin-right: 16px">切换 Loading</label>
                    <dd-switch v-model="loading" />
                </div>
                <dd-skeleton
                    animated
                    :loading="loading"
                    variant="image"
                    style="width: 240px; height: 240px"
                >
                    <dd-card :body-style="{ padding: '0px' }">
                        <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image"
                        />
                    </dd-card>
                </dd-skeleton>
            </template>
        </dd-block>
        <dd-block title="防止渲染抖动" :code="code6">
            <template #source>
                <div style="margin-bottom: 15px">
                    <label style="margin-right: 16px">切换 Loading</label>
                    <dd-switch v-model="loading1"/>
                </div>
                <dd-skeleton
                    animated
                    :loading="loading1"
                    variant="image"
                    :throttle="500"
                    style="width: 240px; height: 240px"
                >
                    <dd-card :body-style="{ padding: '0px' }">
                        <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image"
                        />
                    </dd-card>
                </dd-skeleton>
            </template>
        </dd-block>
        <dd-describe title="Skeleton Attributes" :data="Attributes"></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Skeleton",
    data() {
        return {
            loading: true,
            loading1: true,
            code1: `
                <dd-skeleton />
            `,
            code2: `
                <dd-skeleton :rows="6" />
            `,
            code3: `
                <dd-skeleton :rows="6" animated />
            `,
            code4: `
                <dd-skeleton
                    variant="image"
                    style="width: 240px; height: 240px"
                >
                </dd-skeleton>
            `,
            code5: `
                <div style="margin-bottom: 15px">
                    <label style="margin-right: 16px">切换 Loading</label>
                    <dd-switch v-model="loading" />
                </div>
                <dd-skeleton
                    animated
                    :loading="loading"
                    variant="image"
                    style="width: 240px; height: 240px"
                >
                    <dd-card :body-style="{ padding: '0px' }">
                        <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image"
                        />
                    </dd-card>
                </dd-skeleton>
            `,
            code6: `
                <div style="margin-bottom: 15px">
                    <label style="margin-right: 16px">切换 Loading</label>
                    <dd-switch v-model="loading1"/>
                </div>
                <dd-skeleton
                    animated
                    :loading="loading1"
                    variant="image"
                    :throttle="500"
                    style="width: 240px; height: 240px"
                >
                    <dd-card :body-style="{ padding: '0px' }">
                        <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image"
                        />
                    </dd-card>
                </dd-skeleton>
            `,
            Attributes: [
                {
                    parameter: "animated",
                    explain: "是否使用动画",
                    type: "boolean",
                    optional: "true / false",
                    default: "false",
                },
                {
                    parameter: "rows",
                    explain: "骨架屏段落数量",
                    type: "number",
                    optional: "正整数",
                    default: "4",
                },
                {
                    parameter: "loading",
                    explain: "是否显示 skeleton 骨架屏",
                    type: "boolean",
                    optional: "true / false",
                    default: "false",
                },
                {
                    parameter: "throttle",
                    explain: "延迟占位 DOM 渲染的时间, 单位是毫秒",
                    type: "number",
                    optional: "正整数",
                    default: "0",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped></style>
