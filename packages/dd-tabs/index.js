// 导入组件
import ddTabs from "./src";
// 为组件提供install安装方法，供按需引入
ddTabs.install = Vue => {
    Vue.component(ddTabs.name, ddTabs)
}
// 暴露组件
export default ddTabs