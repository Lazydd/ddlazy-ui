<template>
    <div class="page-box">
        <h2 class="_title">Empty 空状态</h2>
        <p class="_descript">空状态时的占位提示。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-empty description="描述文字"></dd-empty>
            </template>
        </dd-block>
        <dd-block title="自定义图片" :code="code2">
            <template #source>
                <dd-empty
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                ></dd-empty>
            </template>
        </dd-block>
        <dd-block title="图片尺寸" :code="code3">
            <template #source>
                <dd-empty
                    :image-size="200"
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                ></dd-empty>
            </template>
        </dd-block>
        <dd-block title="图片尺寸" :code="code4">
            <template #source>
                <dd-empty><dd-button type="primary">按钮</dd-button></dd-empty>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Empty",
    data() {
        return {
            code1: `
                <dd-empty description="描述文字"></dd-empty>
            `,
            code2: `
                <dd-empty
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                ></dd-empty>
            </template>
            `,
            code3: `
                <dd-empty
                    :image-size="200"
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                ></dd-empty>
            `,
            code4: `
                <dd-empty><dd-button type="primary">按钮</dd-button></dd-empty>
            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
