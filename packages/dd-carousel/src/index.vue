<script>
import ddIcon from "../../dd-icon";
export default {
    name: "ddCarousel",
    props: {
        height: {
            type: Number,
        },
        loop: {
            type: Boolean,
            default: false,
        },
        arrow: {
            type: String,
            default: "hover",
        },
        activeColor: {
            type: String,
            default: "#999",
        },
        inactiveColor: {
            type: String,
            default: "#c0c4cc",
        },
        slideType: {
            type: String,
            default: "circle",
        },
        type: {
            type: String,
        },
        indicatorPosition: {
            type: String,
        },
        direction: {
            type: String,
            default: "horizontal",
        },
    },
    data() {
        return {
            carouselIndex: 0,
            carouselLength: 0,
            activeIndicator: 0,
            carouselList: [],
            isLeft: false,
            left: 0,
        };
    },
    render: function (h) {
        const _this = this;
        this.carouselList = this.$slots.default;
        if (this.loop) {
            this.carouselLength = this.carouselList.length + 1;
        } else {
            this.carouselLength = this.carouselList.length;
        }
        // let vnode = [];
        let vnodeObj = {};
        this.carouselList.map((item, i) => {
            vnodeObj[item.componentOptions.propsData.name] = item;
            // let { name, label, icon } = item.componentOptions.propsData;
            // vnode.push({ name, label, icon });
        });

        return h(
            "div",
            {
                class: [
                    "dd-carousel",
                    _this.arrow === "hover" ? "isAHover" : "",
                    _this.arrow === "never" ? "isNever" : "",
                ],
                style: {
                    height:
                        _this.indicatorPosition === "outside"
                            ? `${_this.height + 36}px`
                            : "100%",
                },
            },
            [
                h(
                    "div",
                    {
                        class: ["dd-carousel_box"],
                    },
                    [
                        h(
                            "div",
                            {
                                class: [
                                    "dd-carousel_arrow",
                                    _this.direction !== "vertical"
                                        ? "dd-carousel_arrow-left"
                                        : "dd-carousel_arrow-top",
                                ],
                                on: {
                                    click(e) {
                                        if (!_this.loop) {
                                            if (_this.activeIndicator == 0) {
                                                return;
                                            } else {
                                                _this.activeIndicator--;
                                            }
                                        } else {
                                            if (_this.activeIndicator == 0) {
                                                _this.activeIndicator =
                                                    _this.carouselLength - 1;
                                            } else {
                                                _this.activeIndicator--;
                                            }
                                        }
                                    },
                                },
                            },
                            [
                                h("dd-icon", {
                                    props: {
                                        icon:
                                            _this.direction !== "vertical"
                                                ? "icon-arrow-left"
                                                : "icon-arrow-up",
                                    },
                                }),
                            ]
                        ),
                        h(
                            "div",
                            {
                                class: [
                                    "dd-carousel_arrow",
                                    _this.direction !== "vertical"
                                        ? "dd-carousel_arrow-right"
                                        : "dd-carousel_arrow-bottom",
                                ],
                                on: {
                                    click(e) {
                                        if (!_this.loop) {
                                            if (
                                                _this.activeIndicator ==
                                                _this.carouselLength - 1
                                            ) {
                                                return;
                                            } else {
                                                _this.activeIndicator++;
                                            }
                                        } else {
                                            if (_this.activeIndicator == 5) {
                                                _this.activeIndicator = 0;
                                                _this.isLeft = true;
                                            } else {
                                                _this.activeIndicator++;
                                            }
                                        }
                                    },
                                },
                            },
                            [
                                h("dd-icon", {
                                    props: {
                                        icon:
                                            _this.direction !== "vertical"
                                                ? "icon-arrow-right"
                                                : "icon-arrow-down",
                                    },
                                }),
                            ]
                        ),
                        h("div", {
                            domProps: {
                                innerHTML:
                                    _this.left +
                                    "-----" +
                                    _this.activeIndicator,
                            },
                        }),
                        h(
                            "div",
                            {
                                class: ["dd-carousel_container"],
                                ref: "dd-carousel_container",
                                style: {
                                    height:
                                        _this.direction === "vertical"
                                            ? _this.carouselLength * 100 + "%"
                                            : _this.height + "px",
                                    width:
                                        _this.direction !== "vertical"
                                            ? _this.type === "card"
                                                ? _this.carouselLength * 45 +
                                                  "%"
                                                : _this.carouselLength * 100 +
                                                  "%"
                                            : "100%",
                                    flexWrap:
                                        _this.direction !== "vertical"
                                            ? "nowrap"
                                            : "wrap",
                                    transition:
                                        _this.activeIndicator == 5
                                            ? ""
                                            : "all 1s",
                                },
                            },
                            [
                                _this.carouselList.map((item, i) => {
                                    return h(
                                        "div",
                                        {
                                            class: [
                                                "dd-carousel-item",
                                                _this.type === "card" &&
                                                _this.activeIndicator != i
                                                    ? "isCard"
                                                    : "",
                                            ],
                                            ref: `carouselItem-${i}`,
                                        },
                                        [
                                            _this.$slots.default[
                                                i
                                            ].componentOptions.children.map(
                                                (item) => {
                                                    return item;
                                                }
                                            ),
                                        ]
                                    );
                                }),
                            ]
                        ),
                    ]
                ),
                h(
                    "ul",
                    {
                        class: [
                            "dd-carousel_indicators",
                            _this.direction === "vertical"
                                ? "dd-carousel_indicators_vertical"
                                : "",
                        ],
                    },
                    [
                        _this.carouselList.map((item, i) => {
                            return h("li", {
                                class: [
                                    _this.slideType === "rectangle"
                                        ? "dd-carousel_indicator_rec"
                                        : "dd-carousel_indicator",
                                ],
                                style: {
                                    backgroundColor:
                                        _this.activeIndicator == i
                                            ? _this.activeColor
                                            : _this.inactiveColor,
                                },
                                on: {
                                    click(e) {
                                        _this.activeIndicator = i;
                                        _this.direction !== "vertical"
                                            ? _this.carouselMove()
                                            : _this.carouseMove_vertical();
                                    },
                                },
                            });
                        }),
                    ]
                ),
            ]
        );
    },
    computed: {
        carouselItem() {
            return this.$refs[`carouselItem-${this.carouselIndex}`];
        },
    },
    components: {
        ddIcon,
    },
    methods: {
        getWidth() {
            return this.carouselItem.offsetWidth;
        },
        getHeight() {
            return this.carouselItem.offsetHeight;
        },
        carouselMove() {
            let left =
                -(
                    this.activeIndicator *
                    (this.type === "card" ? this.getWidth() : 100)
                ) + (this.type === "card" ? "px" : "%");
            if (this.loop && this.activeIndicator == 5) {
                left = 0;
            }
            this.left = left;
            this.$refs["dd-carousel_container"].style.left = left;
        },
        carouseMove_vertical() {
            this.$refs["dd-carousel_container"].style.top =
                -(this.activeIndicator * 100) + "%";
        },
        // carouselMove() {
        //     this.$refs["dd-carousel_container"].style.left =
        //         -(this.getWidth() * this.activeIndicator) + "px";
        // },
    },
    mounted() {
        // if (this.loop) {
        //     this.carouselList.push(this.carouselList[0]);
        // }
        if (this.loop) {
            let vnode =
                this.$refs["dd-carousel_container"].children[0].cloneNode(true);
            this.$refs["dd-carousel_container"].appendChild(vnode);
        }
    },
    watch: {
        activeIndicator(val) {
            // if (val == 5) this.activeIndicator = 1;
            this.direction === "vertical"
                ? this.carouseMove_vertical()
                : this.carouselMove();
        },
    },
};
</script>

<style lang="less" scoped>
.dd-carousel {
    overflow-x: hidden;
    width: 100%;
    position: relative;
    .dd-carousel_box {
        position: relative;
        .dd-carousel_arrow {
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            height: 36px;
            width: 36px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 50%;
            background-color: rgba(31, 45, 61, 0.11);
            color: #fff;
            position: absolute;
            top: 50%;
            z-index: 10;
            transform: translateY(-50%);
            text-align: center;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            &:hover {
                background-color: rgba(31, 45, 61, 0.23);
            }
            .dd-icon {
                font-size: 20px;
            }
        }
        .dd-carousel_arrow-left {
            left: 16px;
        }
        .dd-carousel_arrow-top {
            top: 16px;
            left: 50%;
            transform: translateX(-50%);
        }
        .dd-carousel_arrow-right {
            right: 16px;
        }
        .dd-carousel_arrow-bottom {
            bottom: 16px;
            top: unset;
            left: 50%;
            transform: translateX(-50%);
        }
        .dd-carousel_container {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            position: relative;
            left: 0;
            // transition: all 1s;

            .dd-carousel-item {
                // position: absolute;
                // top: 0;
                // left: 0;
                width: 100%;
                height: 100%;
                display: inline-block;
                overflow: hidden;
                transform: scale(1);
                transition: transform 1s;
                // z-index: 0;
            }
            .isCard {
                transform: scale(0.8);
                transition: transform 1s;
            }
        }
    }

    .dd-carousel_indicators {
        position: absolute;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        padding: 12px 4px;
        .dd-carousel_indicator {
            width: 8px;
            height: 8px;
            margin: 0 4px;
            cursor: pointer;
            border-radius: 50%;
        }
        .dd-carousel_indicator_rec {
            width: 30px;
            height: 2px;
            margin: 0 4px;
            cursor: pointer;
        }
    }
    .dd-carousel_indicators_vertical {
        flex-direction: column;
        padding: 4px 12px;
        left: unset;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);
        .dd-carousel_indicator {
            margin: 4px 0;
        }
        .dd-carousel_indicator_rec {
            margin: 4px 0;
        }
    }
}
.isAHover {
    .dd-carousel_box {
        .dd-carousel_arrow {
            opacity: 0;
            transition: all 0.5s;
        }
        .dd-carousel_arrow-left {
            margin-left: -16px;
        }
        .dd-carousel_arrow-right {
            margin-right: -16px;
        }
        .dd-carousel_arrow-top {
            margin-top: -16px;
        }
        .dd-carousel_arrow-bottom {
            margin-bottom: -16px;
        }
        &:hover {
            .dd-carousel_arrow {
                opacity: 1;
                margin: 0;
                transition: all 0.5s;
            }
        }
    }
    .dd-carousel_indicators {
        opacity: 0;
        transition: all 0.5s;
    }
    &:hover {
        .dd-carousel_indicators {
            opacity: 1;
            transition: all 0.5s;
        }
    }
}
.isNever {
    .dd-carousel_box {
        .dd-carousel_arrow {
            opacity: 0;
        }
    }
    .dd-carousel_indicators {
        opacity: 0;
    }
}
</style>
