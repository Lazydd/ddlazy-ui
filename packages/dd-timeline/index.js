// 导入组件
import ddTimeline from "./src";
// 为组件提供install安装方法，供按需引入
ddTimeline.install = Vue => {
    Vue.component(ddTimeline.name, ddTimeline)
}
// 暴露组件
export default ddTimeline