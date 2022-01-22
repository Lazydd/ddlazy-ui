// 导入组件
import ddInput from "./src";
// 为组件提供install安装方法，供按需引入
ddInput.install = Vue => {
    Vue.component(ddInput.name, ddInput)
}
// 暴露组件
export default ddInput