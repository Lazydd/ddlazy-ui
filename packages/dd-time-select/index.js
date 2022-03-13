// 导入组件
import ddTimeSelect from "./src";
// 为组件提供install安装方法，供按需引入
ddTimeSelect.install = Vue => {
    Vue.component(ddTimeSelect.name, ddTimeSelect)
}
// 暴露组件
export default ddTimeSelect