// 导入组件
import ddBadge from "./src";
// 为组件提供install安装方法，供按需引入
ddBadge.install = Vue => {
    Vue.component(ddBadge.name, ddBadge)
}
// 暴露组件
export default ddBadge