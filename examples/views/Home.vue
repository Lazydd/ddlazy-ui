<template>
    <div class="page">
        <transition name="fale">
            <article v-if="isShow">
                <ul v-for="menu in menuList" :key="menu.label">
                    <h4>{{ menu.label }}</h4>
                    <li
                        class="submenu"
                        v-for="submenu in menu.children"
                        :key="submenu.label"
                        @click="changeMenu(submenu)"
                    >
                        <a :class="{ active: submenu.path == activeMenu }">
                            {{ submenu.label }}
                        </a>
                    </li>
                </ul>
            </article>
        </transition>
        <main class="main-box">
            <transition name="dd-fade"><router-view /></transition>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code1: "npm i ddlazy-ui",
            isShow: true,
            value: false,
            menuList: [
                {
                    label: "指南",
                    children: [
                        {
                            label: "安装",
                            path: "/component/installation",
                        },
                        {
                            label: "快速上手",
                            path: "/component/quickstart",
                        },
                        {
                            label: "内置过渡动画",
                            path: "/component/transition",
                        },
                    ],
                },
                {
                    label: "Basic",
                    children: [
                        {
                            label: "Layout 布局",
                            path: "/component/layout",
                        },
                        {
                            label: "Icon 图标",
                            path: "/component/icon",
                        },
                        {
                            label: "Button 按钮",
                            path: "/component/button",
                        },
                        {
                            label: "Link 文字链接",
                            path: "/component/link",
                        },
                    ],
                },
                {
                    label: "Form",
                    children: [
                        {
                            label: "Radio 单选框",
                            path: "/component/radio",
                        },
                        {
                            label: "Checkbox 多选框",
                            path: "/component/checkbox",
                        },
                        {
                            label: "Input 输入框",
                            path: "/component/input",
                        },
                        {
                            label: "InputNumber 计数器",
                            path: "/component/input-number",
                        },
                        {
                            label: "Number 数字滚动",
                            path: "/component/number",
                        },
                        {
                            label: "Select 选择器",
                            path: "/component/select",
                        },
                        {
                            label: "Cascader 级联选择器",
                            path: "/component/cascader",
                        },
                        {
                            label: "Switch 开关",
                            path: "/component/switch",
                        },
                        {
                            label: "Slider 滑块",
                            path: "/component/slider",
                        },
                        {
                            label: "TimePicker 时间选择器",
                            path: "/component/timeSelect",
                        },
                        {
                            label: "DatePicker 日期选择器",
                            path: "/component/datePicker",
                        },
                        {
                            label: "Upload 上传",
                            path: "/component/upload",
                        },
                        {
                            label: "Transfer 穿梭框",
                            path: "/component/transfer",
                        },
                        {
                            label: "Form 表单",
                            path: "/component/form",
                        },
                    ],
                },
                {
                    label: "Data",
                    children: [
                        {
                            label: "Table 表格",
                            path: "/component/table",
                        },
                        {
                            label: "Tag 标签",
                            path: "/component/tag",
                        },
                        {
                            label: "Progress 进度条",
                            path: "/component/progress",
                        },
                        {
                            label: "Tree 树形控件",
                            path: "/component/tree",
                        },
                        {
                            label: "ColorPicker 颜色选择器",
                            path: "/component/color-picker",
                        },
                        {
                            label: "Pagination 分页",
                            path: "/component/pagination",
                        },
                        {
                            label: "Badge 标记",
                            path: "/component/badge",
                        },
                        {
                            label: "Avatar 头像",
                            path: "/component/avatar",
                        },
                        {
                            label: "Skeleton 骨架屏",
                            path: "/component/skeleton",
                        },
                        {
                            label: "Empty 空状态",
                            path: "/component/empty",
                        },
                    ],
                },
                {
                    label: "Notice",
                    children: [
                        {
                            label: "Loading 加载",
                            path: "/component/loading",
                        },
                        {
                            label: "Message 消息提示",
                            path: "/component/message",
                        },
                        {
                            label: "MessageBox 弹框",
                            path: "/component/message-box",
                        },
                    ],
                },
                {
                    label: "Navigation",
                    children: [
                        {
                            label: "NavMenu 导航菜单",
                            path: "/component/menu",
                        },
                        {
                            label: "Tabs 标签页",
                            path: "/component/tabs",
                        },
                        {
                            label: "Breadcrumb 面包屑",
                            path: "/component/breadcrumb",
                        },
                        {
                            label: "Dropdown 下拉菜单",
                            path: "/component/dropdown",
                        },
                        {
                            label: "Steps 步骤条",
                            path: "/component/steps",
                        },
                    ],
                },
                {
                    label: "Others",
                    children: [
                        {
                            label: "Dialog 对话框",
                            path: "/component/dialog",
                        },
                        {
                            label: "Tooltip 文字提示",
                            path: "/component/tooltip",
                        },
                        // {
                        //     label: "Popover 弹出框",
                        //     path: "#/component/popover",
                        // },
                        {
                            label: "Popconfirm 气泡确认框",
                            path: "/component/popconfirm",
                        },
                        {
                            label: "Card 卡片",
                            path: "/component/card",
                        },
                        {
                            label: "Carousel 走马灯",
                            path: "/component/carousel",
                        },
                        {
                            label: "Collapse 折叠面板",
                            path: "/component/collapse",
                        },
                        {
                            label: "Timeline 时间线",
                            path: "/component/timeline",
                        },
                        {
                            label: "Divider 分割线",
                            path: "/component/divider",
                        },
                        {
                            label: "Scroll 滚动条",
                            path: "/component/scroll",
                        },
                        {
                            label: "Image 图片",
                            path: "/component/image",
                        },
                        {
                            label: "Backtop 回到顶部",
                            path: "/component/Backtop",
                        },
                        {
                            label: "InfiniteScroll 无限滚动",
                            path: "/component/infiniteScroll",
                        },
                        {
                            label: "VirtualizedList 虚拟滚动列表",
                            path: "/component/virtualized-list",
                        },
                    ],
                },
                {
                    label: "Utils",
                    children: [
                        {
                            label: "Echarts 图表",
                            path: "/component/echarts",
                        },
                        {
                            label: "Tinymce 富文本编辑器",
                            path: "/component/tinymce",
                        },
                        {
                            label: "Map 地图",
                            path: "/component/map",
                        },
                        {
                            label: "Signature 签名",
                            path: "/component/signature",
                        },
                        {
                            label: "chatGPT",
                            path: "/component/chatGPT",
                        },
                        {
                            label: "PrintArea 打印",
                            path: "/component/printArea",
                        },
                    ],
                },
            ],
            activeMenu: "" + this.$route.path || "/component/quickstart",
        };
    },
    methods: {
        changeMenu(menu) {
            this.activeMenu = menu.path;
            this.$router.push(menu);
        },
        getsize() {
            this.size = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            this.isShow = this.size.width < 1024 ? false : true;
        },
    },
    mounted() {
        this.getsize();
        window.addEventListener("resize", () => {
            this.getsize();
        });
    },
    watch: {
        $route(menu) {
            this.activeMenu = menu.path;
        },
    },
};
</script>

<style lang="less" scoped>
.night {
    background: rgb(30, 30, 30) !important;
    :deep(._title) {
        color: #999;
        transition: all 1s;
    }
    :deep(.code) {
        border-left: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        transition: all 1s;
    }
    :deep(header) {
        background-color: rgb(30, 30, 30) !important;
        transition: all 1s;
    }
    transition: all 1s;
}
a {
    text-decoration: none;
    outline: none;
    border: none;
}
a:-webkit-any-link:focus {
    outline: none !important;
    outline-offset: 0px !important;
}
a:focus {
    outline: none !important;
    outline-offset: 0px !important;
}

.page {
    display: flex;
    box-sizing: border-box;
    height: calc(100vh - 80px);
    margin-top: 80px;
    // padding: 0 80px;
    padding-left: 80px;
    article {
        width: 240px;
        height: 100%;
        box-sizing: border-box;
        overflow: scroll;
        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            /* 滚动条里面小方块 */
            background: #ddd;
            border-radius: 5px;
            height: 10px;
        }
        // position: fixed;
        // top: 0;
        // bottom: 0;
        h4 {
            font-size: 12px;
            color: #999;
            line-height: 26px;
            margin-top: 15px;
        }
        .submenu {
            a {
                display: block;
                height: 40px;
                color: #444;
                line-height: 40px;
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 400;
                cursor: pointer;
                &:hover,
                &:focus {
                    color: #409eff;
                }
            }
            .active {
                color: #409eff;
            }
        }
    }
    main {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        flex: 1;
        padding: 20px 60px 100px;

        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            /* 滚动条里面小方块 */
            background: #ddd;
            border-radius: 5px;
            height: 10px;
        }
    }
}

.fale-enter-active,
.fale-leave-active {
    transition: all 0.5s linear;
}
.fale-enter,
.fale-leave-to {
    transform: translateX(-200%);
}
</style>
