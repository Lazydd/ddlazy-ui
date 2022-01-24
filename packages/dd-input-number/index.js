// 导入组件
import ddInputNumber from "./src";
// 为组件提供install安装方法，供按需引入
ddInputNumber.install = Vue => {
    Vue.component(ddInputNumber.name, ddInputNumber)
}
// 暴露组件
export default ddInputNumber