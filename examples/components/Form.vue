<template>
    <div class="page-box">
        <h2 class="_title">Form 表单</h2>
        <p class="_descript">
            由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-form ref="form" :model="form" label-width="80px">
                    <dd-form-item label="活动名称">
                        <dd-input
                            v-model="form.name"
                            style="width: 240px"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item label="活动区域">
                        <dd-select
                            v-model="form.region"
                            placeholder="请选择活动区域"
                            style="width: 240px"
                        >
                            <dd-option
                                label="区域一"
                                value="shanghai"
                            ></dd-option>
                            <dd-option
                                label="区域二"
                                value="beijing"
                            ></dd-option>
                        </dd-select>
                    </dd-form-item>
                    <dd-form-item label="即时配送">
                        <dd-switch v-model="form.delivery"></dd-switch>
                    </dd-form-item>
                    <dd-form-item label="活动性质">
                        <dd-checkbox-group v-model="form.type">
                            <dd-checkbox
                                label="美食/餐厅线上活动"
                            ></dd-checkbox>
                            <dd-checkbox label="地推活动"></dd-checkbox>
                            <dd-checkbox label="线下主题活动"></dd-checkbox>
                            <dd-checkbox label="单纯品牌曝光"></dd-checkbox>
                        </dd-checkbox-group>
                    </dd-form-item>
                    <dd-form-item label="特殊资源">
                        <dd-radio-group v-model="form.resource">
                            <dd-radio label="线上品牌商赞助"></dd-radio>
                            <dd-radio label="线下场地免费"></dd-radio>
                        </dd-radio-group>
                    </dd-form-item>
                    <dd-form-item label="活动形式">
                        <dd-input
                            type="textarea"
                            v-model="form.desc"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item>
                        <dd-button type="primary" @click="onSubmit">
                            立即创建
                        </dd-button>
                        <dd-button style="margin-left: 10px" @click="aa"
                            >取消</dd-button
                        >
                    </dd-form-item>
                </dd-form>
            </template>
        </dd-block>
        <dd-block title="表单验证" :code="code2">
            <template #source>
                <dd-form
                    ref="form1"
                    :rules="rules"
                    :model="form1"
                    label-width="100px"
                >
                    <dd-form-item label="活动名称" prop="name">
                        <dd-input
                            v-model="form1.name"
                            style="width: 240px"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item label="活动区域" prop="region">
                        <dd-select
                            v-model="form1.region"
                            placeholder="请选择活动区域"
                            style="width: 240px"
                        >
                            <dd-option
                                label="区域一"
                                value="shanghai"
                            ></dd-option>
                            <dd-option
                                label="区域二"
                                value="beijing"
                            ></dd-option>
                        </dd-select>
                    </dd-form-item>
                    <dd-form-item label="即时配送">
                        <dd-switch v-model="form1.delivery"></dd-switch>
                    </dd-form-item>
                    <dd-form-item label="活动性质" prop="type">
                        <dd-checkbox-group v-model="form1.type">
                            <dd-checkbox
                                label="美食/餐厅线上活动"
                            ></dd-checkbox>
                            <dd-checkbox label="地推活动"></dd-checkbox>
                            <dd-checkbox label="线下主题活动"></dd-checkbox>
                            <dd-checkbox label="单纯品牌曝光"></dd-checkbox>
                        </dd-checkbox-group>
                    </dd-form-item>
                    <dd-form-item label="特殊资源" prop="resource">
                        <dd-radio-group v-model="form1.resource">
                            <dd-radio label="线上品牌商赞助"></dd-radio>
                            <dd-radio label="线下场地免费"></dd-radio>
                        </dd-radio-group>
                    </dd-form-item>
                    <dd-form-item label="活动形式" prop="desc">
                        <dd-input
                            type="textarea"
                            v-model="form1.desc"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item>
                        <dd-button type="primary" @click="submitForm('form1')">
                            立即创建
                        </dd-button>
                        <dd-button
                            style="margin-left: 10px"
                            @click="resetForm('form1')"
                            >重置</dd-button
                        >
                    </dd-form-item>
                </dd-form>
            </template>
        </dd-block>
        <dd-describe title="Form Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Form Methods" :data="Attributes2" methods></dd-describe>
        <dd-describe title="Form Events" :data="Attributes3" events></dd-describe>
        
        <dd-describe title="Methods" :data="Attributes3" methods></dd-describe>
        <dd-footer left="Transfer 穿梭框" right="Table 表格"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            form: {
                name: "啊啊啊",
                region: "shanghai",
                delivery: true,
                type: ["地推活动"],
                resource: "线下场地免费",
                desc: "描述",
            },
            form1: {
                type: [],
                desc: "描述",
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur",
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur",
                    },
                ],
                region: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change",
                    },
                ],
                type: [
                    {
                        type: "array",
                        required: true,
                        message: "请至少选择一个活动性质",
                        trigger: "change",
                    },
                ],
                resource: [
                    {
                        required: true,
                        message: "请选择活动资源",
                        trigger: "change",
                    },
                ],
                desc: [
                    {
                        required: true,
                        message: "请填写活动形式",
                        trigger: "blur",
                    },
                ],
            },
            code1: `
                <dd-form ref="form" :model="form" label-width="80px">
                    <dd-form-item label="活动名称">
                        <dd-input
                            v-model="form.name"
                            style="width: 240px"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item label="活动区域">
                        <dd-select
                            v-model="form.region"
                            placeholder="请选择活动区域"
                        >
                            <dd-option
                                label="区域一"
                                value="shanghai"
                            ></dd-option>
                            <dd-option
                                label="区域二"
                                value="beijing"
                            ></dd-option>
                        </dd-select>
                    </dd-form-item>
                    <dd-form-item label="即时配送">
                        <dd-switch v-model="form.delivery"></dd-switch>
                    </dd-form-item>
                    <dd-form-item label="活动性质">
                        <dd-checkbox-group v-model="form.type">
                            <dd-checkbox
                                label="美食/餐厅线上活动"
                            ></dd-checkbox>
                            <dd-checkbox label="地推活动"></dd-checkbox>
                            <dd-checkbox label="线下主题活动"></dd-checkbox>
                            <dd-checkbox label="单纯品牌曝光"></dd-checkbox>
                        </dd-checkbox-group>
                    </dd-form-item>
                    <dd-form-item label="特殊资源">
                        <dd-radio-group v-model="form.resource">
                            <dd-radio label="线上品牌商赞助"></dd-radio>
                            <dd-radio label="线下场地免费"></dd-radio>
                        </dd-radio-group>
                    </dd-form-item>
                    <dd-form-item label="活动形式">
                        <dd-input
                            type="textarea"
                            v-model="form.desc"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item>
                        <dd-button type="primary" @click="onSubmit">
                            立即创建
                        </dd-button>
                        <dd-button style="margin-left: 10px">取消</dd-button>
                    </dd-form-item>
                </dd-form>
            `,
            code2: `
                <dd-form
                    ref="form"
                    :rules="rules"
                    :model="form1"
                    label-width="100px"
                >
                    <dd-form-item label="活动名称" prop="name">
                        <dd-input
                            v-model="form1.name"
                            style="width: 240px"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item label="活动区域" prop="region">
                        <dd-select
                            v-model="form1.region"
                            placeholder="请选择活动区域"
                            style="width: 240px"
                        >
                            <dd-option
                                label="区域一"
                                value="shanghai"
                            ></dd-option>
                            <dd-option
                                label="区域二"
                                value="beijing"
                            ></dd-option>
                        </dd-select>
                    </dd-form-item>
                    <dd-form-item label="即时配送" prop="delivery">
                        <dd-switch v-model="form1.delivery"></dd-switch>
                    </dd-form-item>
                    <dd-form-item label="活动性质" prop="type">
                        <dd-checkbox-group v-model="form1.type">
                            <dd-checkbox
                                label="美食/餐厅线上活动"
                            ></dd-checkbox>
                            <dd-checkbox label="地推活动"></dd-checkbox>
                            <dd-checkbox label="线下主题活动"></dd-checkbox>
                            <dd-checkbox label="单纯品牌曝光"></dd-checkbox>
                        </dd-checkbox-group>
                    </dd-form-item>
                    <dd-form-item label="特殊资源" prop="resource">
                        <dd-radio-group v-model="form1.resource">
                            <dd-radio label="线上品牌商赞助"></dd-radio>
                            <dd-radio label="线下场地免费"></dd-radio>
                        </dd-radio-group>
                    </dd-form-item>
                    <dd-form-item label="活动形式" prop="desc">
                        <dd-input
                            type="textarea"
                            v-model="form1.desc"
                        ></dd-input>
                    </dd-form-item>
                    <dd-form-item>
                        <dd-button type="primary" @click="onSubmit">
                            立即创建
                        </dd-button>
                        <dd-button style="margin-left: 10px" @click="resetForm"
                            >重置</dd-button
                        >
                    </dd-form-item>
                </dd-form>


                rules: {
                name: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur",
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur",
                    },
                ],
                region: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change",
                    },
                ],
                date1: [
                    {
                        type: "date",
                        required: true,
                        message: "请选择日期",
                        trigger: "change",
                    },
                ],
                date2: [
                    {
                        type: "date",
                        required: true,
                        message: "请选择时间",
                        trigger: "change",
                    },
                ],
                type: [
                    {
                        type: "array",
                        required: true,
                        message: "请至少选择一个活动性质",
                        trigger: "change",
                    },
                ],
                resource: [
                    {
                        required: true,
                        message: "请选择活动资源",
                        trigger: "change",
                    },
                ],
                desc: [
                    {
                        required: true,
                        message: "请填写活动形式",
                        trigger: "blur",
                    },
                ],
            },

            submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message.success("提交成功");
                }
            });
            },
            resetForm(formName) {
                if (this.$refs[formName]) this.$refs[formName].resetFields();
            },
            `,
            Attributes: [
                {
                    parameter: "model",
                    explain: "表单数据对象",
                    type: "	object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "rules",
                    explain: "表单验证规则",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "label-width",
                    explain: "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
            ],
            Attributes2: [
                {
                    name: "validate",
                    explain: "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
                    parameter: "Function(callback: Function(boolean, object))",
                },
                // {
                //     name: "resetFields",
                //     explain: "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
                //     parameter: "—",
                // },
                {
                    name: "clearValidate",
                    explain: "移除整个表单的校验结果",
                    parameter: "—",
                },
            ],
            Attributes3: [
                {
                    name: "validate",
                    explain: "任一表单项被校验后触发",
                    backParameter: "被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）",
                },
            ],
        };
    },
    methods: {
        onSubmit() {
            console.log(123);
        },
        aa() {
            this.form = this.$options.data().form;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message.success("提交成功");
                }
            });
        },
        resetForm(formName) {
            if (this.$refs[formName]) this.$refs[formName].clearValidate();
        },
    },
};
</script>

<style lang="less" scoped></style>
