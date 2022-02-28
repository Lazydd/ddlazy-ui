// 导入组件
import ddEmpty from "./src";
// 为组件提供install安装方法，供按需引入
ddEmpty.install = Vue => {
    Vue.component(ddEmpty.name, ddEmpty)
}
// 暴露组件
export default ddEmpty