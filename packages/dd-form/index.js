// 导入组件
import ddForm from "./src";
// 为组件提供install安装方法，供按需引入
ddForm.install = Vue => {
    Vue.component(ddForm.name, ddForm)
}
// 暴露组件
export default ddForm