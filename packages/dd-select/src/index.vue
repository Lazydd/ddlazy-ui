<script>
import ddScroll from "../../dd-scroll";
import ddIcon from "../../dd-icon";
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddSelect",
    mixins: [mixin],
    props: {
        value: {
            type: [String, Number],
        },
        placeholder: {
            type: String,
        },
        size: {
            type: String,
            default: "medium",
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeIndex: "",
            activeSelect: "",
            isShow_dropdown: false,
            isActive: false,
        };
    },
    render: function (h) {
        let _this = this;
        let selectList = this.$slots.default;
        let vnode = [];
        selectList.map((item, i) => {
            let { value, label, disabled } = item.componentOptions.propsData;
            vnode.push({ value, label, disabled: !!disabled });
            if (label == this.value || value == this.value)
                this.activeSelect = label || value;
        });
        return h(
            "div",
            {
                class: "dd-select",
                ref: "dd-select",
            },
            [
                h("input", {
                    class: [
                        "dd-select_inner",
                        { "is-disabled": _this.disabled },
                        _this.size,
                    ],
                    domProps: {
                        value: _this.activeSelect,
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
                        class: "dd-input_suffix",
                    },
                    [
                        h("dd-icon", {
                            class: [
                                _this.clearable
                                    ? ""
                                    : _this.isActive
                                    ? "select_active"
                                    : "select_NOactive",
                            ],
                            props: {
                                icon:
                                    _this.clearable && _this.activeSelect
                                        ? "icon-reeor"
                                        : "icon-arrow-down",
                            },
                            on: {
                                click(e) {
                                    if (_this.clearable) {
                                        _this.activeIndex = "";
                                        _this.activeSelect = "";
                                        _this.$emit("input");
                                        _this.$emit("clear");
                                    }
                                    _this.isShow_dropdown =
                                        !_this.isShow_dropdown;
                                },
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
                                      class: "dd-select-dropdown",
                                  },
                                  [
                                      h("div", {
                                          class: "dd-select-dropdown-s",
                                      }),
                                      h(
                                          "dd-scroll",
                                          {
                                              ref: "dd-scroll-dropdown",
                                          },
                                          [
                                              h("ul", [
                                                  vnode.map((item, i) => {
                                                      return h("li", {
                                                          class: [
                                                              {
                                                                  activeSelect:
                                                                      _this.activeSelect ==
                                                                          item.label ||
                                                                      _this.activeSelect ==
                                                                          item.value,
                                                              },
                                                              {
                                                                  disabled:
                                                                      item.disabled,
                                                              },
                                                          ],
                                                          domProps: {
                                                              innerHTML:
                                                                  item.label ||
                                                                  item.value,
                                                          },
                                                          on: {
                                                              click(e) {
                                                                  if (
                                                                      item.disabled
                                                                  )
                                                                      return;
                                                                  _this.activeIndex =
                                                                      i;
                                                                  _this.activeSelect =
                                                                      item.label ||
                                                                      item.value;
                                                                  _this.isShow_dropdown = false;
                                                                  _this.$emit(
                                                                      "input",
                                                                      item.value ||
                                                                          item.label
                                                                  );
                                                                  _this.$emit(
                                                                      "change",
                                                                      item.value ||
                                                                          item.label
                                                                  );
                                                              },
                                                          },
                                                      });
                                                  }),
                                              ]),
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
            let isSelf = this.$refs["dd-select"]?.contains(e.target);
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
    watch: {
        isShow_dropdown(val) {
            this.isActive = val ? true : false;
            this.$emit("visible-change", val);
            if (this.isActive) {
                this.$nextTick(() => {
                    let scrollNod =
                        this.$refs["dd-scroll-dropdown"].$refs[
                            "dd-scrollbar_srap"
                        ];
                    if (scrollNod)
                        scrollNod.scrollTo({
                            top: this.activeIndex * 34,
                        });
                });
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-select {
    position: relative;
    display: inline-block;
    cursor: pointer;
    .dd-select_inner {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        cursor: pointer;
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
        right: 5px;
        transition: all 0.3s;
        cursor: pointer;
        color: #c0c4cc;
        font-size: 20px;
    }
    .select_active {
        transform: rotate(180deg);
        transition: all 0.3s;
    }
    .select_NOactive {
        transform: rotate(360deg);
        transition: all 0.3s;
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
    .dd-select-dropdown {
        // min-width: 240px;
        width: 100%;
        // height: 100px;
        max-height: 200px;
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
                    cursor: pointer;
                }
            }
            .disabled {
                color: #e4e7ed !important;
                cursor: not-allowed !important;
                font-weight: normal;
            }
            .activeSelect {
                color: #409eff;
                font-weight: 700;
            }
        }
        .dd-select-dropdown-s {
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
    }
}
</style>
