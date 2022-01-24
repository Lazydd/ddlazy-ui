// 导入组件
import ddSelect from "./src";
// 为组件提供install安装方法，供按需引入
ddSelect.install = Vue => {
    Vue.component(ddSelect.name, ddSelect)
}
// 暴露组件
export default ddSelect