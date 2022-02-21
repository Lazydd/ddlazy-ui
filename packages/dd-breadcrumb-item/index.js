// 导入组件
import ddBreadcrumbItem from "./src";
// 为组件提供install安装方法，供按需引入
ddBreadcrumbItem.install = Vue => {
    Vue.component(ddBreadcrumbItem.name, ddBreadcrumbItem)
}
// 暴露组件
export default ddBreadcrumbItem