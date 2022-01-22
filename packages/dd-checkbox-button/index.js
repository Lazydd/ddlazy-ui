// 导入组件
import ddCheckboxButton from "./src";
// 为组件提供install安装方法，供按需引入
ddCheckboxButton.install = Vue => {
    Vue.component(ddCheckboxButton.name, ddCheckboxButton)
}
// 暴露组件
export default ddCheckboxButton