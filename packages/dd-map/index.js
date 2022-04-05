// 导入组件
import ddMap from "./src";
// 为组件提供install安装方法，供按需引入
ddMap.install = Vue => {
    Vue.component(ddMap.name, ddMap)
}
// 暴露组件
export default ddMap