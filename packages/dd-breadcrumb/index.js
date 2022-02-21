// 导入组件
import ddBreadcrumb from "./src";
// 为组件提供install安装方法，供按需引入
ddBreadcrumb.install = Vue => {
    Vue.component(ddBreadcrumb.name, ddBreadcrumb)
}
// 暴露组件
export default ddBreadcrumb