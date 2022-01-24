// 导入组件
import ddOption from "./src";
// 为组件提供install安装方法，供按需引入
ddOption.install = Vue => {
    Vue.component(ddOption.name, ddOption)
}
// 暴露组件
export default ddOption