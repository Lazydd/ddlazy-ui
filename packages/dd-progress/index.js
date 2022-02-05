// 导入组件
import ddIcon from "./src";
// 为组件提供install安装方法，供按需引入
ddIcon.install = Vue => {
    Vue.component(ddIcon.name, ddIcon)
}
// 暴露组件
export default ddIcon