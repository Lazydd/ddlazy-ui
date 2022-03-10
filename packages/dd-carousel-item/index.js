// 导入组件
import ddCarouselItem from "./src";
// 为组件提供install安装方法，供按需引入
ddCarouselItem.install = Vue => {
    Vue.component(ddCarouselItem.name, ddCarouselItem)
}
// 暴露组件
export default ddCarouselItem