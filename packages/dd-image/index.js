// 导入组件
import ddImage from "./src";
// 为组件提供install安装方法，供按需引入
ddImage.install = Vue => {
    Vue.component(ddImage.name, ddImage)
}
// 暴露组件
export default ddImage