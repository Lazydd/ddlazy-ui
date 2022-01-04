// 导入组件
import ddDescribe from "./src";
// 为组件提供install安装方法，供按需引入
ddDescribe.install = Vue => {
    Vue.component(ddDescribe.name, ddDescribe)
}
// 暴露组件
export default ddDescribe