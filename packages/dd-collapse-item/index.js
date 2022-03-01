// 导入组件
import ddCollapseItem from "./src";
// 为组件提供install安装方法，供按需引入
ddCollapseItem.install = Vue => {
    Vue.component(ddCollapseItem.name, ddCollapseItem)
}
// 暴露组件
export default ddCollapseItem