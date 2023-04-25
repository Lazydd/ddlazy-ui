// 导入组件
import ddVirtualizedList from "./src";
// 为组件提供install安装方法，供按需引入
ddVirtualizedList.install = Vue => {
    Vue.component(ddVirtualizedList.name, ddVirtualizedList)
}
// 暴露组件
export default ddVirtualizedList