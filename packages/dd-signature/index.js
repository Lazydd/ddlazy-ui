// 导入组件
import ddSignature from "./src";
// 为组件提供install安装方法，供按需引入
ddSignature.install = Vue => {
    Vue.component(ddSignature.name, ddSignature)
}
// 暴露组件
export default ddSignature