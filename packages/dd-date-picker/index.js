// 导入组件
import ddDatePicker from "./src";
// 为组件提供install安装方法，供按需引入
ddDatePicker.install = Vue => {
    Vue.component(ddDatePicker.name, ddDatePicker)
}
// 暴露组件
export default ddDatePicker