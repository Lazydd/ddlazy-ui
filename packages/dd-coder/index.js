// 导入组件
import ddCoder from "./src";
// 为组件提供install安装方法，供按需引入
ddCoder.install = Vue => {
    Vue.component(ddCoder.name, ddCoder)
}
// 暴露组件
export default ddCoder