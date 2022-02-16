// 导入组件
import ddAvatar from "./src";
// 为组件提供install安装方法，供按需引入
ddAvatar.install = Vue => {
    Vue.component(ddAvatar.name, ddAvatar)
}
// 暴露组件
export default ddAvatar