<template>
    <div class="page-box">
        <h2 class="_title">Input 输入框</h2>
        <p class="_descript">通过鼠标或键盘输入字符</p>
        {{input}}
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
    </div>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            input:'33444444443',
            input1:'',
            input2:'',
            code1:`
                <dd-input v-model="input" placeholder="请输入内容"></dd-input>
            `,
            code2:`
                <dd-input v-model="input1" :disabled="true" placeholder="请输入内容"></dd-input>
            `,
            code3:`
                <dd-input v-model="input1" clearable :disabled="true" placeholder="请输入内容"></dd-input>
            `
        }
    },
};
</script>

<style lang="less" scoped>
.dd-input {
    
}
