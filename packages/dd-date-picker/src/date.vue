<script>
import dayjs from "dayjs";
export default {
    props: {
        value: {},
    },
    data() {
        return {
            dateArr: [],
            title: ["日", "一", "二", "三", "四", "五", "六"],
            activeDate: this.value
                ? dayjs(this.value + "").format("YYYY-MM-DD")
                : null,
            nowDate: dayjs().format("YYYY-MM-DD"),
            showDate: dayjs(this.value).format("YYYY-MM-DD"),
        };
    },
    render: function (h) {
        let _this = this;
        return h("div", { class: "dd-picker-body" }, [
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
                                        _this.showDate = dayjs(
                                            _this.showDate
                                        ).subtract("1", "year");
                                        _this.getData(dayjs(_this.showDate));
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
                                props: {
                                    icon: "icon-arrow-left",
                                },
                                on: {
                                    click(e) {
                                        _this.showDate = dayjs(
                                            _this.showDate
                                        ).subtract("1", "months");
                                        _this.getData(dayjs(_this.showDate));
                                    },
                                },
                            }),
                        ]
                    ),
                    h("span", dayjs(_this.showDate).format("YYYY") + "年"),
                    h("span", dayjs(_this.showDate).format("MM") + "月"),
                    h("span", dayjs(_this.showDate).format("DD") + "日"),
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
                                        _this.showDate = dayjs(
                                            _this.showDate
                                        ).add("1", "year");
                                        _this.getData(dayjs(_this.showDate));
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
                                props: {
                                    icon: "icon-arrow-right",
                                },
                                on: {
                                    click(e) {
                                        _this.showDate = dayjs(
                                            _this.showDate
                                        ).add("1", "months");
                                        _this.getData(dayjs(_this.showDate));
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
                            _this.title.map((item) => {
                                return h(
                                    "div",
                                    {
                                        class: "dd-picker-title",
                                    },
                                    item
                                );
                            }),
                        ]
                    ),
                    h(
                        "div",
                        {
                            class: "dd-picker-tb",
                        },
                        [
                            _this.title.map((items, i) => {
                                return h(
                                    "div",
                                    {
                                        class: "dd-picker-tb_row",
                                    },
                                    _this.dateArr
                                        .slice(i * 7, (i + 1) * 7)
                                        .map((item) => {
                                            return h(
                                                "div",
                                                {
                                                    class: [
                                                        "dd-picker-content_day",
                                                        {
                                                            notNowMonth:
                                                                item.pre,
                                                            notNowMonth:
                                                                item.nex,
                                                            nowDate:
                                                                _this.nowDate ==
                                                                item.y +
                                                                    "-" +
                                                                    (item.m < 10
                                                                        ? `0${item.m}`
                                                                        : item.m) +
                                                                    "-" +
                                                                    (item.d < 10
                                                                        ? `0${item.d}`
                                                                        : item.d),
                                                            activeDate:
                                                                _this.activeDate ==
                                                                item.y +
                                                                    "-" +
                                                                    (item.m < 10
                                                                        ? `0${item.m}`
                                                                        : item.m) +
                                                                    "-" +
                                                                    (item.d < 10
                                                                        ? `0${item.d}`
                                                                        : item.d),
                                                        },
                                                    ],
                                                    on: {
                                                        click(e) {
                                                            _this.activeDate =
                                                                item.y +
                                                                "-" +
                                                                (item.m < 10
                                                                    ? `0${item.m}`
                                                                    : item.m) +
                                                                "-" +
                                                                (item.d < 10
                                                                    ? `0${item.d}`
                                                                    : item.d);
                                                            _this.$emit(
                                                                "change",
                                                                _this.activeDate
                                                            );
                                                            _this.$parent.dd_changes();
                                                        },
                                                    },
                                                },
                                                [h("span", item.d)]
                                            );
                                        })
                                );
                            }),
                        ]
                    ),
                ]
            ),
        ]);
    },
    methods: {
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
    },
    created() {
        this.getData(this.value ? this.value + "" : new Date());
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
</style>
