// 导入组件
import ddMenuItemGroup from "./src";
// 为组件提供install安装方法，供按需引入
ddMenuItemGroup.install = Vue => {
    Vue.component(ddMenuItemGroup.name, ddMenuItemGroup)
}
// 暴露组件
export default ddMenuItemGroup