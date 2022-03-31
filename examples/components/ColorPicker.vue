<template>
    <div class="page-box">
        <h2 class="_title">ColorPicker 颜色选择器</h2>
        <p class="_descript">用于颜色选择，支持多种格式。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="block">
                    <span>有默认值</span>
                    <dd-color-picker v-model="color1"></dd-color-picker>
                </div>
                <div class="block">
                    <span>无默认值</span>
                    <dd-color-picker v-model="color2"></dd-color-picker>
                </div>
            </template>
        </dd-block>
        <dd-block title="透明度" :code="code2">
            <template #source>
                <div class="block">
                    <dd-color-picker
                        v-model="color3"
                        show-alpha
                    ></dd-color-picker>
                </div>
            </template>
        </dd-block>
        <dd-block title="不同尺寸" :code="code3">
            <template #source>
                <div class="block">
                    <dd-color-picker v-model="color4"></dd-color-picker>
                    <dd-color-picker
                        v-model="color4"
                        size="medium"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                    <dd-color-picker
                        v-model="color4"
                        size="small"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                    <dd-color-picker
                        v-model="color4"
                        size="mini"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
    </div>
</template>

<script>
export default {
    name: "ColorPicker",
    data() {
        return {
            color1: "#55e747",
            color2: "",
            color3: "rgba(85, 231, 71, 0.8)",
            color4: "#55e747",
            code1: `
                <div class="block">
                    <span>有默认值</span>
                    <dd-color-picker v-model="color1"></dd-color-picker>
                </div>
                <div class="block">
                    <span>无默认值</span>
                    <dd-color-picker v-model="color2"></dd-color-picker>
                </div>

                color1: "#55e747",
                color2: "",
            `,
            code2: `
                <div class="block">
                    <dd-color-picker
                        v-model="color3"
                        show-alpha
                    ></dd-color-picker>
                </div>

                color3: "rgba(85, 231, 71, 0.8)",
            `,
            code3: `
                <div class="block">
                    <dd-color-picker v-model="color3"></dd-color-picker>
                    <dd-color-picker
                        v-model="color3"
                        size="medium"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                    <dd-color-picker
                        v-model="color3"
                        size="small"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                    <dd-color-picker
                        v-model="color3"
                        size="mini"
                        style="margin-left: 20px"
                    ></dd-color-picker>
                </div>

                color4: "#55e747",
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "size",
                    explain: "尺寸",
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
                {
                    parameter: "show-alpha",
                    explain: "是否支持透明度选择",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "当绑定值变化时触发",
                    backParameter: "当前值",
                },
                {
                    name: "active-change",
                    explain: "面板中当前显示的颜色发生改变时触发",
                    backParameter: "当前显示的颜色值",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
    .block {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        span {
            display: block;
            color: #8492a6;
            font-size: 14px;
            margin-bottom: 20px;
        }
        &:last-child {
            border: none;
        }
    }
}
</style>
