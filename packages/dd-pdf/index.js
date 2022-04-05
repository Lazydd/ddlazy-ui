// 导入组件
import ddPdf from "./src";
// 为组件提供install安装方法，供按需引入
ddPdf.install = Vue => {
    Vue.component(ddPdf.name, ddPdf)
}
// 暴露组件
export default ddPdf