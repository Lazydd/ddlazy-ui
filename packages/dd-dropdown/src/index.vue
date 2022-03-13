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
                class: ["dd-dropdown"],
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
                                          name: "fale",
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
                                  name: "fale",
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
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.3s;
}
.fale-enter,
.fale-leave-to {
    opacity: 0;
}
.fale-enter-to,
.fale-leave {
    opacity: 1;
}
</style>
