// 导入组件
import ddRadioButton from "./src";
// 为组件提供install安装方法，供按需引入
ddRadioButton.install = Vue => {
    Vue.component(ddRadioButton.name, ddRadioButton)
}
// 暴露组件
export default ddRadioButton