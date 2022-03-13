// 导入组件
import ddDropdown from "./src";
// 为组件提供install安装方法，供按需引入
ddDropdown.install = Vue => {
    Vue.component(ddDropdown.name, ddDropdown)
}
// 暴露组件
export default ddDropdown