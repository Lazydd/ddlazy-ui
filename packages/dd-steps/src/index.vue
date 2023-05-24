<script>
export default {
    name: "ddSteps",
    props: {
        active: {
            type: Number,
            default: 0,
        },
        finishStatus: {
            type: String,
            default: "finish",
        },
        space: {
            type: [Number, String],
        },
        alignCenter: {
            type: Boolean,
            default: false,
        },
        direction: {
            type: String,
            default: "horizontal",
        },
        simple: {
            type: Boolean,
            default: false,
        },
    },
    render: function (h) {
        let vnode = [];
        let tabList = this.$slots.default;
        tabList.map((item) => {
            let { title, description, icon } = item.componentOptions.propsData;
            vnode.push({ title, description, icon });
        });
        return h(
            "div",
            {
                class: [
                    "dd-steps ",
                    `dd-steps-${this.direction}`,
                    { "dd-steps-simple": this.simple },
                ],
            },
            [
                tabList.map((item, i) => {
                    return h(
                        "div",
                        {
                            class: [
                                "dd-step",
                                "is-process",
                                "is-simple",
                                vnode.length == i + 1
                                    ? this.alignCenter
                                        ? ""
                                        : "is-flex"
                                    : "",
                                {
                                    "is-vertical":
                                        this.direction === "vertical",
                                },
                            ],
                            style: {
                                "flex-basis": this.space
                                    ? this.space + "px"
                                    : 100 /
                                          (vnode.length -
                                              (this.alignCenter ? 0 : 1)) +
                                      "%",
                                "margin-right": "0px",
                            },
                        },
                        [
                            h(
                                "div",
                                {
                                    class: [
                                        "dd-step_head",
                                        this.active > i + 1
                                            ? `is-${this.finishStatus}`
                                            : "is-wait",
                                        { "is-process": this.active == i + 1 },
                                        { "is-center": this.alignCenter },
                                    ],
                                },
                                [
                                    h("div", {
                                        class: [
                                            !this.simple
                                                ? vnode.length != i + 1
                                                    ? "dd-step_line"
                                                    : ""
                                                : "",
                                            this.active > i + 2
                                                ? `is-line-${this.finishStatus}`
                                                : "",
                                        ],
                                    }),
                                    h(
                                        "div",
                                        {
                                            class: [
                                                "dd-step_icon",
                                                { "is-text": !vnode[i].icon },
                                            ],
                                        },
                                        [
                                            h("div", {
                                                class: [
                                                    "dd-step_icon-inner",
                                                    "dd-icon",
                                                    {
                                                        "vnode-icon":
                                                            vnode[i].icon,
                                                    },
                                                ],
                                                domProps: {
                                                    innerHTML: vnode[i].icon
                                                        ? `<svg class="icon" aria-hidden="true"><use xlink:href="#${vnode[i].icon}"></use></svg>`
                                                        : this.active > i + 1
                                                        ? `<svg class="icon" aria-hidden="true"><use xlink:href="#icon-seleted"></use></svg>`
                                                        : i + 1,
                                                },
                                            }),
                                        ]
                                    ),
                                ]
                            ),
                            h(
                                "div",
                                {
                                    class: [
                                        "dd-step_main",
                                        { "is-center": this.alignCenter },
                                    ],
                                },
                                [
                                    h("div", {
                                        class: [
                                            "dd-step_title",
                                            this.active > i + 1
                                                ? `is-${this.finishStatus}`
                                                : "is-wait",
                                            {
                                                "is-process":
                                                    this.active == i + 1,
                                            },
                                        ],
                                        domProps: {
                                            innerHTML: vnode[i].title,
                                        },
                                    }),
                                    h("div", {
                                        class: [
                                            "dd-step_description",
                                            this.active > i + 1
                                                ? `is-${this.finishStatus}`
                                                : "is-wait",
                                            this.active == i + 1
                                                ? `is-${this.finishStatus}-text`
                                                : "",
                                        ],
                                        style: {
                                            display: this.simple ? "none" : "",
                                        },
                                        domProps: {
                                            innerHTML: vnode[i].description,
                                        },
                                    }),
                                    h("div", {
                                        class: ["dd-step_arrow"],
                                        style: {
                                            display:
                                                vnode.length == i + 1
                                                    ? "none"
                                                    : "",
                                        },
                                    }),
                                ]
                            ),
                        ]
                    );
                }),
            ]
        );
    },
};
</script>

<style lang="less" scoped>
.dd-steps {
    display: flex;
    .dd-step {
        position: relative;
        flex-shrink: 1;
        .dd-step_head {
            position: relative;
            width: 100%;
            .dd-step_line {
                position: absolute;
                border-color: inherit;
                background-color: #c0c4cc;
                height: 2px;
                top: 11px;
                left: 0;
                right: 0;
            }
            .is-line-success {
                background-color: #67c23a;
            }
            .is-line-finish {
                background-color: #409eff;
            }
            .is-line-error {
                background-color: #f56c6c;
            }
            .dd-step_icon {
                position: relative;
                z-index: 1;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 24px;
                height: 24px;
                font-size: 14px;
                box-sizing: border-box;
                background: #fff;
                transition: 0.15s ease-out;
                .dd-step_icon-inner {
                    display: inline-block;
                    user-select: none;
                    text-align: center;
                    font-weight: 700;
                    line-height: 1;
                    color: inherit;
                }
                .dd-icon {
                    display: inline-block;
                    font-size: 15px;
                }
                .vnode-icon {
                    font-size: 30px;
                }
            }
            .is-text {
                border-radius: 50%;
                border: 2px solid;
                border-color: inherit;
            }
        }
        .dd-step_main {
            white-space: normal;
            text-align: left;
            color: #303133;
            .dd-step_title {
                font-size: 16px;
                line-height: 38px;
            }
            .dd-step_description {
                padding-right: 10%;
                margin-top: -5px;
                font-size: 12px;
                line-height: 20px;
                font-weight: 400;
                &:last-child {
                    padding-right: 0;
                }
            }

            .is-process {
                font-weight: 700;
            }
        }
        .is-center {
            text-align: center;
            .dd-step_line {
                left: 50%;
                right: -50%;
            }
        }
        .is-success {
            color: #67c23a;
            border-color: #67c23a;
        }
        .is-finish {
            color: #409eff;
            border-color: #409eff;
        }
        .is-wait {
            color: #c0c4cc;
            border-color: #c0c4cc;
        }
        .is-process {
            color: #303133;
            border-color: #303133;
        }
        .is-error {
            color: #f56c6c;
            border-color: #f56c6c;
        }
        .is-process-text {
            color: #303133;
        }
        .is-error-text {
            color: #303133;
        }
        .is-process-error {
            color: #f56c6c;
        }
    }
    .dd-step:last-of-type.is-flex {
        flex-basis: auto !important;
        max-width: 33.3333%;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .is-horizontal {
        display: inline-block;
    }
    .is-vertical {
        display: flex;
        .dd-step_head {
            flex-grow: 0;
            width: 24px;
            .dd-step_line {
                width: 2px;
                height: auto;
                top: 0;
                bottom: 0;
                left: 11px;
            }
        }
        .dd-step_main {
            padding-left: 10px;
            flex-grow: 1;
            .dd-step_title {
                line-height: 24px;
                margin-bottom: 8px;
            }
        }
    }
}
.dd-steps-simple {
    padding: 13px 8%;
    border-radius: 4px;
    background: #f5f7fa;
    .is-simple {
        display: flex;
        align-items: center;
        .dd-step_head {
            width: auto;
            font-size: 0;
            padding-right: 10px;
            .dd-step_line {
                height: 0;
                top: 0;
                right: 0;
                left: 0;
            }
            .dd-step_icon {
                background: transparent;
            }
        }
        .dd-step_main {
            position: relative;
            display: flex;
            align-items: stretch;
            flex-grow: 1;
            white-space: nowrap;
            .dd-step_arrow {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                &::before {
                    transform: rotate(-45deg) translateY(-4px);
                    transform-origin: 0 0;
                    content: "";
                    display: inline-block;
                    position: absolute;
                    height: 15px;
                    width: 1px;
                    background: #c0c4cc;
                }
                &::after {
                    transform: rotate(45deg) translateY(4px);
                    transform-origin: 100% 100%;
                    content: "";
                    display: inline-block;
                    position: absolute;
                    height: 15px;
                    width: 1px;
                    background: #c0c4cc;
                }
            }
        }
    }
}
.dd-steps-horizontal {
    white-space: nowrap;
}
.dd-steps-vertical {
    height: 100%;
    flex-flow: column;
}
</style>
