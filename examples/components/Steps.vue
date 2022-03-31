<template>
    <div class="page-box">
        <h2 class="_title">Steps 步骤条</h2>
        <p class="_descript">
            引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于
            2 步。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-steps :active="active" finish-status="success">
                    <dd-step title="步骤 1"></dd-step>
                    <dd-step title="步骤 2"></dd-step>
                    <dd-step title="步骤 3"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="固定宽度" :code="code2">
            <template #source>
                <dd-steps :space="200" :active="active" finish-status="error">
                    <dd-step title="步骤 1"></dd-step>
                    <dd-step title="步骤 2"></dd-step>
                    <dd-step title="步骤 3"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="有描述的步骤条" :code="code3">
            <template #source>
                <dd-steps :active="active">
                    <dd-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 3" description="这段就没那么长了"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="居中的步骤条" :code="code4" >
            <template #source>
                <dd-steps :active="active1" align-center>
                    <dd-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next1">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="带图标的步骤条" :code="code5" >
            <template #source>
                <dd-steps :active="active">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="竖式步骤条" :code="code6" >
            <template #source>
                <div style="height:300px">
                    <dd-steps direction="vertical" :active="active">
                        <dd-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 3" description="这段就没那么长了"></dd-step>
                    </dd-steps>
                </div>
                <dd-button style="margin-top: 12px" @click="next">
                        下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-block title="简洁风格的步骤条" :code="code7" >
            <template #source>
                <dd-steps :active="active" simple style="margin-bottom:15px">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-steps :active="active" simple  finish-status="success" style="margin-bottom:15px">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-steps :active="active" simple  finish-status="error">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            </template>
        </dd-block>
        <dd-describe title="Steps Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Step Attributes" :data="Attributes2"></dd-describe>
    </div>
</template>

<script>
export default {
    name: "Steps",
    data() {
        return {
            active: 1,
            active1: 1,
            code1: `
                <dd-steps :active="active" finish-status="success">
                    <dd-step title="步骤 1"></dd-step>
                    <dd-step title="步骤 2"></dd-step>
                    <dd-step title="步骤 3"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>

                next() {
                    if (this.active++ > 3) this.active = 0;
                },
            `,
            code2: `
                <dd-steps :space="200" :active="active" finish-status="error">
                    <dd-step title="步骤 1"></dd-step>
                    <dd-step title="步骤 2"></dd-step>
                    <dd-step title="步骤 3"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>

                next() {
                    if (this.active++ > 3) this.active = 0;
                },
            `,
            code3: `
                <dd-steps :space="200" :active="active" finish-status="success">
                    <dd-step title="步骤 1"></dd-step>
                    <dd-step title="步骤 2"></dd-step>
                    <dd-step title="步骤 3"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>

                next() {
                    if (this.active++ > 3) this.active = 0;
                },
            `,
            code4: `
                <dd-steps :active="active1" align-center>
                    <dd-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next1">
                    下一步
                </dd-button>

                next() {
                    if (this.active1++ > 3) this.active1 = 0;
                },
            `,
            code5:`
                <dd-steps :active="active">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            `,
            code6:`
                <div style="height:300px">
                    <dd-steps direction="vertical" :active="active">
                        <dd-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></dd-step>
                    <dd-step title="步骤 3" description="这段就没那么长了"></dd-step>
                    </dd-steps>
                </div>
                <dd-button style="margin-top: 12px" @click="next">
                        下一步
                </dd-button>
            `,
            code7:`
                <dd-steps :active="active" simple style="margin-bottom:15px">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-steps :active="active" simple  finish-status="success" style="margin-bottom:15px">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-steps :active="active" simple  finish-status="error">
                    <dd-step title="步骤 1" icon="icon-atm"></dd-step>
                    <dd-step title="步骤 2" icon="icon-cut"></dd-step>
                    <dd-step title="步骤 3" icon="icon-reeor"></dd-step>
                </dd-steps>
                <dd-button style="margin-top: 12px" @click="next">
                    下一步
                </dd-button>
            `,
            Attributes: [
                {
                    parameter: "space",
                    explain: "每个 step 的间距，不填写将自适应间距。支持百分比。",
                    type: "number / string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "direction",
                    explain: "显示方向",
                    type: "string",
                    optional: "vertical/horizontal",
                    default: "horizontal",
                },
                {
                    parameter: "active",
                    explain: "设置当前激活步骤",
                    type: "number",
                    optional: "—",
                    default: "0",
                },
                {
                    parameter: "finish-status",
                    explain: "设置结束步骤的状态",
                    type: "string",
                    optional: "wait / process / finish / error / success",
                    default: "finish",
                },
                {
                    parameter: "align-center",
                    explain: "进行居中对齐",
                    type: "boolean",
                    optional: "-",
                    default: "false",
                },
                {
                    parameter: "simple",
                    explain: "是否应用简洁风格",
                    type: "boolean",
                    optional: "-",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    parameter: "title",
                    explain: "标题",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "description",
                    explain: "描述性文字",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "icon",
                    explain: "图标",
                    type: "传入 icon 的 class 全名来自定义 icon",
                    optional: "string",
                    default: "—",
                },
                {
                    parameter: "status",
                    explain: "设置当前步骤的状态，不设置则根据 steps 确定状态",
                    type: "wait / process / finish / error / success",
                    optional: "-",
                    default: "",
                },
            ]
        };
    },
    methods: {
        next() {
            if (this.active++ > 3) this.active = 0;
        },
        next1() {
            if (this.active1++ > 4) this.active1 = 0;
        },
    },
};
</script>

<style lang="less" scoped></style>
