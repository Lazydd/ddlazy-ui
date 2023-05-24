<script>
import ddIcon from "../../dd-icon";
let zIndex = 2000;
export default {
    name: "ddDropdownMenu",
    props: {},
    render: function (h) {
        let _this = this;
        let vnodeArr = [];
        zIndex++;
        let vnode = this.$slots.default;
        vnode.map((item, i) => {
            let { disabled, icon } = item.componentOptions.propsData;
            vnodeArr.push({ disabled, icon });
            if (
                item.componentOptions.propsData.hasOwnProperty("disabled") ||
                disabled === true
            ) {
                this.$set(vnodeArr[i], "disabled", true);
            } else {
                this.$set(vnodeArr[i], "disabled", false);
            }
        });
        return h(
            "ul",
            {
                class: "dd-dropdown-menu",
                ref: "dd-dropdown-menu",
                style: {
                    zIndex,
                    top: _this.$parent.splitButton ? "40px" : "20px",
                },
            },
            [
                h("div", {
                    class: "dd-dropdown-s",
                }),
                vnodeArr.map((item, i) => {
                    return h(
                        "li",
                        {
                            class: [
                                "dd-dropdown-item",
                                {
                                    "dd-dropdown-disabled":
                                        vnodeArr[i].disabled,
                                },
                            ],
                            on: {
                                click(e) {
                                    _this.$parent.activeValue =
                                        _this.$slots.default[
                                            i
                                        ].componentOptions.children[0].text;
                                    _this.$parent.isShow = false;
                                },
                            },
                        },
                        [
                            vnodeArr[i].icon
                                ? h("dd-icon", {
                                      props: {
                                          icon: vnodeArr[i].icon,
                                      },
                                  })
                                : "",
                            _this.$slots.default[
                                i
                            ].componentOptions.children.map((items) => {
                                return items.text;
                            }),
                        ]
                    );
                }),
            ]
        );
    },
    components: {
        ddIcon,
    },
};
</script>

<style lang="less" scoped>
.dd-dropdown-menu {
    position: absolute;
    left: 0;
    z-index: 10;
    padding: 10px 0;
    margin: 12px 0;
    min-width: 100px;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .dd-dropdown-item {
        list-style: none;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: #606266;
        cursor: pointer;
        outline: none;
        &:hover {
            background-color: #ecf5ff;
            color: #66b1ff;
        }
    }
    .dd-dropdown-disabled {
        cursor: default;
        color: #bbb;
        pointer-events: none;
    }
    .dd-dropdown-s {
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
</style>
