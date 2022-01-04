// 导入组件
import ddRow from "./src";
// 为组件提供install安装方法，供按需引入
ddRow.install = Vue => {
    Vue.component(ddRow.name, ddRow)
}
// 暴露组件
export default ddRow