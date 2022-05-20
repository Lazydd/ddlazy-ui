// 导入组件
import ddSubmenu from "./src";
// 为组件提供install安装方法，供按需引入
ddSubmenu.install = Vue => {
    Vue.component(ddSubmenu.name, ddSubmenu)
}
// 暴露组件
export default ddSubmenu