// 导入组件
import ddMenuItem from "./src";
// 为组件提供install安装方法，供按需引入
ddMenuItem.install = Vue => {
    Vue.component(ddMenuItem.name, ddMenuItem)
}
// 暴露组件
export default ddMenuItem