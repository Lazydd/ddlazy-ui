<script>
import ddButton from "../../dd-button";
let timer;
export default {
    name: "ddDropdown",
    props: {
        value: {},
        trigger: {
            type: String,
            default: "hover",
        },
        type: {
            type: String,
        },
        size: {
            type: String,
        },
        splitButton: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isShow: false,
            activeValue: this.value,
        };
    },
    render: function (h) {
        let _this = this;
        return h(
            "div",
            {
                class: "dd-dropdown",
            },
            [
                h(
                    "div",
                    {
                        ref: "dd-dropdown",
                    },
                    [
                        this.splitButton
                            ? h(
                                  "dd-button",
                                  {
                                      props: {
                                          type: _this.type,
                                          size: _this.size,
                                      },
                                  },
                                  [_this.$slots.default]
                              )
                            : _this.$slots.default,
                        _this.trigger === "hover"
                            ? h(
                                  "transition",
                                  {
                                      props: {
                                          name: "dd-zoom-top",
                                      },
                                  },
                                  [_this.isShow ? _this.$slots.dropdown : ""]
                              )
                            : "",
                    ]
                ),
                _this.trigger === "click"
                    ? h(
                          "transition",
                          {
                              props: {
                                  name: "dd-zoom-top",
                              },
                          },
                          [_this.isShow ? _this.$slots.dropdown : ""]
                      )
                    : "",
            ]
        );
    },
    methods: {
        except(e) {
            let isSelf = this.$refs["dd-dropdown"].contains(e.target);
            if (this.trigger === "hover") {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.isShow = !isSelf ? false : true;
                }, 200);
            } else {
                if (this.isShow) {
                    this.isShow = false;
                    return;
                }
                this.isShow = !isSelf ? false : true;
            }
        },
    },
    mounted() {
        if (this.trigger === "click")
            document.addEventListener("click", this.except);
        if (this.trigger === "hover") {
            document.addEventListener("mouseover", this.except);
        }

        // if (this.$slots.dropdown)
        //     document.body.appendChild(this.$slots.dropdown);
    },
    beforeDestroy() {
        if (this.trigger === "click")
            document.removeEventListener("click", this.except);
        if (this.trigger === "hover") {
            document.removeEventListener("mouseover", this.except);
        }
    },
    components: {
        ddButton,
    },
    watch: {
        activeValue(val) {
            this.$emit("input", val);
            this.$emit("visible-change", val);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-dropdown {
    position: relative;
    display: inline-block;
    .dd-dropdown-link {
        cursor: pointer;
        color: #409eff;
    }
}
.dd-zoom-top-enter-active,
.dd-zoom-top-leave-active {
    transition: transform 0.2s;
}
.dd-zoom-top-enter,
.dd-zoom-top-leave-to {
    transform: scale(1, 0);
    transform-origin: center top;
}
.dd-zoom-top-enter-to,
.dd-zoom-top-leave {
    transform: scale(1, 1);
    transform-origin: center top;
}
</style>
