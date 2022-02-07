<template>
    <div class="page-box">
        <h2 class="_title">Upload 上传</h2>
        <p class="_descript">通过点击或者拖拽上传文件</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                ></dd-upload>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Upload",
    data() {
        return {
            code1: `

            `,
        };
    },
};
</script>

<style lang="less" scoped></style>
