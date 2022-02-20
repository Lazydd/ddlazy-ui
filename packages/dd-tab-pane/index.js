// 导入组件
import ddTabPane from "./src";
// 为组件提供install安装方法，供按需引入
ddTabPane.install = Vue => {
    Vue.component(ddTabPane.name, ddTabPane)
}
// 暴露组件
export default ddTabPane