// 导入组件
import ddCheckboxGroup from "./src";
// 为组件提供install安装方法，供按需引入
ddCheckboxGroup.install = Vue => {
    Vue.component(ddCheckboxGroup.name, ddCheckboxGroup)
}
// 暴露组件
export default ddCheckboxGroup