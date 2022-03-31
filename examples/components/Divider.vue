<template>
    <div class="page-box">
        <h2 class="_title">Divider 分割线</h2>
        <p class="_descript">对不同章节的文本段落进行分割。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                <dd-divider></dd-divider>
                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
            </template>
        </dd-block>
        <dd-block title="设置文案" :code="code2">
            <template #source>
                <span>头上一片晴天，心中一个想念</span>
                <dd-divider content-position="left">少年包青天</dd-divider>
                <span>饿了别叫妈, 叫饿了么</span>
                <dd-divider><dd-icon icon="icon-clock"></dd-icon></dd-divider>
                <span>为了无法计算的价值</span>
                <dd-divider content-position="right">阿里云</dd-divider>
            </template>
        </dd-block>
        <dd-block title="垂直分割" :code="code3">
            <template #source>
                <div>
                    <span>雨纷纷</span>
                    <dd-divider direction="vertical"></dd-divider>
                    <span>旧故里</span>
                    <dd-divider direction="vertical"></dd-divider>
                    <span>草木深</span>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Divider",
    data() {
        return {
            code1: `
                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                <dd-divider></dd-divider>
                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
            `,
            code2: `
                <span>头上一片晴天，心中一个想念</span>
                <dd-divider content-position="left">少年包青天</dd-divider>
                <span>饿了别叫妈, 叫饿了么</span>
                <dd-divider><dd-icon icon="icon-clock"></dd-icon></dd-divider>
                <span>为了无法计算的价值</span>
                <dd-divider content-position="right">阿里云</dd-divider>
            `,
            code3: `
                <div>
                    <span>雨纷纷</span>
                    <dd-divider direction="vertical"></dd-divider>
                    <span>旧故里</span>
                    <dd-divider direction="vertical"></dd-divider>
                    <span>草木深</span>
                </div>
            `,
            Attributes: [
                {
                    parameter: "direction",
                    explain: "设置分割线方向",
                    type: "string",
                    optional: "horizontal / vertical",
                    default: "horizontal",
                },
                {
                    parameter: "content-position",
                    explain: "设置分割线文案的位置",
                    type: "string",
                    optional: "left / right / center",
                    default: "center",
                },
            ]
        };
    },
};
</script>

<style lang="less" scoped></style>
