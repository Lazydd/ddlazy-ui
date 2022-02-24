<template>
    <div class="page-box">
        <h2 class="_title">Radio 单选框</h2>
        <p class="_descript">在一组备选项中进行单选</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-radio v-model="radio" label="1">备选项1</dd-radio>
                <dd-radio v-model="radio" label="2">备选项2</dd-radio>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-radio v-model="radio1" label="禁用" disabled>备选项1</dd-radio>
                <dd-radio v-model="radio1" label="选中且禁用" disabled>备选项2</dd-radio>
            </template>
        </dd-block>
        <dd-block title="单选框组" :code="code3">
            <template #source>
                <dd-radio-group  disabled v-model="radio2">
                    <dd-radio  label="1" >备选项1</dd-radio>
                    <dd-radio  label="2" >备选项2</dd-radio>
                    <dd-radio  label="3" >备选项3</dd-radio>
                    <dd-radio  label="4" >备选项4</dd-radio>
                </dd-radio-group>
                <dd-radio-group  v-model="radio3" style="margin-top:20px">
                    <dd-radio disabled  label="1" >备选项1</dd-radio>
                    <dd-radio  label="2" >备选项2</dd-radio>
                    <dd-radio  label="3" >备选项3</dd-radio>
                    <dd-radio  label="4" >备选项4</dd-radio>
                </dd-radio-group>
            </template>
        </dd-block>
        <dd-block title="按钮样式" :code="code4">
            <template #source>
                <dd-radio-group  v-model="radio4">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group  v-model="radio5" size="medium" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group  v-model="radio6" size="small" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button disabled label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group disabled v-model="radio7" size="mini" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            radio: "1",
            radio1: "选中且禁用",
            radio2: 1,
            radio3: 1,
            radio4: '上海',
            radio5: '上海',
            radio6: '上海',
            radio7: '上海',
            code1: `
                <dd-radio v-model="radio" label="1">备选项1</dd-radio>
                <dd-radio v-model="radio" label="2">备选项2</dd-radio>
            `,
            code2: `
                <dd-radio v-model="radio1" label="禁用" disabled>备选项1</dd-radio>
                <dd-radio v-model="radio1" label="选中且禁用" disabled>备选项2</dd-radio>
            `,
            code3:`
                <dd-radio-group disabled v-model="radio2">
                    <dd-radio  label="1" >备选项1</dd-radio>
                    <dd-radio  label="2" >备选项2</dd-radio>
                    <dd-radio  label="3" >备选项3</dd-radio>
                    <dd-radio  label="4" >备选项4</dd-radio>
                </dd-radio-group>
                <dd-radio-group v-model="radio3" style="margin-top:20px">
                    <dd-radio disabled  label="1" >备选项1</dd-radio>
                    <dd-radio  label="2" >备选项2</dd-radio>
                    <dd-radio  label="3" >备选项3</dd-radio>
                    <dd-radio  label="4" >备选项4</dd-radio>
                </dd-radio-group>
            `,
            code4:`
                <dd-radio-group  v-model="radio4">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group  v-model="radio5" size="medium" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group  v-model="radio6" size="small" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button disabled label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
                <dd-radio-group disabled v-model="radio7" size="mini" style="margin-top:20px">
                    <dd-radio-button  label="上海" ></dd-radio-button>
                    <dd-radio-button  label="北京" ></dd-radio-button>
                    <dd-radio-button  label="广州" ></dd-radio-button>
                    <dd-radio-button  label="深圳" ></dd-radio-button>
                </dd-radio-group>
            `
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
