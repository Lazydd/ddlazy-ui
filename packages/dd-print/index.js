// 导入组件
import ddPrint from "./src";
// 为组件提供install安装方法，供按需引入
ddPrint.install = Vue => {
    Vue.component(ddPrint.name, ddPrint)
}
// 暴露组件
export default ddPrint