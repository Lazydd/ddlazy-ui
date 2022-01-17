// 导入组件
import ddCheckbox from "./src";
// 为组件提供install安装方法，供按需引入
ddCheckbox.install = Vue => {
    Vue.component(ddCheckbox.name, ddCheckbox)
}
// 暴露组件
export default ddCheckbox