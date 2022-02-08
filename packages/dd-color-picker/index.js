// 导入组件
import ddColorPicker from "./src";
// 为组件提供install安装方法，供按需引入
ddColorPicker.install = Vue => {
    Vue.component(ddColorPicker.name, ddColorPicker)
}
// 暴露组件
export default ddColorPicker