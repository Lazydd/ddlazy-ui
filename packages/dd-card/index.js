// 导入组件
import ddCard from "./src";
// 为组件提供install安装方法，供按需引入
ddCard.install = Vue => {
    Vue.component(ddCard.name, ddCard)
}
// 暴露组件
export default ddCard