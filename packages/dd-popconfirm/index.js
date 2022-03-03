// 导入组件
import ddPopconfirm from "./src";
// 为组件提供install安装方法，供按需引入
ddPopconfirm.install = Vue => {
    Vue.component(ddPopconfirm.name, ddPopconfirm)
}
// 暴露组件
export default ddPopconfirm