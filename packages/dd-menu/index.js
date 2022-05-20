// 导入组件
import ddMenu from "./src";
// 为组件提供install安装方法，供按需引入
ddMenu.install = Vue => {
    Vue.component(ddMenu.name, ddMenu)
}
// 暴露组件
export default ddMenu