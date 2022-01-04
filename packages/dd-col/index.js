// 导入组件
import ddCol from "./src";
// 为组件提供install安装方法，供按需引入
ddCol.install = Vue => {
    Vue.component(ddCol.name, ddCol)
}
// 暴露组件
export default ddCol