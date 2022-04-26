<script>
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddDatePicker",
    mixins: [mixin],
    props: {
        size: {
            type: String,
            default: "medium",
        },
    },
    data() {
        return {
            dateArr: [],
            isShow_dropdown: false,
            title: ["日", "一", "二", "三", "四", "五", "六"],
        };
    },
    render: function (h) {
        let _this = this;
        return h(
            "div",
            {
                class: "dd-date-picker",
                ref: "dd-date-picker",
            },
            [
                h("input", {
                    class: ["dd-date-picker_inner", _this.size],
                    attrs: {
                        readonly: "readonly",
                    },
                    on: {
                        click(e) {
                            _this.isShow_dropdown = !_this.isShow_dropdown;
                        },
                    },
                }),
                h(
                    "span",
                    {
                        class: ["dd-input_suffix"],
                    },
                    [
                        h("dd-icon", {
                            class: [],
                            props: {
                                icon: "icon-calendar",
                            },
                            on: {
                                click(e) {},
                            },
                        }),
                    ]
                ),
                h(
                    "transition",
                    {
                        props: {
                            name: "dd-zoom-top",
                        },
                    },
                    [
                        _this.isShow_dropdown
                            ? h(
                                  "div",
                                  {
                                      class: "dd-picker-body",
                                  },
                                  [
                                      h("div", {
                                          class: "dd-picker-header",
                                      }),
                                      h(
                                          "div",
                                          {
                                              class: "dd-picker-content",
                                          },
                                          [
                                              h(
                                                  "div",
                                                  {
                                                      class: "dd-picker-td",
                                                  },
                                                  [
                                                      _this.title.map(
                                                          (item) => {
                                                              return h(
                                                                  "div",
                                                                  {
                                                                      class: "dd-picker-title",
                                                                  },
                                                                  item
                                                              );
                                                          }
                                                      ),
                                                  ]
                                              ),
                                              h(
                                                  "div",
                                                  {
                                                      class: "dd-picker-tb",
                                                  },
                                                  [
                                                      _this.title.map(
                                                          (items, i) => {
                                                              return h(
                                                                  "div",
                                                                  {
                                                                      class: "",
                                                                  },
                                                                  _this.dateArr
                                                                      .slice(
                                                                          i * 7,
                                                                          i *
                                                                              7 +
                                                                              6
                                                                      )
                                                                      .map(
                                                                          (
                                                                              item
                                                                          ) => {
                                                                              return h(
                                                                                  "div",
                                                                                  {
                                                                                      class: [
                                                                                          "dd-picker-content_day",
                                                                                      ],
                                                                                  },
                                                                                    item.d
                                                                              );
                                                                          }
                                                                      )
                                                              );
                                                          }
                                                      ),
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
        getData() {
            let dateArr = [];
            let time1 = new Date();
            const year = time1.getFullYear();
            const month = time1.getMonth();
            let days = new Date(year, month + 1, 0);
            const time = new Date(year, month, 1);
            // 计算上个月剩多少天
            time.setDate(0); // 切换到上个月的最后一天
            let lastDay = time.getDate(); // 当月天数
            const week = time.getDay(); // 星期几，前面已切换为上月最后一天，这里表示上个月最后一天是星期几
            let count = week + 1; // 星期天开始
            for (let i = count; i > 0; i--) {
                dateArr.push({
                    d: lastDay - i + 1,
                    y: month > 0 ? year : year - 1, // 0为1月，即上一年
                    m: month > 0 ? month : 11,
                    pre: true,
                });
            }
            for (let i = 1; i < days.getDate(); i++) {
                dateArr.push({ d: i, y: year, m: month + 1 });
            }
            for (let i = 1; dateArr.length < 42; i++) {
                dateArr.push({
                    d: i,
                    y: month > 12 ? year : year + 1, // 0为1月，即上一年
                    m: month > 12 ? month : 1,
                    nex: true,
                });
            }
            this.dateArr = dateArr;
        },
        except(e) {
            let isSelf = this.$refs["dd-date-picker"]?.contains(e.target);
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
    created() {
        this.getData();
    },
};
</script>

<style lang="less" scoped>
.dd-date-picker {
    position: relative;
    width: 220px;
    .dd-date-picker_inner {
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
    .dd-input_suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        cursor: pointer;
        color: #c0c4cc;
        font-size: 20px;
    }
    .dd-picker-body {
        position: absolute;
        width: 322px;
        color: #606266;
        border: 1px solid #e4e7ed;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
        border-radius: 4px;
        line-height: 30px;
        margin: 5px 0;
        z-index: 1000;
        .dd-picker-header {
        }
        .dd-picker-content {
            margin: 15px;
            font-size: 12px;
            .dd-picker-td {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #ebeef5;
                .dd-picker-title {
                    padding: 5px;
                    width: 42px;
                    text-align: center;
                    color: #606266;
                    font-weight: 400;
                }
            }
            .dd-picker-tb {
                display: flex;
                align-items: center;
                // flex-wrap: wrap;
                justify-content: space-between;
                .dd-picker-content_day {
                    width: 42px;
                    text-align: center;
                    height: 38px;
                    padding: 4px 0;
                    box-sizing: border-box;
                    cursor: pointer;
                }
            }
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
}
</style>
