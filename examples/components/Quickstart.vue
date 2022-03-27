<template>
    <div class="page-box">
        <h2 class="_title">快速上手</h2>
        <p class="_descript">本节将介绍如何在项目中使用 ddlazy-ui</p>
        <h2 class="_title">引入 ddlazy-ui</h2>
        <p class="_descript">
            你可以引入整个 ddlazy-ui，或是根据需要仅引入部分组件
        </p>
        <h4 class="_subTitle">完整引入</h4>
        <dd-coder :coder="code1"></dd-coder>
        <h4 class="_subTitle">按需引入</h4>
        <dd-coder :coder="code2"></dd-coder>
        <dd-footer left="快速上手" right="Layout 布局"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Quickstart",
    data() {
        return {
            code1: `
				<div>import Vue from 'vue';</div>
				<div>import ddlazyui from 'ddlazyui';</div>
				<div>import 'ddlazyui/lib/ddlazy-ui.css';</div>
				<div>import App from './App.vue';</div>
				<br />
				<div>Vue.use(ddlazyui);</div>
				<br />
				<div>new Vue({</div>
				<div>el: '#app',</div>
				<div>render: h => h(App)</div>
				<div>});</div>
        	`,
            code2: `
				<div>import Vue from 'vue';</div>
				<div>import {</div>
					<div>ddButton,</div>
					<div>ddIcon,</div>
					<div>ddLink,</div>
					<div>ddRow,</div>
					<div>ddCol,</div>
					<div>ddTable,</div>
					<div>ddTableColumn,</div>
					<div>ddRadio,</div>
					<div>ddRadioGroup,</div>
					<div>ddRadioButton,</div>
					<div>ddCheckbox,</div>
					<div>ddCheckboxGroup,</div>
					<div>ddCheckboxButton,</div>
					<div>ddInput,</div>
					<div>ddInputNumber,</div>
					<div>ddSelect,</div>
					<div>ddOption,</div>
					<div>ddScroll,</div>
					<div>ddSwitch,</div>
					<div>ddSlider,</div>
					<div>ddTag,</div>
					<div>ddProgress,</div>
					<div>ddUpload,</div>
					<div>ddColorPicker,</div>
					<div>ddTooltip,</div>
					<div>ddPagination,</div>
					<div>ddBadge,</div>
					<div>ddAvatar,</div>
					<div>ddTabs,</div>
					<div>ddTabPane,</div>
					<div>ddBreadcrumb,</div>
					<div>ddBreadcrumbItem,</div>
					<div>ddCard,</div>
					<div>ddDivider,</div>
					<div>ddBacktop,</div>
					<div>ddDialog,</div>
					<div>ddForm,</div>
					<div>ddFormItem,</div>
					<div>ddEmpty,</div>
					<div>ddTree,</div>
					<div>ddSkeleton,</div>
					<div>ddCollapse,</div>
					<div>ddCollapseItem,</div>
					<div>ddPopconfirm,</div>
					<div>ddSteps,</div>
					<div>ddStep,</div>
					<div>ddTransfer,</div>
					<div>ddCarousel,</div>
					<div>ddCarouselItem,</div>
					<div>ddTimeline,</div>
					<div>ddTimelineItem,</div>
					<div>ddDropdown,</div>
					<div>ddDropdownMenu,</div>
					<div>ddDropdownItem,</div>
					<div>ddTimeSelect,</div>
					<div>ddTransition,</div>
					<div>ddTimePicker,</div>
					<div>ddCascader,</div>

					<div>Message,</div>
					<div>ddLoading,</div>
					<div>ddMessageBox</div>
				<div>} from 'ddlazy-ui';</div>
				<br />
				<div>ddButton,</div>
					<div>Vue.use(ddIcon),</div>
					<div>Vue.use(ddLink),</div>
					<div>Vue.use(ddRow),</div>
					<div>Vue.use(ddCol),</div>
					<div>Vue.use(ddTable),</div>
					<div>Vue.use(ddTableColumn),</div>
					<div>Vue.use(ddRadio),</div>
					<div>Vue.use(ddRadioGroup),</div>
					<div>Vue.use(ddRadioButton),</div>
					<div>Vue.use(ddCheckbox),</div>
					<div>Vue.use(ddCheckboxGroup),</div>
					<div>Vue.use(ddCheckboxButton),</div>
					<div>Vue.use(ddInput),</div>
					<div>Vue.use(ddInputNumber),</div>
					<div>Vue.use(ddSelect),</div>
					<div>Vue.use(ddOption),</div>
					<div>Vue.use(ddScroll),</div>
					<div>Vue.use(ddSwitch),</div>
					<div>Vue.use(ddSlider),</div>
					<div>Vue.use(ddTag),</div>
					<div>Vue.use(ddProgress),</div>
					<div>Vue.use(ddUpload),</div>
					<div>Vue.use(ddColorPicker),</div>
					<div>Vue.use(ddTooltip),</div>
					<div>Vue.use(ddPagination),</div>
					<div>Vue.use(ddBadge),</div>
					<div>Vue.use(ddAvatar),</div>
					<div>Vue.use(ddTabs),</div>
					<div>Vue.use(ddTabPane),</div>
					<div>Vue.use(ddBreadcrumb),</div>
					<div>Vue.use(ddBreadcrumbItem),</div>
					<div>Vue.use(ddCard),</div>
					<div>Vue.use(ddDivider),</div>
					<div>Vue.use(ddBacktop),</div>
					<div>Vue.use(ddDialog),</div>
					<div>Vue.use(ddForm),</div>
					<div>Vue.use(ddFormItem),</div>
					<div>Vue.use(ddEmpty),</div>
					<div>Vue.use(ddTree),</div>
					<div>Vue.use(ddSkeleton),</div>
					<div>Vue.use(ddCollapse),</div>
					<div>Vue.use(ddCollapseItem),</div>
					<div>Vue.use(ddPopconfirm),</div>
					<div>Vue.use(ddSteps),</div>
					<div>Vue.use(ddStep),</div>
					<div>Vue.use(ddTransfer),</div>
					<div>Vue.use(ddCarousel),</div>
					<div>Vue.use(ddCarouselItem),</div>
					<div>Vue.use(ddTimeline),</div>
					<div>Vue.use(ddTimelineItem),</div>
					<div>Vue.use(ddDropdown),</div>
					<div>Vue.use(ddDropdownMenu),</div>
					<div>Vue.use(ddDropdownItem),</div>
					<div>Vue.use(ddTimeSelect),</div>
					<div>Vue.use(ddTransition),</div>
					<div>Vue.use(ddTimePicker),</div>
					<div>Vue.use(ddCascader),</div>
					<br />
					<div>Vue.use(Message);</div>
					<div>Vue.use(ddLoading);</div>
					<div>Vue.use(ddMessageBox);</div>
					
        	`,
        };
    },
};
</script>

<style lang="less" scoped></style>
