// 导入组件
import ddDivider from "./src";
// 为组件提供install安装方法，供按需引入
ddDivider.install = Vue => {
    Vue.component(ddDivider.name, ddDivider)
}
// 暴露组件
export default ddDivider