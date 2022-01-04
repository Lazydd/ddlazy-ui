// 导入组件
import ddBlock from "./src";
// 为组件提供install安装方法，供按需引入
ddBlock.install = Vue => {
    Vue.component(ddBlock.name, ddBlock)
}
// 暴露组件
export default ddBlock