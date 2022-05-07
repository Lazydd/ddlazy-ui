<script>
import mixin from "../../dd-mixins/mixin";
import moment from "moment";
import year from "./year.vue";
export default {
    name: "ddDatePicker",
    mixins: [mixin],
    props: {
        size: {
            type: String,
            default: "medium",
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "选择日期",
        },
        type: {
            type: String,
            default: "date",
        },
        value: {},
    },
    data() {
        return {
            dateArr: [],
            isShow_dropdown: false,
            title: ["日", "一", "二", "三", "四", "五", "六"],
            activeDate: null,
            isShowClear: false,
            nowDate: moment().format("YYYY-MM-DD"),
            showDate: moment(this.value ? this.value : new Date()).format(
                "YYYY-MM-DD"
            ),
        };
    },
    render: function (h) {
        let _this = this;
        return h(
            "div",
            {
                class: "dd-date-picker",
                ref: "dd-date-picker",
                on: {
                    mouseenter(e) {
                        _this.isShowClear = _this.clearable
                            ? _this.activeDate
                                ? true
                                : false
                            : false;
                    },
                    mouseleave(e) {
                        _this.isShowClear = false;
                    },
                },
            },
            [
                h("input", {
                    class: ["dd-date-picker_inner", _this.size],
                    domProps: {
                        value: _this.activeDate,
                    },
                    attrs: {
                        readonly: "readonly",
                        placeholder: _this.placeholder,
                    },
                    on: {
                        click(e) {
                            _this.isShow_dropdown = !_this.isShow_dropdown;
                        },
                        "on-blur"(e) {
                            this.$emit("blur", e);
                        },
                        "on-focus"(e) {
                            this.$emit("focus", e);
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
                _this.isShowClear
                    ? h(
                          "span",
                          {
                              class: ["dd-input_suffix_clear"],
                          },
                          [
                              h("dd-icon", {
                                  class: [],
                                  props: {
                                      icon: "icon-reeor",
                                  },
                                  on: {
                                      click(e) {
                                          _this.activeDate = "";
                                          _this.isShow_dropdown = false;
                                          _this.$emit("clear");
                                      },
                                  },
                              }),
                          ]
                      )
                    : "",
                h(
                    "transition",
                    {
                        props: {
                            name: "dd-zoom-top",
                        },
                    },
                    [
                        _this.isShow_dropdown ? (
                            _this.type === "date" ? (
                                h(
                                    "div",
                                    {
                                        class: "dd-picker-body",
                                    },
                                    [
                                        h(
                                            "div",
                                            {
                                                class: "dd-picker-header",
                                            },
                                            [
                                                h(
                                                    "div",
                                                    {
                                                        class: [
                                                            "dd-picker-panel-icon",
                                                            "dd-picker_pre-btn",
                                                        ],
                                                        style: {
                                                            marginRight: "6px",
                                                        },
                                                    },
                                                    [
                                                        h("dd-icon", {
                                                            class: [],
                                                            props: {
                                                                icon: "icon-double-arrow-left",
                                                            },
                                                            on: {
                                                                click(e) {
                                                                    _this.showDate =
                                                                        moment(
                                                                            _this.showDate
                                                                        ).subtract(
                                                                            "1",
                                                                            "year"
                                                                        );
                                                                    _this.getData(
                                                                        moment(
                                                                            _this.showDate
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                        }),
                                                    ]
                                                ),
                                                h(
                                                    "div",
                                                    {
                                                        class: [
                                                            "dd-picker-panel-icon",
                                                            "dd-picker_pre-btn",
                                                        ],
                                                    },
                                                    [
                                                        h("dd-icon", {
                                                            class: [],
                                                            props: {
                                                                icon: "icon-arrow-left",
                                                            },
                                                            on: {
                                                                click(e) {
                                                                    _this.showDate =
                                                                        moment(
                                                                            _this.showDate
                                                                        ).subtract(
                                                                            "1",
                                                                            "months"
                                                                        );
                                                                    _this.getData(
                                                                        moment(
                                                                            _this.showDate
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                        }),
                                                    ]
                                                ),
                                                h(
                                                    "span",
                                                    moment(
                                                        _this.showDate
                                                    ).format("YYYY") + "年"
                                                ),
                                                h(
                                                    "span",
                                                    moment(
                                                        _this.showDate
                                                    ).format("MM") + "月"
                                                ),
                                                h(
                                                    "div",
                                                    {
                                                        class: [
                                                            "dd-picker-panel-icon",
                                                            "dd-picker_nex-btn",
                                                        ],
                                                    },
                                                    [
                                                        h("dd-icon", {
                                                            class: [],
                                                            props: {
                                                                icon: "icon-double-arrow-right",
                                                            },
                                                            on: {
                                                                click(e) {
                                                                    _this.showDate =
                                                                        moment(
                                                                            _this.showDate
                                                                        ).add(
                                                                            "1",
                                                                            "year"
                                                                        );
                                                                    _this.getData(
                                                                        moment(
                                                                            _this.showDate
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                        }),
                                                    ]
                                                ),
                                                h(
                                                    "div",
                                                    {
                                                        class: [
                                                            "dd-picker-panel-icon",
                                                            "dd-picker_nex-btn",
                                                        ],
                                                        style: {
                                                            marginRight: "6px",
                                                        },
                                                    },
                                                    [
                                                        h("dd-icon", {
                                                            class: [],
                                                            props: {
                                                                icon: "icon-arrow-right",
                                                            },
                                                            on: {
                                                                click(e) {
                                                                    _this.showDate =
                                                                        moment(
                                                                            _this.showDate
                                                                        ).add(
                                                                            "1",
                                                                            "months"
                                                                        );
                                                                    _this.getData(
                                                                        moment(
                                                                            _this.showDate
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                        }),
                                                    ]
                                                ),
                                            ]
                                        ),
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
                                                                        class: "dd-picker-tb_row",
                                                                    },
                                                                    _this.dateArr
                                                                        .slice(
                                                                            i *
                                                                                7,
                                                                            (i +
                                                                                1) *
                                                                                7
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
                                                                                            item.pre
                                                                                                ? "notNowMonth"
                                                                                                : "",
                                                                                            item.nex
                                                                                                ? "notNowMonth"
                                                                                                : "",
                                                                                            _this.nowDate ==
                                                                                            item.y +
                                                                                                "-" +
                                                                                                (item.m <
                                                                                                10
                                                                                                    ? `0${item.m}`
                                                                                                    : item.m) +
                                                                                                "-" +
                                                                                                (item.d <
                                                                                                10
                                                                                                    ? `0${item.d}`
                                                                                                    : item.d)
                                                                                                ? "nowDate"
                                                                                                : "",
                                                                                            _this.activeDate ==
                                                                                            item.y +
                                                                                                "-" +
                                                                                                (item.m <
                                                                                                10
                                                                                                    ? `0${item.m}`
                                                                                                    : item.m) +
                                                                                                "-" +
                                                                                                (item.d <
                                                                                                10
                                                                                                    ? `0${item.d}`
                                                                                                    : item.d)
                                                                                                ? "activeDate"
                                                                                                : "",
                                                                                        ],
                                                                                        on: {
                                                                                            click(
                                                                                                e
                                                                                            ) {
                                                                                                _this.activeDate =
                                                                                                    item.y +
                                                                                                    "-" +
                                                                                                    (item.m <
                                                                                                    10
                                                                                                        ? `0${item.m}`
                                                                                                        : item.m) +
                                                                                                    "-" +
                                                                                                    (item.d <
                                                                                                    10
                                                                                                        ? `0${item.d}`
                                                                                                        : item.d);
                                                                                                _this.isShow_dropdown = false;
                                                                                                _this.$emit(
                                                                                                    "change",
                                                                                                    _this.activeDate
                                                                                                );
                                                                                                _this.$emit(
                                                                                                    "input",
                                                                                                    _this.activeDate
                                                                                                );
                                                                                                _this.getData(
                                                                                                    moment(
                                                                                                        _this.activeDate
                                                                                                    )
                                                                                                );
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        h(
                                                                                            "span",
                                                                                            item.d
                                                                                        ),
                                                                                    ]
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
                            ) : _this.type === "year" ? (
                                <year value={_this.years} on-change={_this.change}></year>
                            ) : (
                                ""
                            )
                        ) : (
                            ""
                        ),
                    ]
                ),
            ]
        );
    },
    methods: {
        change(data){
            console.log(111, data)
            this.$emit('input', data);
        },
        getData(times) {
            let time1 = new Date(times);
            let dateArr = [];
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
                    m: month > 0 ? month : 12,
                    pre: true,
                });
            }
            for (let i = 1; i <= days.getDate(); i++) {
                dateArr.push({
                    d: i,
                    y: year,
                    m: month + 1,
                });
            }
            for (let i = 1; dateArr.length < 42; i++) {
                dateArr.push({
                    d: i,
                    y: month < 11 ? year : year + 1, // 0为1月，即上一年
                    m: month < 11 ? month + 2 : 1,
                    nex: true,
                });
            }
            this.dateArr = dateArr;
        },
        initData() {
            if (this.value) {
                this.activeDate = moment(this.value).format("YYYY-MM-DD");
            }
        },
        dd_changes() {
            setTimeout(() => {
                this.isShow_dropdown = false;
            });
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
        this.getData(new Date());
        this.initData();
    },
    computed: {
        years() {
            return this.value;
        },
    },
    components: {
        year,
    },
    watch: {
        isShow_dropdown(val) {
            this.$emit("visible-change", val);
        },
        years(val) {
            console.log('555555555555555555555555',val);
        },
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
    .dd-input_suffix_clear {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
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
            margin: 12px;
            text-align: center;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            .dd-picker-panel-icon {
                font-size: 16px;
                color: #303133;
                border: 0;
                background: transparent;
                cursor: pointer;
                outline: none;
            }
            .dd-picker_pre-btn {
                float: left;
            }
            .dd-picker_nex-btn {
                float: right;
            }
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
                flex-wrap: wrap;
                justify-content: space-between;
                .dd-picker-content_day {
                    position: relative;
                    width: 42px;
                    text-align: center;
                    height: 38px;
                    padding: 4px 0;
                    box-sizing: border-box;
                    cursor: pointer;
                    span {
                        width: 24px;
                        height: 24px;
                        display: block;
                        margin: 0 auto;
                        line-height: 24px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 50%;
                    }
                    &:hover {
                        span {
                            color: #409eff;
                        }
                    }
                }
                .notNowMonth {
                    span {
                        color: #c0c4cc;
                    }
                }
                .nowDate {
                    span {
                        color: #409eff;
                    }
                }
                .activeDate {
                    span {
                        color: #fff !important;
                        background-color: #409eff;
                    }
                }
                .dd-picker-tb_row {
                    display: flex;
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
