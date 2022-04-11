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
        duration: {
            type: Number,
            default: 1000,
        },
        move: {
            type: Number,
            default: 1,
        },
        showNumber: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            carouselLength: 0,
            carouselList: [],
            isAnimation: false,
            width: 0,
            index: 1,
            duration2: 0,
            moveDirection: 0,
        };
    },
    render: function (h) {
        const _this = this;
        this.carouselList = this.$slots.default;
        this.carouselLength = this.carouselList.length;
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
                        ref: "dd-carousel_box",
                        style: {
                            height: this.height ? this.height + "px" : "",
                            overflow: "hidden",
                        },
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
                                        _this._directionNavClick(-1);
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
                                        _this._directionNavClick(1);
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
                        h(
                            "div",
                            {
                                class: ["dd-carousel_container"],
                                ref: "dd-carousel_container",
                                style: _this.style,
                            },
                            [
                                _this.carouselList.map((item, i) => {
                                    return item;
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
                                        _this.index == i + 1
                                            ? _this.activeColor
                                            : _this.inactiveColor,
                                },
                                on: {
                                    click(e) {
                                        _this._controlNavClick(i + 1);
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
        style() {
            const len = this.carouselList.length;
            let distance = this.width;
            let translate = "translateX";
            let isWrap = "nowrap";
            let obj = {};
            if (this.direction === "vertical") {
                // 垂直方向
                distance = this.height;
                translate = "translateY";
                isWrap = "wrap";
            } else {
                obj.width = len * distance + "px";
            }
            if (distance && len > 0) {
                let moveWidth = -distance * this.move; // 每次移动的宽
                let transformWidth = moveWidth * this.moveDirection;
                if (this.loop) {
                    transformWidth += moveWidth;
                } else {
                    transformWidth = moveWidth * (this.index - 1);
                    if (this.direction === "h") {
                        const maxX = this.$el.offsetWidth - len * distance; // 最大可移动距离
                        if (transformWidth < maxX) {
                            transformWidth = maxX; // 仿止右边出现空白
                        }
                    }
                }
                return Object.assign(
                    {
                        overflow: "hidden",
                        transform: `${translate}(${transformWidth}px)`,
                        transition: `transform ${this.duration2}ms`,
                        flexWrap: isWrap,
                    },
                    obj
                );
            } else {
                return {};
            }
        },
    },
    components: {
        ddIcon,
    },
    methods: {
        getWidth() {
            this.width = this.$el.offsetWidth/this.showNumber;
        },
        _controlNavClick(page) {
            this.duration2 = 1000;
            if (page > this.index) {
                this._unShiftPush(1, page - this.index);
            } else {
                this._unShiftPush(-1, this.index - page);
            }
            this.index = page;
        },
        _directionNavClick(type) {
            if (this.isAnimation) {
                return;
            }
            if (type === 1) {
                // 下一页
                if (this.carouselLength > this.index) {
                    this.index++;
                } else {
                    if (this.loop) {
                        this.index = 1;
                    } else {
                        return;
                    }
                }
            } else {
                // 上一页
                if (this.index > 1) {
                    this.index--;
                } else {
                    if (this.loop) {
                        this.index = this.carouselLength;
                    } else {
                        return;
                    }
                }
            }
            this.isAnimation = true;
            // this.$emit("slideBefore", this.index);
            this.moveDirection = type;
            this.duration2 = this.duration;
            this._setTimeOutReset(type);
        },
        _setTimeOutReset(type) {
            // 动画完成后回到初始translate
            setTimeout(() => {
                if (this.loop) {
                    this.moveDirection = 0;
                    this.duration2 = 0;
                    this._unShiftPush(type);
                }
                this.isAnimation = false;
                this.$emit("slideAfter", this.index);
            }, this.duration);
        },
        _unShiftPush(type, move) {
            if (!this.loop) {
                return;
            }
            const moveNum = move || this.move;
            if (type === 1) {
                // 删除前面第N个，追加到最后
                const pre = this.carouselList.slice(0, moveNum);
                this.carouselList.splice(0, moveNum);
                pre.forEach((item) => {
                    this.carouselList.push(item);
                });
            } else {
                // 将数组最后N条移动到最前面
                const next = this.carouselList.slice(
                    this.carouselList.length - moveNum
                );
                for (let i = next.length; i > 0; i--) {
                    this.carouselList.unshift(next[i - 1]);
                }
                this.carouselList.splice(this.carouselList.length - moveNum);
            }
        },
        resize() {
            this.getWidth();
        },
    },
    mounted() {
        let showPage = 0;
        if (!this.loop && this.showNumber > 1) {
            showPage = Math.ceil(this.showNumber / this.move) - 1; // 可视个数所占的页数
        }
        this.maxMove = Math.ceil(
            (this.carouselList.length - showPage) / this.move
        );
        // 总个数大于每次单位移动个数时
        if (this.loop && this.carouselList.length >= this.move) {
            // 截取后面移动单位个数移动到前面,
            this._unShiftPush(-1);
        }
        this.getWidth();
        window.addEventListener("resize", this.resize);
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
