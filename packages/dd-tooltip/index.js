// 导入组件
import ddTooltip from "./src";
// 为组件提供install安装方法，供按需引入
ddTooltip.install = Vue => {
    Vue.component(ddTooltip.name, ddTooltip)
}
// 暴露组件
export default ddTooltip