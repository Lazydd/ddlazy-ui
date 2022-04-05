// 导入组件
import ddUeditor from "./src";
// 为组件提供install安装方法，供按需引入
ddUeditor.install = Vue => {
    Vue.component(ddUeditor.name, ddUeditor)
}
// 暴露组件
export default ddUeditor