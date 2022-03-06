// 导入组件
import ddStep from "./src";
// 为组件提供install安装方法，供按需引入
ddStep.install = Vue => {
    Vue.component(ddStep.name, ddStep)
}
// 暴露组件
export default ddStep