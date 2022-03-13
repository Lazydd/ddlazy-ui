// 导入组件
import ddDropdownItem from "./src";
// 为组件提供install安装方法，供按需引入
ddDropdownItem.install = Vue => {
    Vue.component(ddDropdownItem.name, ddDropdownItem)
}
// 暴露组件
export default ddDropdownItem