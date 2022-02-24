// 导入组件
import ddFormItem from "./src";
// 为组件提供install安装方法，供按需引入
ddFormItem.install = Vue => {
    Vue.component(ddFormItem.name, ddFormItem)
}
// 暴露组件
export default ddFormItem