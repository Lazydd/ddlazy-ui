<template>
    <div class="page-box">
        <h2 class="_title">Checkbox 多选框</h2>
        <p class="_descript">一组备选项中进行多选</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-checkbox v-model="checked">备选项</dd-checkbox>
            </template>
        </dd-block>
        <dd-block title="禁用状态" :code="code2">
            <template #source>
                <dd-checkbox v-model="checked1" disabled>备选项1</dd-checkbox>
                <dd-checkbox v-model="checked2" disabled>备选项</dd-checkbox>
            </template>
        </dd-block>
        <dd-block title="多选框组" :code="code3">
            <template #source>
                <dd-checkbox-group v-model="checkList">
                    <dd-checkbox disabled>复选框A</dd-checkbox>
                    <dd-checkbox disabled label="复选框B">复选框B</dd-checkbox>
                    <dd-checkbox disabled label="复选框C"></dd-checkbox>
                    <dd-checkbox disabled label="禁用"></dd-checkbox>
                    <dd-checkbox disabled label="选中且禁用"></dd-checkbox>
                </dd-checkbox-group>
                <dd-checkbox-group v-model="checkList2" style="margin-top:20px">
                    <dd-checkbox>复选框A</dd-checkbox>
                    <dd-checkbox label="复选框B">复选框B</dd-checkbox>
                    <dd-checkbox label="复选框C"></dd-checkbox>
                    <dd-checkbox disabled label="禁用"></dd-checkbox>
                    <dd-checkbox disabled label="选中且禁用"></dd-checkbox>
                </dd-checkbox-group>
            </template>
        </dd-block>
        <dd-block title="按钮样式" :code="code4">
            <template #source>
                <dd-checkbox-group v-model="checkList3">
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="medium" v-model="checkList4" style="margin-top:20px">
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="small" v-model="checkList5" style="margin-top:20px">
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button disabled label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="mini" disabled v-model="checkList6" style="margin-top:20px">
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    data() {
        return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ["复选框A", "选中且禁用"],
            checkList2: ["复选框A", "选中且禁用"],
            checkList3: ['上海'],
            checkList4: ['上海'],
            checkList5: ['上海'],
            checkList6: ['上海'],
            code1: `
                <dd-checkbox v-model="checked">备选项</dd-checkbox>
            `,
            code2: `
                <dd-checkbox v-model="checked1" disabled>备选项1</dd-checkbox>
                <dd-checkbox v-model="checked2" disabled>备选项</dd-checkbox>
            `,
            code3: `
                <dd-checkbox-group v-model="checkList">
                    <dd-checkbox>复选框A</dd-checkbox>
                    <dd-checkbox label="复选框B">复选框B</dd-checkbox>
                    <dd-checkbox label="复选框C"></dd-checkbox>
                    <dd-checkbox disabled label="禁用"></dd-checkbox>
                    <dd-checkbox disabled label="选中且禁用"></dd-checkbox>
                </dd-checkbox-group>

                checkList: ["复选框A", "选中且禁用"],
            `,
            code4: `
                <dd-checkbox-group v-model="checkList3">
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="medium" v-model="checkList4" style="margin-top:20px">
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="small" v-model="checkList5" style="margin-top:20px">
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button disabled label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
                <dd-checkbox-group size="mini" disabled v-model="checkList6" style="margin-top:20px">
                    <dd-checkbox-button label="北京"></dd-checkbox-button>
                    <dd-checkbox-button label="上海"></dd-checkbox-button>
                    <dd-checkbox-button label="广州"></dd-checkbox-button>
                    <dd-checkbox-button label="深圳"></dd-checkbox-button>
                </dd-checkbox-group>
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
