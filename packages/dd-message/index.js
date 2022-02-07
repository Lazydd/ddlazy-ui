// 导入组件
import ddMessage from "./src";
// 为组件提供install安装方法，供按需引入
ddMessage.install = Vue => {
    Vue.component(ddMessage.name, ddMessage)
}
// 暴露组件
export default ddMessage