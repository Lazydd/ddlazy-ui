// 导入组件
import ddCarousel from "./src";
// 为组件提供install安装方法，供按需引入
ddCarousel.install = Vue => {
    Vue.component(ddCarousel.name, ddCarousel)
}
// 暴露组件
export default ddCarousel