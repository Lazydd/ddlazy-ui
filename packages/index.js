import ddButton from "./dd-botton";
import ddIcon from "./dd-icon";
import ddLink from "./dd-link";
import ddBlock from "./dd-block";
import ddDescribe from "./dd-describe";
import ddRow from "./dd-row";
import ddCol from "./dd-col";
import ddTable from "./dd-table";
import ddTableColumn from "./dd-table-column";
import ddRadio from "./dd-radio";
import ddRadioGroup from "./dd-radio-group";
import ddRadioButton from "./dd-radio-button";
import ddCheckbox from "./dd-checkbox";
import ddCheckboxGroup from "./dd-checkbox-group";
import ddCheckboxButton from "./dd-checkbox-button";
import ddInput from "./dd-input";
import ddInputNumber from "./dd-input-number";
import "./css/global.css";

const components = [
    ddButton,
    ddIcon,
    ddLink,
    ddBlock,
    ddDescribe,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
    ddRadio,
    ddRadioGroup,
    ddRadioButton,
    ddCheckbox,
    ddCheckboxGroup,
    ddCheckboxButton,
    ddInput,
    ddInputNumber,
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
    ddLink,
    ddBlock,
    ddDescribe,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
    ddRadio,
    ddRadioGroup,
    ddRadioButton,
    ddCheckbox,
    ddCheckboxGroup,
    ddCheckboxButton,
    ddInput,
    ddInputNumber,
};

export default {
    // 导出的对象必须具有install，才能被Vue.use()方法安装
    install,
    // 具体组件列表
    ddButton,
    ddBlock,
    ddDescribe,
    ddIcon,
    ddLink,
    ddRow,
    ddCol,
    ddTable,
    ddTableColumn,
    ddRadio,
    ddRadioGroup,
    ddRadioButton,
    ddCheckbox,
    ddCheckboxGroup,
    ddCheckboxButton,
    ddInput,
    ddInputNumber,
};
