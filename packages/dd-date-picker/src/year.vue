<script>
import dayjs from "dayjs";
export default {
    props: {
        value: {},
    },
    data() {
        return {
            yearArr: [],
            activeYear: this.value
                ? dayjs(this.value + "").format("YYYY")
                : null,
            nowYear: dayjs().format("YYYY"),
            showYear: dayjs(this.value ? this.value + "" : new Date()).format(
                "YYYY"
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
                                            _this.showYear = dayjs(
                                                _this.showYear
                                            ).subtract("12", "year");
                                            _this.getYear(
                                                dayjs(_this.showYear)
                                            );
                                        },
                                    },
                                }),
                            ]
                        ),
                        h("span", dayjs(_this.showYear).format("YYYY") + "年"),
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
                                            _this.showYear = dayjs(
                                                _this.showYear
                                            ).add("12", "year");
                                            _this.getYear(
                                                dayjs(_this.showYear)
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
                                class: "dd-picker-tb-year",
                            },
                            [
                                _this.yearArr.map((item) => {
                                    return h(
                                        "div",
                                        {
                                            class: [
                                                "dd-picker-content_year",
                                                {
                                                    nowYear:
                                                        _this.nowYear == item,
                                                    activeYear:
                                                        _this.activeYear ==
                                                        item,
                                                },
                                            ],
                                            on: {
                                                click(e) {
                                                    _this.activeYear = item;
                                                    _this.$emit(
                                                        "change",
                                                        _this.activeYear
                                                    );
                                                    _this.$parent.dd_changes();
                                                },
                                            },
                                        },
                                        [h("span", item)]
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
        getYear(year) {
            let yearArr = [];
            let years = new Date(year).getFullYear();
            for (let i = years - 5; i < years + 7; i++) {
                yearArr.push(i);
            }
            this.yearArr = yearArr;
        },
    },
    created() {
        this.getYear(this.value ? this.value + "" : new Date());
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
.dd-picker-tb-year {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .dd-picker-content_year {
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
    .nowYear {
        color: #409eff;
        font-weight: 700;
    }
    .activeYear {
        color: #409eff;
    }
}
</style>
