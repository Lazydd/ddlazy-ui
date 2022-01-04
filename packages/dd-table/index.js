// 导入组件
import ddTable from "./src";
// 为组件提供install安装方法，供按需引入
ddTable.install = Vue => {
    Vue.component(ddTable.name, ddTable)
}
// 暴露组件
export default ddTable