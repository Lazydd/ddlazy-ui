// 导入组件
import ddSwitch from "./src";
// 为组件提供install安装方法，供按需引入
ddSwitch.install = Vue => {
    Vue.component(ddSwitch.name, ddSwitch)
}
// 暴露组件
export default ddSwitch