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
        <dd-block title="文本域" :code="code5">
            <template #source>
                <dd-input v-model="input4" type="textarea" resize="none" :rows="12" placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
        <dd-block title="文本域" :code="code6">
            <template #source>
                <dd-input v-model="input5" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></dd-input>
            </template>
        </dd-block>
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
                <dd-input v-model="input4" type="textarea" resize="none" :rows="12" placeholder="请输入内容"></dd-input>
            `,
            code6:`
                <dd-input v-model="input5" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></dd-input>
            `
        }
    },
};
</script>

<style lang="less" scoped>
.dd-input {
    
}
