// 导入组件
import ddCascader from "./src";
// 为组件提供install安装方法，供按需引入
ddCascader.install = Vue => {
    Vue.component(ddCascader.name, ddCascader)
}
// 暴露组件
export default ddCascader