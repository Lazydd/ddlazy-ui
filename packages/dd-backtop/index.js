// 导入组件
import ddBacktop from "./src";
// 为组件提供install安装方法，供按需引入
ddBacktop.install = Vue => {
    Vue.component(ddBacktop.name, ddBacktop)
}
// 暴露组件
export default ddBacktop