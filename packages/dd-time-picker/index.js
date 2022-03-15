// 导入组件
import ddTimePicker from "./src";
// 为组件提供install安装方法，供按需引入
ddTimePicker.install = Vue => {
    Vue.component(ddTimePicker.name, ddTimePicker)
}
// 暴露组件
export default ddTimePicker