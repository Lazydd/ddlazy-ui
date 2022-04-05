// 导入组件
import ddEcharts from "./src";
// 为组件提供install安装方法，供按需引入
ddEcharts.install = Vue => {
    Vue.component(ddEcharts.name, ddEcharts)
}
// 暴露组件
export default ddEcharts