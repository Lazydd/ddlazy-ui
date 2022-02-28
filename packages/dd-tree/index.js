// 导入组件
import ddTree from "./src";
// 为组件提供install安装方法，供按需引入
ddTree.install = Vue => {
    Vue.component(ddTree.name, ddTree)
}
// 暴露组件
export default ddTree