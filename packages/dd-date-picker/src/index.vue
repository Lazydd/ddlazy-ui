<script>
import mixin from "../../dd-mixins/mixin";
import moment from "moment";
import year from "./year.vue";
import month from "./month.vue";
import date from "./date.vue";
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
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {},
    },
    data() {
        return {
            isShow_dropdown: false,
            activeDate: null,
            isShowClear: false,
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
                    class: [
                        "dd-date-picker_inner",
                        _this.disabled ? "is-disabled" : "",
                        _this.size,
                    ],
                    domProps: {
                        value: _this.activeDate,
                        disabled: _this.disabled,
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
                            props: {
                                icon: "icon-calendar",
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
                                  props: {
                                      icon: "icon-reeor",
                                  },
                                  on: {
                                      click(e) {
                                          _this.activeDate = "";
                                          _this.change(_this.activeDate);
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
                                <date
                                    value={_this.time}
                                    on-change={_this.change}
                                ></date>
                            ) : _this.type === "year" ? (
                                <year
                                    value={_this.time}
                                    on-change={_this.change}
                                ></year>
                            ) : _this.type === "month" ? (
                                <month
                                    value={_this.time}
                                    on-change={_this.change}
                                ></month>
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
        change(data) {
            this.$emit("input", data);
            this.activeDate = data;
        },
        initData() {
            if (this.value) {
                if (this.type === "date") {
                    this.activeDate = moment(this.value + "").format(
                        "YYYY-MM-DD"
                    );
                } else if (this.type === "year") {
                    this.activeDate = moment(this.value + "").format("YYYY");
                } else if (this.type === "month") {
                    this.activeDate = moment(this.value + "").format("YYYY-MM");
                }
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
        this.initData();
    },
    computed: {
        time() {
            return this.value;
        },
    },
    components: {
        year,
        month,
        date,
    },
    watch: {
        isShow_dropdown(val) {
            this.$emit("visible-change", val);
        },
        value(val) {
            this.initData();
        },
    },
};
</script>

<style lang="less" scoped>
.dd-date-picker {
    position: relative;
    display: inline-block;
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
    .is-disabled {
        cursor: not-allowed;
        color: #c0c4cc !important;
        background-color: #f5f7fa;
        border-color: #e4e7ed !important;
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
    }
    .medium {
        height: 40px;
        line-height: 40px;
    }
    .small {
        height: 32px;
        line-height: 32px;
    }
    .mini {
        height: 28px;
        line-height: 28px;
    }
}
</style>
