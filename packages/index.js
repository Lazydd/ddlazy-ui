import ddButton from "./dd-botton";
import ddIcon from "./dd-icon";
import ddBlock from "./dd-block";
import ddDescribe from "./dd-describe";
import ddRow from "./dd-row";
import ddCol from "./dd-col";
import ddTable from "./dd-table";
import ddTableColumn from "./dd-table-column";
import "./css/global.css";

const components = [
    ddButton,
    ddIcon,
    ddBlock,
    ddDescribe,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
];

const install = function (Vue) {
    // 判断是否安装，安装过就不继续往下执行
    if (install.installed) return (install.installed = true);
    // 遍历注册所有组件
    components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export {
    install,
    ddButton,
    ddIcon,
    ddBlock,
    ddDescribe,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
};

export default {
    // 导出的对象必须具有install，才能被Vue.use()方法安装
    install,
    // 具体组件列表
    ddButton,
    ddBlock,
    ddDescribe,
    ddIcon,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
};
