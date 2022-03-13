// 导入组件
import ddTimelineItem from "./src";
// 为组件提供install安装方法，供按需引入
ddTimelineItem.install = Vue => {
    Vue.component(ddTimelineItem.name, ddTimelineItem)
}
// 暴露组件
export default ddTimelineItem