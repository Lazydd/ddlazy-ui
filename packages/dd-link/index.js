// 导入组件
import ddLink from "./src";
// 为组件提供install安装方法，供按需引入
ddLink.install = Vue => {
    Vue.component(ddLink.name, ddLink)
}
// 暴露组件
export default ddLink