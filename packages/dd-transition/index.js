// 导入组件
import ddTransition from "./src";
// 为组件提供install安装方法，供按需引入
ddTransition.install = Vue => {
    Vue.component(ddTransition.name, ddTransition)
}
// 暴露组件
export default ddTransition