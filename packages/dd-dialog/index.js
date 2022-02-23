// 导入组件
import ddDialog from "./src";
// 为组件提供install安装方法，供按需引入
ddDialog.install = Vue => {
    Vue.component(ddDialog.name, ddDialog)
}
// 暴露组件
export default ddDialog