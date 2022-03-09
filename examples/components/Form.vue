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
                delivery: [
                    {
                        required: true,
                        message: "是否即时配送",
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
            `,
            code3: `

            `,
        };
    },
    methods: {
        onSubmit() {
            console.log(123);
        },
        submitForm(formName) {
            console.log(123);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
            console.log(this.$refs[formName].validate());
        },
        resetForm(formName) {
            if (this.$refs[formName]) this.$refs[formName].resetFields();
        },
    },
};
</script>

<style lang="less" scoped></style>
