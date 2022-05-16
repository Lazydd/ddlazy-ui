import Vue from "vue";

import ddBlock from "./dd-block";
import ddDescribe from "./dd-describe";
import ddFooter from "./dd-footer";
import ddCoder from "./dd-coder";

import ddButton from "./dd-button";
import ddIcon from "./dd-icon";
import ddLink from "./dd-link";
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
import ddLoading from "./dd-loading";
import ddMessageBox from "./dd-message-box";
import ddTabs from "./dd-tabs";
import ddTabPane from "./dd-tab-pane";
import ddBreadcrumb from "./dd-breadcrumb";
import ddBreadcrumbItem from "./dd-breadcrumb-item";
import ddCard from "./dd-card";
import ddDivider from "./dd-divider";
import ddBacktop from "./dd-backtop";
import ddDialog from "./dd-dialog";
import ddForm from "./dd-form";
import ddFormItem from "./dd-form-item";
import ddEmpty from "./dd-empty";
import ddTree from "./dd-tree";
import ddSkeleton from "./dd-skeleton";
import ddCollapse from "./dd-collapse";
import ddCollapseItem from "./dd-collapse-item";
import ddPopconfirm from "./dd-popconfirm";
import ddSteps from "./dd-steps";
import ddStep from "./dd-step";
import ddTransfer from "./dd-transfer";
import ddCarousel from "./dd-carousel";
import ddCarouselItem from "./dd-carousel-item";
import ddTimeline from "./dd-timeline";
import ddTimelineItem from "./dd-timeline-item";
import ddDropdown from "./dd-dropdown";
import ddDropdownMenu from "./dd-dropdown-menu";
import ddDropdownItem from "./dd-dropdown-item";
import ddTimeSelect from "./dd-time-select";
import ddTransition from "./dd-transition";
import ddTimePicker from "./dd-time-picker";
import ddCascader from "./dd-cascader";
import ddImage from "./dd-image";
import ddDatePicker from "./dd-date-picker";
import ddEcharts from "./dd-echarts";
import ddUeditor from "./dd-ueditor";
import ddMap from "./dd-map";
import "./css/global.less";
Vue.use(Message);
Vue.use(ddLoading);
Vue.use(ddMessageBox);
const components = [
    ddBlock,
    ddDescribe,
    ddFooter,
    ddCoder,
    ddButton,
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
    ddTabs,
    ddTabPane,
    ddBreadcrumb,
    ddBreadcrumbItem,
    ddCard,
    ddDivider,
    ddBacktop,
    ddDialog,
    ddForm,
    ddFormItem,
    ddEmpty,
    ddTree,
    ddSkeleton,
    ddCollapse,
    ddCollapseItem,
    ddPopconfirm,
    ddSteps,
    ddStep,
    ddTransfer,
    ddCarousel,
    ddCarouselItem,
    ddTimeline,
    ddTimelineItem,
    ddDropdown,
    ddDropdownMenu,
    ddDropdownItem,
    ddTimeSelect,
    ddTransition,
    ddTimePicker,
    ddCascader,
    ddImage,
    ddDatePicker,
    ddEcharts,
    ddUeditor,
    ddMap,
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
    ddBlock,
    ddDescribe,
    ddFooter,
    ddCoder,
    ddButton,
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
    ddTabs,
    ddTabPane,
    ddBreadcrumb,
    ddBreadcrumbItem,
    ddCard,
    ddDivider,
    ddBacktop,
    ddDialog,
    ddForm,
    ddFormItem,
    ddEmpty,
    ddTree,
    ddSkeleton,
    ddCollapse,
    ddCollapseItem,
    ddPopconfirm,
    ddSteps,
    ddStep,
    ddTransfer,
    ddCarousel,
    ddCarouselItem,
    ddTimeline,
    ddTimelineItem,
    ddDropdown,
    ddDropdownMenu,
    ddDropdownItem,
    ddTimeSelect,
    ddTransition,
    ddTimePicker,
    ddCascader,
    ddImage,
    ddDatePicker,
    ddEcharts,
    ddUeditor,
    ddMap,
};

export default {
    // 导出的对象必须具有install，才能被Vue.use()方法安装
    install,
    ddBlock,
    ddDescribe,
    ddFooter,
    ddCoder,
    ddButton,
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
    ddTabs,
    ddTabPane,
    ddBreadcrumb,
    ddBreadcrumbItem,
    ddCard,
    ddDivider,
    ddBacktop,
    ddDialog,
    ddForm,
    ddFormItem,
    ddEmpty,
    ddTree,
    ddSkeleton,
    ddCollapse,
    ddCollapseItem,
    ddPopconfirm,
    ddSteps,
    ddStep,
    ddTransfer,
    ddCarousel,
    ddCarouselItem,
    ddTimeline,
    ddTimelineItem,
    ddDropdown,
    ddDropdownMenu,
    ddDropdownItem,
    ddTimeSelect,
    ddTransition,
    ddTimePicker,
    ddCascader,
    ddImage,
    ddDatePicker,
    ddEcharts,
    ddUeditor,
    ddMap,
};
