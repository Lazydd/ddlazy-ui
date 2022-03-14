<template>
    <div class="page-box">
        <h2 class="_title">安装</h2>
        <h4 class="_subTitle">npm 安装</h4>
        <p class="_descript">
            推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
        </p>
        <h2 class="_title">引入 ddlazy-ui</h2>
        <dd-coder :coder="code1"></dd-coder>
        <dd-footer right="快速上手"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Quickstart",
    data() {
        return {
            code1: `
				<div>npm i ddlazy-ui -S</div>
        	`,
        };
    },
};
</script>

<style lang="less" scoped></style>
