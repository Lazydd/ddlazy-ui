// 导入组件
import ddFooter from "./src";
// 为组件提供install安装方法，供按需引入
ddFooter.install = Vue => {
    Vue.component(ddFooter.name, ddFooter)
}
// 暴露组件
export default ddFooter