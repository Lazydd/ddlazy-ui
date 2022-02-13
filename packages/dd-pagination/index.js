// 导入组件
import ddPagination from "./src";
// 为组件提供install安装方法，供按需引入
ddPagination.install = Vue => {
    Vue.component(ddPagination.name, ddPagination)
}
// 暴露组件
export default ddPagination