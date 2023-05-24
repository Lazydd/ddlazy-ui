<script>
import ddIcon from "../../dd-icon";
export default {
    name: "ddTimeline",
    props: {
        reverse: {
            type: Boolean,
            default: false,
        },
    },
    render: function (h) {
        let _this = this;
        let vnodeArr = [];
        let vnode = this.$slots.default;
        this.reverse ? vnode.reverse() : "";
        vnode.map((item, i) => {
            let { timestamp, icon, type, color, size, placement } =
                item.componentOptions.propsData;
            vnodeArr.push({ timestamp, icon, type, color, size, placement });
        });
        return h(
            "ul",
            {
                class: "dd-timeline",
            },
            [
                vnode.map((item, i) => {
                    return h(
                        "li",
                        {
                            class: "dd-timeline-item",
                        },
                        [
                            h("div", {
                                class: "dd-timeline-item_tail",
                                style: {
                                    display:
                                        vnode.length - 1 == i
                                            ? "none"
                                            : "block",
                                },
                            }),
                            h(
                                "div",
                                {
                                    class: [
                                        "dd-timeline-item_node",
                                        "dd-timeline-item_node-normal",
                                        vnodeArr[i]?.type
                                            ? `dd-timeline-item_node-${vnodeArr[i]?.type}`
                                            : "",
                                        vnodeArr[i].size
                                            ? `dd-timeline-item_node-${vnodeArr[i].size}`
                                            : "",
                                    ],
                                    style: {
                                        backgroundColor: vnodeArr[i]?.color,
                                    },
                                },
                                [
                                    vnodeArr[i]?.icon
                                        ? h("dd-icon", {
                                              class: "dd-timeline-item_icon",
                                              props: {
                                                  icon: vnodeArr[i]?.icon,
                                              },
                                          })
                                        : "",
                                ]
                            ),
                            h(
                                "div",
                                {
                                    class: "dd-timeline-item_wrapper",
                                },
                                [
                                    vnodeArr[i].placement === "top"
                                        ? h(
                                              "div",
                                              {
                                                  class: [
                                                      "dd-timeline-item_timestamp",
                                                      "is-top",
                                                  ],
                                              },
                                              [vnodeArr[i].timestamp]
                                          )
                                        : "",
                                    h(
                                        "div",
                                        {
                                            class: "dd-timeline-item_content",
                                        },
                                        [
                                            _this.$slots.default[
                                                i
                                            ].componentOptions.children.map(
                                                (item) => {
                                                    return item;
                                                }
                                            ),
                                        ]
                                    ),
                                    vnodeArr[i].placement !== "top"
                                        ? h(
                                              "div",
                                              {
                                                  class: [
                                                      "dd-timeline-item_timestamp",
                                                      "is-bottom",
                                                  ],
                                              },
                                              [vnodeArr[i].timestamp]
                                          )
                                        : "",
                                ]
                            ),
                        ]
                    );
                }),
            ]
        );
    },
    components: {
        ddIcon,
    },
};
</script>

<style lang="less" scoped>
.dd-timeline {
    margin: 0;
    font-size: 14px;
    list-style: none;
    .dd-timeline-item_node {
        position: absolute;
        background-color: #e4e7ed;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .dd-timeline-item_icon {
            color: #fff;
            font-size: 15px;
        }
    }
    .dd-timeline-item_node-normal {
        left: -1px;
        width: 12px;
        height: 12px;
    }
    .dd-timeline-item_node-large {
        left: -2px;
        width: 14px;
        height: 14px;
    }
    .dd-timeline-item_tail {
        position: absolute;
        left: 4px;
        height: 100%;
        border-left: 2px solid #e4e7ed;
    }

    .dd-timeline-item_node-primary {
        background-color: #409eff;
    }
    .dd-timeline-item_node-success {
        background-color: #67c23a;
    }
    .dd-timeline-item_node-warning {
        background-color: #e6a23c;
    }
    .dd-timeline-item_node-danger {
        background-color: #f56c6c;
    }
    .dd-timeline-item_node-info {
        background-color: #909399;
    }
    .dd-timeline-item {
        position: relative;
        padding-bottom: 20px;
        .dd-timeline-item_wrapper {
            position: relative;
            padding-left: 28px;
            top: -3px;
            .dd-timeline-item_content {
                color: #303133;
            }
            .dd-timeline-item_timestamp {
                color: #909399;
                line-height: 1;
                font-size: 13px;
            }
            .is-top {
                margin-bottom: 8px;
                padding-top: 4px;
            }
            .is-bottom {
                margin-top: 8px;
            }
        }
    }
}
</style>
