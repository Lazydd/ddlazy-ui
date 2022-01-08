// 导入组件
import ddRadioGroup from "./src";
// 为组件提供install安装方法，供按需引入
ddRadioGroup.install = Vue => {
    Vue.component(ddRadioGroup.name, ddRadioGroup)
}
// 暴露组件
export default ddRadioGroup