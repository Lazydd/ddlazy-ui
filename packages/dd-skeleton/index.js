// 导入组件
import ddSkeleton from "./src";
// 为组件提供install安装方法，供按需引入
ddSkeleton.install = Vue => {
    Vue.component(ddSkeleton.name, ddSkeleton)
}
// 暴露组件
export default ddSkeleton