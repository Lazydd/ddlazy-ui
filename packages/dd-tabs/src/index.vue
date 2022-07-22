<script>
export default {
    name: "ddTabs",
    props: {
        value: {
            type: [String, Number],
        },
        type: {
            type: String,
        },
    },
    data() {
        return {
            activeTab: this.value,
            width: 0,
            left: 0,
            tabIndex: 0,
            tabLength: 0,
        };
    },
    render: function (h) {
        const _this = this;
        let tabList = this.$slots.default;
        let vnode = [];
        let vnodeObj = {};
        this.tabLength = tabList.length;
        tabList.map((item, i) => {
            vnodeObj[item.componentOptions.propsData.name] = item;
            let { name, label, icon, disabled } =
                item.componentOptions.propsData;
            vnode.push({ name, label, icon, disabled: !!disabled });
            if (name == this.activeTab) this.tabIndex = i;
        });
        console.log(vnode);
        return h(
            "div",
            {
                class: [
                    "dd-tabs-top",
                    _this.type == "card" ? "cardStyel" : "",
                    _this.type == "border-card" ? "dd-tabs-border-card" : "",
                    _this.type == "segmented" ? "segmented" : "",
                ],
            },
            [
                h(
                    "div",
                    {
                        class: ["dd-tabs"],
                    },
                    [
                        h(
                            "div",
                            {
                                class: [
                                    _this.type == "card" ? "dd-tabs_nav" : "",
                                    _this.type == "border-card"
                                        ? "dd-tabs_nav-border"
                                        : "",
                                ],
                            },
                            [
                                h("div", {
                                    class: ["dd-tabs__active-bar"],
                                    style: {
                                        width: `${_this.width}px`,
                                        transform: `translateX(${_this.left}px)`,
                                        display:
                                            _this.type == "border-card"
                                                ? "none"
                                                : "",
                                    },
                                }),
                                tabList.map((item, i) => {
                                    return h(
                                        "div",
                                        {
                                            class: [
                                                "dd-tabs__item",
                                                vnode[i].name == _this.activeTab
                                                    ? "is-active"
                                                    : "",
                                                !_this.type
                                                    ? i == 0
                                                        ? "ml0"
                                                        : ""
                                                    : "",
                                                !_this.type
                                                    ? i == tabList.length - 1
                                                        ? "mr0"
                                                        : ""
                                                    : "",
                                                _this.type == "border-card" &&
                                                _this.tabIndex == i
                                                    ? "dd-tabs_item-border"
                                                    : "",
                                                vnode[i].disabled
                                                    ? "dd-tabs_item-disabled"
                                                    : "",
                                            ],
                                            style: {
                                                "border-left":
                                                    _this.type ==
                                                        "border-card" &&
                                                    _this.tabIndex == 0
                                                        ? "none"
                                                        : "",
                                            },
                                            ref: `ddTabItem${i}`,
                                            on: {
                                                click(e) {
                                                    if (!vnode[i].disabled) {
                                                        _this.activeTab =
                                                            vnode[i].name;
                                                        _this.tabIndex = i;
                                                        _this.updataLine();
                                                        _this.$emit(
                                                            "tab-click",
                                                            tabList[i].context,
                                                            e
                                                        );
                                                    }
                                                },
                                            },
                                        },
                                        [
                                            h("div", {
                                                class: ["dd-icon"],
                                                style: {
                                                    display: !vnode[i].icon
                                                        ? "none"
                                                        : "",
                                                },
                                                domProps: {
                                                    innerHTML: `<svg class="icon" aria-hidden="true"><use xlink:href="#${vnode[i].icon}"></use></svg>`,
                                                },
                                            }),
                                            vnode[i].label || vnode[i].name,
                                        ]
                                    );
                                }),
                            ]
                        ),
                    ]
                ),
                h(
                    "div",
                    {
                        class: ["dd-tabs-main"],
                    },
                    [
                        vnodeObj[this.value].componentOptions.children.map(
                            (item) => {
                                return item;
                            }
                        ),
                    ]
                ),
            ]
        );
    },
    computed: {
        tabItem() {
            return this.$refs[`ddTabItem${this.tabIndex}`];
        },
    },
    methods: {
        updataLine() {
            if (this.type) {
                this.width = this.tabItem.offsetWidth;
                this.left = this.tabItem.offsetLeft;
            } else {
                if (this.tabIndex == 0) {
                    this.width = this.tabItem.offsetWidth - 20;
                    this.left = this.tabItem.offsetLeft;
                } else if (this.tabIndex == this.tabLength - 1) {
                    this.width = this.tabItem.offsetWidth - 20;
                    this.left = this.tabItem.offsetLeft + 20;
                } else {
                    this.width = this.tabItem.offsetWidth - 40;
                    this.left = this.tabItem.offsetLeft + 20;
                }
            }
        },
    },
    mounted() {
        this.updataLine();
    },
    watch: {
        activeTab(data) {
            this.activeTab = data;
            this.$emit("input", data);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tabs-top {
    .dd-tabs {
        position: relative;
        width: 100%;
        cursor: pointer;
        display: inline-block;
        margin: 0 0 15px;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #e4e7ed;
            z-index: 1;
        }
        .dd-tabs_nav {
            display: inline-block;
            border: 1px solid #e4e7ed;
            border-bottom: none;
            border-radius: 4px 4px 0 0;
            box-sizing: border-box;
            .dd-tabs__active-bar {
                background-color: #fff;
                height: 1px;
            }
        }
        .dd-tabs__active-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background-color: #409eff;
            z-index: 2;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            list-style: none;
        }
        .dd-tabs__item {
            padding: 0 20px;
            height: 40px;
            box-sizing: border-box;
            line-height: 40px;
            display: inline-block;
            list-style: none;
            font-size: 14px;
            font-weight: 500;
            color: #303133;
            position: relative;
            &:hover {
                color: #409eff;
            }
        }
        .dd-tabs_item-disabled {
            color: #c0c4cc;
            cursor: not-allowed;
            &:hover {
                color: #c0c4cc;
            }
        }
        .ml0 {
            padding-left: 0;
        }
        .mr0 {
            padding-right: 0;
        }
        .is-active {
            color: #409eff;
        }
    }
    .dd-tabs-main {
        display: block;
        overflow: hidden;
    }
}
.dd-tabs-border-card {
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 0 6px 0 rgba(0, 0, 0, 0.1);
    .dd-tabs-main {
        padding: 15px;
        padding-top: 0;
    }
    .dd-tabs {
        &::after {
            height: 0;
        }
        .dd-tabs__active-bar {
            height: 0;
        }
        .dd-tabs_nav-border {
            background: #e4e7ed;
            .dd-tabs__item {
                color: #909399;
            }
            .dd-tabs_item-disabled {
                color: #c0c4cc;
                cursor: not-allowed;
                &:hover {
                    color: #c0c4cc;
                }
            }
            .is-active {
                color: #409eff;
                background: #fff;
                transition: background 0.5s;
            }
        }
        .dd-tabs__active-bar {
            background-color: #fff;
        }
        .dd-tabs_item-border {
            border-left: 1px solid #e4e7ed;
            border-right: 1px solid #e4e7ed;
        }
    }
}
.cardStyel {
    .dd-tabs {
        &::after {
            height: 1px;
        }
        .dd-tabs__item {
            border-left: 1px solid #e4e7ed;
            & :first-child {
                border-left: none;
            }
        }
        .dd-tabs_nav:first-child {
            border-left: none;
        }
    }
}
.segmented {
    .dd-tabs {
        display: inline-block;
        padding: 2px;
        color: #000000a6;
        background-color: #0000000a;
        border-radius: 2px;
        &::after {
            content: unset;
        }
        .dd-tabs__active-bar {
            bottom: 2px;
            height: calc(100% - 4px);
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px -2px #0000000d, 0 1px 4px -1px #00000012,
                0 0 1px #00000014;
            color: #262626;
            z-index: 0;
        }
    }
}
.dd-icon {
    display: inline-block;
    font-size: 15px;
    margin-right: 4px;
}
</style>
