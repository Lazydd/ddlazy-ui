// 导入组件
import ddNumber from "./src";
// 为组件提供install安装方法，供按需引入
ddNumber.install = Vue => {
    Vue.component(ddNumber.name, ddNumber)
}
// 暴露组件
export default ddNumber