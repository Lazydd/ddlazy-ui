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
        <dd-block title="indeterminate 状态" :code="code4">
            <template #source>
                <dd-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</dd-checkbox>
                <dd-checkbox-group v-model="checkedCities" style="margin-top:20px" @change="handleCheckedCitiesChange">
                    <dd-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</dd-checkbox>
                </dd-checkbox-group>
            </template>
        </dd-block>
        <dd-block title="按钮样式" :code="code5">
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
        <dd-describe title="Checkbox Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Checkbox Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Checkbox-group Attributes" :data="Attributes3" ></dd-describe>
        <dd-describe title="Checkbox-group Events" :data="Attributes4" events></dd-describe>
        <dd-describe title="Checkbox-button Attributes" :data="Attributes5" ></dd-describe>
        <dd-footer left="Radio 单选框" right="Input 输入框"></dd-footer>
    </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
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
            checkedCities: ['上海','北京'],
            cities: cityOptions,
            checkAll: false,
            isIndeterminate: true,
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
            code4:`
                <dd-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</dd-checkbox>
                <dd-checkbox-group v-model="checkedCities" style="margin-top:20px" @change="handleCheckedCitiesChange">
                    <dd-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</dd-checkbox>
                </dd-checkbox-group>

                const cityOptions = ['上海', '北京', '广州', '深圳'];
                checkedCities: ['上海','北京'],
                cities: cityOptions,
                checkAll: false,
                isIndeterminate: true,

                handleCheckAllChange(val){
                    this.checkedCities = val ? cityOptions : [];
                    this.isIndeterminate = false
                },
                handleCheckedCitiesChange(value){
                    let checkedCount = value.length;
                    this.checkAll = checkedCount === this.cities.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
                }
            `, 
            code5: `
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
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "label",
                    explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "绑定值变化时触发的事件",
                    backParameter: "更新后的值",
                },
            ],
            Attributes3: [
                {
                    parameter: "value / v-model",
                    explain: "绑定值",
                    type: "array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "size",
                    explain: "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
            ],
            Attributes4: [
                {
                    name: "change",
                    explain: "绑定值变化时触发的事件",
                    backParameter: "更新后的值",
                },
            ],
            Attributes5: [
                {
                    parameter: "label",
                    explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
        };
    },
    methods:{
        handleCheckAllChange(val){
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false
        },
        handleCheckedCitiesChange(value){
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    },
    created(){
        
    }
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
</style>
