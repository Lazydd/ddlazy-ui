<template>
    <div class="page-box">
        <h2 class="_title">Input 输入框</h2>
        <p class="_descript">通过鼠标或键盘输入字符</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-input v-model="input" placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-input v-model="input1" :disabled="true" placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="可清空" :code="code3">
            <template #source>
                <dd-input v-model="input2" clearable  placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="密码框" :code="code4">
            <template #source>
                <dd-input v-model="input3" showPassword  placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="带 icon 的输入框" :code="code5">
            <template #source>
                <div>
                    <dd-input v-model="input4" suffixIcon="icon-calendar" placeholder="请输入内容" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input5" prefixIcon="icon-search" placeholder="请输入内容"></dd-input>
                </div>
            </template>
        </dd-block>
        <dd-block title="文本域" :code="code6">
            <template #source>
                <dd-input v-model="input8" type="textarea"  :rows="12" placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="复合型输入框" :code="code7">
            <template #source>
                <dd-input v-model="input9" placeholder="请输入内容" style="margin-bottom:15px">
                    <template #prepend>Http://</template>
                </dd-input>
                <dd-input v-model="input10" placeholder="请输入内容" style="margin-bottom:15px">
                    <template slot="append">.com</template>
                </dd-input>
                <dd-input v-model="input10" placeholder="请输入内容">
                    <template #prepend>Http://</template>
                    <template slot="append">.com</template>
                </dd-input>
            </template>
        </dd-block>
        <dd-block title="尺寸" :code="code8">
            <template #source>
                <div>
                    <dd-input v-model="input11" suffixIcon="icon-calendar" placeholder="请输入内容" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input12" prefixIcon="icon-search" placeholder="请输入内容" size="medium"  style="margin-right:25px"></dd-input>
                    <dd-input v-model="input13" prefixIcon="icon-search" placeholder="请输入内容" size="small" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input14" prefixIcon="icon-search" placeholder="请输入内容" size="mini"></dd-input>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Input Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Input Events" :data="Attributes2" events></dd-describe>
        <dd-footer left="Checkbox 多选框" right="InputNumber 计数器"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            input:'',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:'',
            input8:'',
            input9:'',
            input10:'',
            input11:'',
            input12:'',
            input13:'',
            input14:'',
            code1:`
                <dd-input v-model="input" placeholder="请输入内容"></dd-input>
            `,
            code2:`
                <dd-input v-model="input1" :disabled="true" placeholder="请输入内容"></dd-input>
            `,
            code3:`
                <dd-input v-model="input1" clearable :disabled="true" placeholder="请输入内容"></dd-input>
            `,
            code4:`
                <dd-input v-model="input3" show-password  placeholder="请输入内容"></dd-input>
            `,
            code5:`
                <div>
                    <dd-input v-model="input4" suffixIcon="icon-calendar" placeholder="请输入内容" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input5" prefixIcon="icon-search" placeholder="请输入内容"></dd-input>
                </div>
            `,
            code6:`
                <dd-input v-model="input5" type="textarea" resize="none" :rows="12" placeholder="请输入内容"></dd-input>
            `,
            code7:`
                <dd-input v-model="input9" placeholder="请输入内容" style="margin-bottom:15px">
                    <template #prepend>Http://</template>
                </dd-input>
                <dd-input v-model="input10" placeholder="请输入内容">
                    <template slot="append">.com</template>
                </dd-input>
            `,
            code8:`
                <div>
                    <dd-input v-model="input11" suffixIcon="icon-calendar" placeholder="请输入内容" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input12" prefixIcon="icon-search" placeholder="请输入内容" size="medium"  style="margin-right:25px"></dd-input>
                    <dd-input v-model="input13" prefixIcon="icon-search" placeholder="请输入内容" size="small" style="margin-right:25px"></dd-input>
                    <dd-input v-model="input14" prefixIcon="icon-search" placeholder="请输入内容" size="mini"></dd-input>
                </div>
            `,
            Attributes: [
                {
                    parameter: "type",
                    explain: "类型",
                    type: "string",
                    optional: "text / textarea",
                    default: "text",
                },
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                // {
                //     parameter: "maxlength",
                //     explain: "原生属性，最大输入长度",
                //     type: "number",
                //     optional: "—",
                //     default: "—",
                // },
                // {
                //     parameter: "minlength",
                //     explain: "原生属性，最小输入长度",
                //     type: "number",
                //     optional: "—",
                //     default: "—",
                // },
                {
                    parameter: "placeholder",
                    explain: "输入框占位文本",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "clearable",
                    explain: "是否可清空",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "show-password",
                    explain: "是否显示切换密码图标",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "disabled",
                    explain: "禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "size",
                    explain: "输入框尺寸",
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
                {
                    parameter: "prefix-icon",
                    explain: "输入框头部图标",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "suffix-icon",
                    explain: "输入框尾部图标",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
            ],
            Attributes2: [
                {
                    name: "blur",
                    explain: "在 Input 失去焦点时触发",
                    backParameter: "(event: Event)",
                },
                {
                    name: "focus",
                    explain: "在 Input 获得焦点时触发",
                    backParameter: "(event: Event)",
                },
                {
                    name: "change",
                    explain: "仅在输入框失去焦点或用户按下回车时触发",
                    backParameter: "(value: string | number)",
                },
                {
                    name: "clear",
                    explain: "在点击由 clearable 属性生成的清空按钮时触发",
                    backParameter: "—",
                },
            ],
        }
    },
};
</script>

<style lang="less" scoped>