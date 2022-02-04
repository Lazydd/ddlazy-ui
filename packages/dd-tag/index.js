// 导入组件
import ddTag from "./src";
// 为组件提供install安装方法，供按需引入
ddTag.install = Vue => {
    Vue.component(ddTag.name, ddTag)
}
// 暴露组件
export default ddTag