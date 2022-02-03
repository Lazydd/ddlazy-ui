// 导入组件
import ddSlider from "./src";
// 为组件提供install安装方法，供按需引入
ddSlider.install = Vue => {
    Vue.component(ddSlider.name, ddSlider)
}
// 暴露组件
export default ddSlider