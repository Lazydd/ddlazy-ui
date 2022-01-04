<template>
    <div class="page-box">
        <h2 class="_title">Button 按钮</h2>
        <p class="_descript">常用的操作按钮</p>
        <!-- <dd-row type="flex" justify="center" align="center" :gutter='20'>
            <dd-col :span="8"><div style="background: red">1</div></dd-col>
            <dd-col :span="6"><div style="background: blue">222</div></dd-col>
            <dd-col :span="6"><div style="background: yellow">333</div></dd-col>
            <dd-col :span="6"><div style="background: gray">444</div></dd-col>
        </dd-row> -->
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-button>默认按钮</dd-button>
                <dd-button type="primary">主要按钮</dd-button>
                <dd-button type="success">成功按钮</dd-button>
                <dd-button type="info">信息按钮</dd-button>
                <dd-button type="warning">警告按钮</dd-button>
                <dd-button type="danger">危险按钮</dd-button>
                <br /><br />
                <dd-button plain>默认按钮</dd-button>
                <dd-button type="primary" plain>主要按钮</dd-button>
                <dd-button type="success" plain>成功按钮</dd-button>
                <dd-button type="info" plain>信息按钮</dd-button>
                <dd-button type="warning" plain>警告按钮</dd-button>
                <dd-button type="danger" plain>危险按钮</dd-button>
                <br /><br />
                <dd-button round>默认按钮</dd-button>
                <dd-button type="primary" round>主要按钮</dd-button>
                <dd-button type="success" round>成功按钮</dd-button>
                <dd-button type="info" round>信息按钮</dd-button>
                <dd-button type="warning" round>警告按钮</dd-button>
                <dd-button type="danger" round>危险按钮</dd-button>
                <br /><br />
                <dd-button icon="icon-eletrical" circle></dd-button>
                <dd-button icon="icon-video1" type="primary" circle></dd-button>
                <dd-button
                    icon="icon-electronics"
                    type="success"
                    circle
                ></dd-button>
                <dd-button icon="icon-email" type="info" circle></dd-button>
                <dd-button
                    icon="icon-furniture"
                    type="warning"
                    circle
                ></dd-button>
                <dd-button icon="icon-gift1" type="danger" circle></dd-button>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-button disabled>默认按钮</dd-button>
                <dd-button type="primary" disabled>主要按钮</dd-button>
                <dd-button type="success" disabled>成功按钮</dd-button>
                <dd-button type="info" disabled>信息按钮</dd-button>
                <dd-button type="warning" disabled>警告按钮</dd-button>
                <dd-button type="danger" disabled>危险按钮</dd-button>
            </template>
        </dd-block>
        <dd-block title="图标按钮" :code="code3">
            <template #source>
                <dd-button type="primary" icon="icon-auto"></dd-button>
                <dd-button type="primary" icon="icon-map"></dd-button>
                <dd-button type="primary" icon="icon-account"></dd-button>
                <dd-button type="primary" icon="icon-search">搜索</dd-button>
                <dd-button type="primary">搜索</dd-button>
            </template>
        </dd-block>
        <dd-block title="不同尺寸" :code="code4">
            <template #source>
                <dd-button>默认按钮</dd-button>
                <dd-button size="medium">中等按钮</dd-button>
                <dd-button size="small">小型按钮</dd-button>
                <dd-button size="mini">超小按钮</dd-button>
            </template>
        </dd-block>
        <dd-block title="加载中" :code="code5">
            <template #source>
                <dd-button type="primary" loading>默认按钮</dd-button>
            </template>
        </dd-block>
        <dd-describe title="Button Attributes" :data="tableData"></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Button",
    data() {
        return {
            code1: ` 
                <dd-button>默认按钮</dd-button>
                <dd-button type="primary">主要按钮</dd-button>
                <dd-button type="success">成功按钮</dd-button>
                <dd-button type="info">信息按钮</dd-button>
                <dd-button type="warning">警告按钮</dd-button>
                <dd-button type="danger">危险按钮</dd-button>
                <br /><br />
                <dd-button plain>默认按钮</dd-button>
                <dd-button type="primary" plain>主要按钮</dd-button>
                <dd-button type="success" plain>成功按钮</dd-button>
                <dd-button type="info" plain>信息按钮</dd-button>
                <dd-button type="warning" plain>警告按钮</dd-button>
                <dd-button type="danger" plain>危险按钮</dd-button>
                <br /><br />
                <dd-button round>默认按钮</dd-button>
                <dd-button type="primary" round>主要按钮</dd-button>
                <dd-button type="success" round>成功按钮</dd-button>
                <dd-button type="info" round>信息按钮</dd-button>
                <dd-button type="warning" round>警告按钮</dd-button>
                <dd-button type="danger" round>危险按钮</dd-button>
                <br /><br />
                <dd-button icon="icon-eletrical" circle></dd-button>
                <dd-button icon="icon-video1" type="primary" circle></dd-button>
                <dd-button icon="icon-electronics" type="success" circle></dd-button>
                <dd-button icon="icon-email" type="info" circle></dd-button>
                <dd-button icon="icon-furniture" type="warning" circle></dd-button>
                <dd-button icon="icon-gift1" type="danger" circle></dd-button>
                `,
            code2: `
                <dd-button disabled>默认按钮</dd-button>
                <dd-button type="primary" disabled>主要按钮</dd-button>
                <dd-button type="success" disabled>成功按钮</dd-button>
                <dd-button type="info" disabled>信息按钮</dd-button>
                <dd-button type="warning" disabled>警告按钮</dd-button>
                <dd-button type="danger" disabled>危险按钮</dd-button>
                `,
            code3: `
                <dd-button type="primary" icon="icon-auto"></dd-button>
                <dd-button type="primary" icon="icon-map"></dd-button>
                <dd-button type="primary" icon="icon-account"></dd-button>
                <dd-button type="primary" icon="icon-search">搜索</dd-button>
                <dd-button type="primary" >搜索</dd-button>
                `,
            code4: `
                <dd-button>默认按钮</dd-button>
                <dd-button size="medium">中等按钮</dd-button>
                <dd-button size="small">小型按钮</dd-button>
                <dd-button size="mini">超小按钮</dd-button>
                `,
            code5: `
                <dd-button type="primary" loading>默认按钮</dd-button>
                `,
            tableData: [
                {
                    parameter: "参数",
                    explain: "说明",
                    type: "类型",
                    optional: "可选值",
                    default: "默认值",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
    .dd-button {
        margin: 0 5px;
    }
}
</style>
