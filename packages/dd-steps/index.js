// 导入组件
import ddSteps from "./src";
// 为组件提供install安装方法，供按需引入
ddSteps.install = Vue => {
    Vue.component(ddSteps.name, ddSteps)
}
// 暴露组件
export default ddSteps