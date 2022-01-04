// 导入组件
import ddTableColumn from "./src";
// 为组件提供install安装方法，供按需引入
ddTableColumn.install = Vue => {
    Vue.component(ddTableColumn.name, ddTableColumn)
}
// 暴露组件
export default ddTableColumn