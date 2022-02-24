<template>
    <div class="page-box">
        <h2 class="_title">Form 表单</h2>
        <p class="_descript">
            由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-form ref="form" :model="form">
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
            code1: `
                
            `,
        };
    },
    methods: {
        onSubmit() {},
    },
};
</script>

<style lang="less" scoped></style>
