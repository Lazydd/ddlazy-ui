<script>
import moment from "moment";
export default {
    props: {
        value: {},
    },
    data() {
        return {
            monthArr: [],
            activeMonth: this.value
                ? moment(this.value + "").format("YYYY-MM")
                : null,
            nowMonth: moment().format("YYYY-MM"),
            nowYear: moment().format("YYYY"),
            showMonth: moment(this.value ? this.value + "" : new Date()).format(
                "YYYY-MM"
            ),
        };
    },
    render: function (h) {
        let _this = this;
        return h(
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
                                    props: {
                                        icon: "icon-double-arrow-left",
                                    },
                                    on: {
                                        click(e) {
                                            _this.showMonth = moment(
                                                _this.showMonth
                                            ).subtract("1", "year");
                                            _this.getMonth(
                                                moment(_this.showMonth)
                                            );
                                        },
                                    },
                                }),
                            ]
                        ),
                        h(
                            "span",
                            moment(_this.showMonth).format("YYYY") + "年"
                        ),
                        h("span", moment(_this.showMonth).format("MM") + "月"),
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
                                    props: {
                                        icon: "icon-double-arrow-right",
                                    },
                                    on: {
                                        click(e) {
                                            _this.showMonth = moment(
                                                _this.showMonth
                                            ).add("1", "year");
                                            _this.getMonth(
                                                moment(_this.showMonth)
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
                                class: "dd-picker-tb-month",
                            },
                            [
                                _this.monthArr.map((item) => {
                                    return h(
                                        "div",
                                        {
                                            class: [
                                                "dd-picker-content_month",
                                                {
                                                    nowMonth:
                                                        _this.nowMonth ==
                                                        moment(
                                                            item.y + ""
                                                        ).format("YYYY") +
                                                            "-" +
                                                            moment(
                                                                item.m + ""
                                                            ).format("MM"),
                                                    activeMonth:
                                                        _this.activeMonth ==
                                                        moment(
                                                            item.y + ""
                                                        ).format("YYYY") +
                                                            "-" +
                                                            moment(
                                                                item.m + ""
                                                            ).format("MM"),
                                                },
                                            ],
                                            on: {
                                                click(e) {
                                                    _this.activeMonth =
                                                        moment(
                                                            item.y + ""
                                                        ).format("YYYY") +
                                                        "-" +
                                                        moment(
                                                            item.m + ""
                                                        ).format("MM");
                                                    _this.$emit(
                                                        "change",
                                                        _this.activeMonth
                                                    );
                                                    _this.$parent.dd_changes();
                                                },
                                            },
                                        },
                                        [h("span", item.m + "月")]
                                    );
                                }),
                            ]
                        ),
                    ]
                ),
            ]
        );
    },
    methods: {
        getMonth(month) {
            let monthArr = [];
            let time1 = new Date(month);
            const year = time1.getFullYear();
            for (let i = 1; i <= 12; i++) {
                monthArr.push({ m: i, y: year });
            }
            this.monthArr = monthArr;
        },
    },
    created() {
        this.getMonth(this.value ? this.value + "" : new Date());
    },
};
</script>

<style scoped lang="less">
.dd-picker-header {
    margin: 12px;
    text-align: center;
    user-select: none;
    .dd-picker-panel-icon {
        font-size: 16px;
        color: #303133;
        border: 0;
        background: transparent;
        cursor: pointer;
        outline: none;
        &:hover {
            color: #409eff;
        }
    }
    .dd-picker_pre-btn {
        float: left;
    }
    .dd-picker_nex-btn {
        float: right;
    }
}
.dd-picker-tb-month {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .dd-picker-content_month {
        text-align: center;
        padding: 20px 3px;
        cursor: pointer;
        width: 25%;
        span {
            display: inline-block;
            min-width: 24px;
        }
        &:hover {
            span {
                color: #409eff;
            }
        }
    }
    .nowMonth {
        color: #409eff;
        font-weight: 700;
    }
    .activeMonth {
        color: #409eff;
    }
}
</style>
