// 导入组件
import ddTransfer from "./src";
// 为组件提供install安装方法，供按需引入
ddTransfer.install = Vue => {
    Vue.component(ddTransfer.name, ddTransfer)
}
// 暴露组件
export default ddTransfer