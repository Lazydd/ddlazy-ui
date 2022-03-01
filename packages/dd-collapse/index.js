// 导入组件
import ddCollapse from "./src";
// 为组件提供install安装方法，供按需引入
ddCollapse.install = Vue => {
    Vue.component(ddCollapse.name, ddCollapse)
}
// 暴露组件
export default ddCollapse