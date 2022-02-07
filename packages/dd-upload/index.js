// 导入组件
import ddUpload from "./src";
// 为组件提供install安装方法，供按需引入
ddUpload.install = Vue => {
    Vue.component(ddUpload.name, ddUpload)
}
// 暴露组件
export default ddUpload