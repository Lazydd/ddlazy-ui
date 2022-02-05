// 导入组件
import ddProgress from "./src";
// 为组件提供install安装方法，供按需引入
ddProgress.install = Vue => {
    Vue.component(ddProgress.name, ddProgress)
}
// 暴露组件
export default ddProgress