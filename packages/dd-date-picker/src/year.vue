<script>
import moment from "moment";
export default {
    props: {
        value: {},
    },
    data() {
        return {
            showYear: "2002",
            yearArr: [],
            activeYear: this.value ? moment(this.value).format("YYYY") : null,
            nowYear: moment().format("YYYY"),
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
                _this.activeYear,
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
                                            _this.showDate = moment(
                                                _this.showDate
                                            ).subtract("12", "year");
                                            _this.getYear(
                                                moment(_this.showDate)
                                            );
                                        },
                                    },
                                }),
                            ]
                        ),
                        h("span", moment(_this.showYear).format("YYYY") + "年"),
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
                                            _this.showDate = moment(
                                                _this.showDate
                                            ).add("12", "year");
                                            _this.getYear(
                                                moment(_this.showDate)
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
                                                _this.nowYear == item
                                                    ? "nowYear"
                                                    : "",
                                                _this.activeYear == item
                                                    ? "activeYear"
                                                    : "",
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
            console.log(year);
            console.log(years);
            for (let i = years - 4; i <= years + 7; i++) {
                yearArr.push(i);
            }
            this.yearArr = yearArr;
            console.log(this.yearArr);
        },
    },
    created() {
        console.log("999999999999999999999", this.value);
        this.getYear(this.value ? this.value : new Date());
    },
    watch: {
        activeYear(val) {
            console.log(val);
        },
        value(val) {
            console.log(88888, val);
        },
    },
};
</script>

<style scoped lang="less">
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
