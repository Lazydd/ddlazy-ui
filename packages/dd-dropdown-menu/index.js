// 导入组件
import ddDropdownMenu from "./src";
// 为组件提供install安装方法，供按需引入
ddDropdownMenu.install = Vue => {
    Vue.component(ddDropdownMenu.name, ddDropdownMenu)
}
// 暴露组件
export default ddDropdownMenu