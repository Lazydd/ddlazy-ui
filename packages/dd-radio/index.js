// 导入组件
import ddRadio from "./src";
// 为组件提供install安装方法，供按需引入
ddRadio.install = Vue => {
    Vue.component(ddRadio.name, ddRadio)
}
// 暴露组件
export default ddRadio