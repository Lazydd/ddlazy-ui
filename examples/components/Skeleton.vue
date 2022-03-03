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
    </div>
</template>

<script>
export default {
    name: "Skeleton",
    data() {
        return {
            code1: `
                <dd-skeleton />
            `,
            code2: `
                <dd-skeleton />
            `,
            code3: `
                <dd-skeleton :rows="6" animated />
            `,
            code4: `

            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
