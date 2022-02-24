// 导入组件
import ddButton from "./src";
// 为组件提供install安装方法，供按需引入
ddButton.install = Vue => {
    Vue.component(ddButton.name, ddButton)
}
// 暴露组件
export default ddButton