<template>
    <div class="container">
        <header>
            <!-- <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre> -->
            <div class="tit">
                <svg class="icon" aria-hidden="true" :style="{ fill: color }">
                    <use :xlink:href="`#${icon}`"></use>
                </svg>
                <h2>ddlazy-ui</h2>
            </div>
            <ul class="nav">
                <li
                    class="navList"
                    v-for="nav in navList"
                    :key="nav.label"
                    :class="{ isActive: nav.label == activeNav }"
                    @click="changeNav(nav)"
                >
                    {{ nav.label }}
                </li>
            </ul>
        </header>
        <div class="page">
            <article>
                <ul v-for="menu in menuList" :key="menu.label">
                    <h4>{{ menu.label }}</h4>
                    <li
                        class="submenu"
                        v-for="submenu in menu.children"
                        :key="submenu.label"
                        @click="changeMenu(submenu)"
                    >
                        <a
                            :class="{ active: submenu.path == activeMenu }"
                            a
                            :href="submenu.path"
                            >{{ submenu.label }}</a
                        >
                    </li>
                </ul>
            </article>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: "rgb(70, 159, 252)",
            icon: "icon-salescenter",
            code1: "npm i ddlazy-ui",
            navList: [
                {
                    label: "指南",
                },
                {
                    label: "组件",
                },
            ],
            menuList: [
                {
                    label: "指南",
                    children: [
                        {
                            label: "快速上手",
                            path: "#/component/quickstart",
                        },
                    ],
                },
                {
                    label: "Basic",
                    children: [
                        {
                            label: "Layout 布局",
                            path: "#/component/layout",
                        },
                        {
                            label: "Icon 图标",
                            path: "#/component/icon",
                        },
                        {
                            label: "Button 按钮",
                            path: "#/component/button",
                        },
                        {
                            label: "Link 文字链接",
                            path: "#/component/link",
                        },
                    ],
                },
                {
                    label: "Form",
                    children: [
                        {
                            label: "Radio 单选框",
                            path: "#/component/radio",
                        },
                        {
                            label: "Checkbox 多选框",
                            path: "#/component/checkbox",
                        },
                        {
                            label: "Input 输入框",
                            path: "#/component/input",
                        },
                        {
                            label: "InputNumber 计数器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Select 选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Cascader 级联选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Input 开关",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Slider 滑块",
                            path: "/component/quickstart",
                        },
                    ],
                },
                {
                    label: "Data",
                    children: [
                        {
                            label: "Table 表格",
                            path: "#/component/table",
                        },
                        {
                            label: "Tag 标签",
                            path: "#/component/tag",
                        },
                        {
                            label: "Input 输入框",
                            path: "/component/quickstart",
                        },
                        {
                            label: "InputNumber 计数器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Select 选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Cascader 级联选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Input 开关",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Slider 滑块",
                            path: "/component/quickstart",
                        },
                    ],
                },
                {
                    label: "Others",
                    children: [
                        {
                            label: "Radio 单选框",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Checkbox 多选框",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Input 输入框",
                            path: "/component/quickstart",
                        },
                        {
                            label: "InputNumber 计数器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Select 选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Cascader 级联选择器",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Input 开关",
                            path: "/component/quickstart",
                        },
                        {
                            label: "Slider 滑块",
                            path: "/component/quickstart",
                        },
                    ],
                },
            ],
            activeNav: "组件",
            activeMenu: "#" + this.$route.path || "#/component/quickstart",
        };
    },
    methods: {
        changeNav(nav) {
            this.activeNav = nav.label;
        },
        changeMenu(menu) {
            this.activeMenu = menu.path;
        },
    },
};
</script>

<style lang="less" scoped>
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
.container {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    header {
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
        padding: 0 80px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #dcdfe6;
        height: 80px;
        .tit {
            display: flex;
            align-items: center;
            color: rgb(70, 159, 252);
            .icon {
                font-size: 40px;
                margin-right: 15px;
            }
        }
        .nav {
            display: flex;
            align-items: center;

            .navList {
                position: relative;
                line-height: 80px;
                text-decoration: none;
                color: #1989fa;
                cursor: pointer;
                display: block;
                opacity: 0.5;
                padding: 0 22px;

                &:hover {
                    opacity: 1;
                    color: #1989fa !important;
                }
            }

            .isActive {
                opacity: 1;
                color: #1989fa !important;
                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: calc(50% - 15px);
                    bottom: 0;
                    height: 2px;
                    width: 30px;
                    background: #409eff;
                }
            }
        }
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
            padding: 20px 60px;
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
}
</style>
