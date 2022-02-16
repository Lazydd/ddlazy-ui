import Vue from "vue";

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
import ddSelect from "./dd-select";
import ddOption from "./dd-option";
import ddScroll from "./dd-scroll";
import ddSwitch from "./dd-switch";
import ddSlider from "./dd-slider";
import ddTag from "./dd-tag";
import ddProgress from "./dd-progress";
import ddUpload from "./dd-upload";
import Message from "./dd-message";
import ddColorPicker from "./dd-color-picker";
import ddTooltip from "./dd-tooltip";
import ddPagination from "./dd-pagination";
import ddBadge from "./dd-badge";
import ddAvatar from "./dd-avatar";
import "./css/global.css";
Vue.use(Message);
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
    ddSelect,
    ddOption,
    ddScroll,
    ddSwitch,
    ddSlider,
    ddTag,
    ddProgress,
    ddUpload,
    ddColorPicker,
    ddTooltip,
    ddPagination,
    ddBadge,
    ddAvatar,
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
    ddSelect,
    ddOption,
    ddScroll,
    ddSwitch,
    ddSlider,
    ddTag,
    ddProgress,
    ddUpload,
    ddColorPicker,
    ddTooltip,
    ddPagination,
    ddBadge,
    ddAvatar,
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
    ddSelect,
    ddOption,
    ddScroll,
    ddSwitch,
    ddSlider,
    ddTag,
    ddProgress,
    ddUpload,
    ddColorPicker,
    ddTooltip,
    ddPagination,
    ddBadge,
    ddAvatar,
};
