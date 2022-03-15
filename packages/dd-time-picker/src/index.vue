<script>
import ddIcon from "../../dd-icon";
import ddScroll from "../../dd-scroll";
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddTimePicker",
    mixins: [mixin],
    props: {
        value: {
            type: [String, Date],
        },
        placeholder: {
            type: String,
        },
        size: {
            type: String,
            default: "medium",
        },
    },
    data() {
        return {
            activeIndex: "",
            activeTime: "",
            isShow_dropdown: false,
            activeHour: 0,
            activeMinute: 0,
            activeSecond: 0,
        };
    },
    render: function (h) {
        let _this = this;
        let timeList1 = [];
        let timeList2 = [];
        let timeList3 = [];
        for (let i = 0; i < 24; i++) {
            timeList1.push(i);
        }
        for (let i = 0; i < 60; i++) {
            timeList2.push(i);
            timeList3.push(i);
        }
        let exceptList = [];
        let newMinTime;

        this.activeTime = this.value || "";

        // for (let i = 0; i < stepS; i++) {
        //     let time = this.getHMS(
        //         this.getSecond(start) + this.getSecond(step) * i
        //     );
        //     timeList.push({
        //         time,
        //         disabled: false,
        //     });
        // }
        // timeList.map((item) => {
        //     exceptList.map((items) => {
        //         if (item.time == items) {
        //             item.disabled = true;
        //         }
        //     });
        // });
        return h(
            "div",
            {
                class: ["dd-time-select"],
                ref: "dd-time-select",
            },
            [
                h("dd-icon", {
                    class: ["dd-input_prefix"],
                    props: {
                        icon: "icon-ontimeshipment",
                    },
                }),
                h("input", {
                    class: ["dd-time-select_inner", _this.size],
                    domProps: {
                        placeholder: _this.placeholder,
                        value: _this.activeTime,
                    },
                    on: {
                        // input(e) {
                        //     _this.aa = e.target.value;
                        // },
                        click(e) {
                            _this.isShow_dropdown = !_this.isShow_dropdown;
                        },
                    },
                }),
                _this.activeTime
                    ? h("dd-icon", {
                          class: ["dd-input_suffix"],
                          props: {
                              icon: "icon-reeor",
                          },
                          on: {
                              click(e) {
                                  _this.activeIndex = "";
                                  _this.activeTime = "";
                                  _this.$emit("input", "");
                                  //   _this.isShow_dropdown = true;
                              },
                          },
                      })
                    : "",
                h(
                    "transition",
                    {
                        props: {
                            name: "fale",
                        },
                    },
                    [
                        _this.isShow_dropdown
                            ? h(
                                  "div",
                                  {
                                      class: ["dd-time-select-dropdown"],
                                  },
                                  [
                                      h(
                                          "div",
                                          {
                                              style: {
                                                  width: "100%",
                                              },
                                          },
                                          [
                                              h("div", {
                                                  class: [
                                                      "dd-time-select-dropdown-s",
                                                  ],
                                              }),
                                              h(
                                                  "div",
                                                  {
                                                      class: [
                                                          "time-picker_box",
                                                      ],
                                                  },
                                                  [
                                                      h(
                                                          "dd-scroll",
                                                          {
                                                              style: {
                                                                  width: "33.3%",
                                                              },
                                                          },
                                                          [
                                                              h(
                                                                  "ul",
                                                                  {
                                                                      class: [
                                                                          "",
                                                                      ],
                                                                  },
                                                                  [
                                                                      timeList1.map(
                                                                          (
                                                                              item
                                                                          ) => {
                                                                              return h(
                                                                                  "li",
                                                                                  {
                                                                                      class: [
                                                                                          _this.activeHour ==
                                                                                          item
                                                                                              ? "activeTime"
                                                                                              : "",
                                                                                      ],
                                                                                      domProps:
                                                                                          {
                                                                                              innerHTML:
                                                                                                  item <
                                                                                                  10
                                                                                                      ? "0" +
                                                                                                        item
                                                                                                      : item,
                                                                                          },
                                                                                      on: {
                                                                                          click() {
                                                                                              _this.activeHour =
                                                                                                  item;
                                                                                          },
                                                                                      },
                                                                                  }
                                                                              );
                                                                          }
                                                                      ),
                                                                  ]
                                                              ),
                                                          ]
                                                      ),
                                                      h(
                                                          "dd-scroll",
                                                          {
                                                              style: {
                                                                  width: "33.3%",
                                                              },
                                                          },
                                                          [
                                                              h(
                                                                  "ul",
                                                                  {
                                                                      class: [
                                                                          "",
                                                                      ],
                                                                  },
                                                                  [
                                                                      timeList2.map(
                                                                          (
                                                                              item
                                                                          ) => {
                                                                              return h(
                                                                                  "li",
                                                                                  {
                                                                                      class: [
                                                                                          _this.activeMinute ==
                                                                                          item
                                                                                              ? "activeTime"
                                                                                              : "",
                                                                                      ],
                                                                                      domProps:
                                                                                          {
                                                                                              innerHTML:
                                                                                                  item <
                                                                                                  10
                                                                                                      ? "0" +
                                                                                                        item
                                                                                                      : item,
                                                                                          },
                                                                                      on: {
                                                                                          click() {
                                                                                              _this.activeMinute =
                                                                                                  item;
                                                                                          },
                                                                                      },
                                                                                  }
                                                                              );
                                                                          }
                                                                      ),
                                                                  ]
                                                              ),
                                                          ]
                                                      ),
                                                      h(
                                                          "dd-scroll",
                                                          {
                                                              style: {
                                                                  width: "33.3%",
                                                              },
                                                          },
                                                          [
                                                              h(
                                                                  "ul",
                                                                  {
                                                                      class: [
                                                                          "",
                                                                      ],
                                                                  },
                                                                  [
                                                                      timeList3.map(
                                                                          (
                                                                              item
                                                                          ) => {
                                                                              return h(
                                                                                  "li",
                                                                                  {
                                                                                      class: [
                                                                                          _this.activeSecond ==
                                                                                          item
                                                                                              ? "activeTime"
                                                                                              : "",
                                                                                      ],
                                                                                      domProps:
                                                                                          {
                                                                                              innerHTML:
                                                                                                  item <
                                                                                                  10
                                                                                                      ? "0" +
                                                                                                        item
                                                                                                      : item,
                                                                                          },
                                                                                      on: {
                                                                                          click() {
                                                                                              _this.activeSecond =
                                                                                                  item;
                                                                                          },
                                                                                      },
                                                                                  }
                                                                              );
                                                                          }
                                                                      ),
                                                                  ]
                                                              ),
                                                          ]
                                                      ),
                                                  ]
                                              ),
                                              h(
                                                  "div",
                                                  {
                                                      class: [
                                                          "dd-time-panel_footer",
                                                      ],
                                                  },
                                                  [
                                                      h("button", {
                                                          class: [
                                                              "dd-time-panel_btn",
                                                          ],
                                                          domProps: {
                                                              innerHTML: "取消",
                                                          },
                                                      }),
                                                      h("button", {
                                                          class: [
                                                              "dd-time-panel_btn",
                                                              "confim",
                                                          ],
                                                          domProps: {
                                                              innerHTML: "确定",
                                                          },
                                                      }),
                                                  ]
                                              ),
                                          ]
                                      ),
                                  ]
                              )
                            : "",
                    ]
                ),
            ]
        );
    },
    methods: {
        except(e) {
            let isSelf = this.$refs["dd-time-select"]?.contains(e.target);
            if (!isSelf) {
                this.isShow_dropdown = false;
            }
        },
    },
    mounted() {
        document.addEventListener("click", this.except);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.except);
    },
    components: {
        ddIcon,
        ddScroll,
    },
};
</script>

<style lang="less" scoped>
.dd-time-select {
    position: relative;
    display: inline-block;
    cursor: pointer;
    .dd-input_prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        font-size: 20px;
        color: #c0c4cc;
    }
    .dd-input_suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        font-size: 20px;
        color: #c0c4cc;
    }
    .dd-time-select_inner {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        // min-width: 240px;
        outline: none;
        padding: 0 15px;
        padding-left: 30px;
        padding-right: 30px;
        cursor: pointer;
        transition: all 0.3s;
        box-sizing: border-box;
        &:focus {
            border-color: #409eff !important;
        }
        &:hover {
            border-color: #c0c4cc;
        }
    }
    .medium {
        height: 40px;
        line-height: 40px;
    }
    .small {
        height: 30px;
        line-height: 30px;
    }
    .mini {
        height: 28px;
        line-height: 28px;
    }
    .dd-time-select-dropdown {
        display: flex;
        // min-width: 240px;
        width: 100%;
        // height: 100px;
        max-height: 236px;
        position: absolute;
        transform-origin: center top;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        margin-top: 10px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        z-index: 1000;
        ul {
            width: 100%;
            padding: 6px 0;
            li {
                font-size: 14px;
                padding: 0 20px;
                position: relative;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #606266;
                height: 34px;
                line-height: 34px;
                box-sizing: border-box;
                &:hover {
                    background-color: #f5f7fa;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
            .disabled {
                color: #e4e7ed !important;
                cursor: not-allowed !important;
                font-weight: normal;
            }
            .activeTime {
                color: #409eff;
                font-weight: 700;
            }
        }
        .dd-time-select-dropdown-s {
            position: absolute;
            width: 0;
            height: 0;
            top: -6px;
            left: 20px;
            border-width: 0 6px 6px;
            z-index: 1;
            border-style: solid;
            border-color: transparent transparent #e4e7ed;
            &::before {
                content: "";
                position: absolute;
                display: inline-block;
                width: 0;
                height: 0;
                z-index: 2;
                top: -5px;
                left: -6px;
                border: 6px solid;
                border-color: transparent transparent #fff;
            }
        }
        .time-picker_box {
            display: flex;
        }
        .dd-time-panel_footer {
            border-top: 1px solid #e4e4e4;
            padding: 4px;
            height: 36px;
            line-height: 25px;
            text-align: right;
            box-sizing: border-box;
            .dd-time-panel_btn {
                border: none;
                line-height: 28px;
                padding: 0 5px;
                margin: 0 5px;
                cursor: pointer;
                background-color: transparent;
                outline: none;
                font-size: 12px;
                color: #303133;
            }
            .confim {
                font-weight: 800;
                color: #409eff;
            }
        }
    }
}
.fale-enter-active,
.fale-leave-active {
    transition: transform 0.2s;
}
.fale-enter,
.fale-leave-to {
    transform: scale(1, 0);
}
.fale-enter-to,
.fale-leave {
    transform: scale(1, 1);
}
</style>
