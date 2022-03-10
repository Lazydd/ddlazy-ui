<script>
import ddIcon from "../../dd-icon";
export default {
    name: "ddCarousel",
    props: {
        height: {
            type: String,
        },
        loop: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            carouselIndex: 0,
            carouselLength: 0,
            activeIndicator: 0,
        };
    },
    render: function (h) {
        const _this = this;
        let carouselList = this.$slots.default;
        this.carouselLength = carouselList.length;
        // let vnode = [];
        // let vnodeObj = {};
        // carouselList.map((item, i) => {
        //     let { name, label, icon } = item.componentOptions.propsData;
        //     vnode.push({ name, label, icon });
        // });
        return h(
            "div",
            {
                class: ["dd-carousel"],
            },
            [
                h(
                    "div",
                    {
                        class: ["dd-carousel_arrow", "dd-carousel_arrow-left"],
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
                                icon: "icon-arrow-left",
                            },
                        }),
                    ]
                ),
                h(
                    "div",
                    {
                        class: ["dd-carousel_arrow", "dd-carousel_arrow-right"],
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
                                    if (
                                        _this.activeIndicator ==
                                        _this.carouselLength - 1
                                    ) {
                                        _this.activeIndicator = 0;
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
                                icon: "icon-arrow-right",
                            },
                        }),
                    ]
                ),
                h(
                    "div",
                    {
                        class: ["dd-carousel_container"],
                        ref: "dd-carousel_container",
                        style: {
                            height: this.height,
                            width: this.carouselLength * 100 + "%",
                        },
                    },
                    [
                        carouselList.map((item, i) => {
                            return h("div", {
                                class: ["dd-carousel-item"],
                                ref: `carouselItem-${i}`,
                            });
                        }),
                    ]
                ),
                h(
                    "ul",
                    {
                        class: ["dd-carousel_indicators"],
                    },
                    [
                        carouselList.map((item, i) => {
                            return h("li", {
                                class: [
                                    "dd-carousel_indicator",
                                    _this.activeIndicator == i
                                        ? "dd-carousel_indicator_active"
                                        : "",
                                ],
                                on: {
                                    click(e) {
                                        _this.activeIndicator = i;
                                        _this.carouselMove();
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
        carouselMove() {
            this.$refs["dd-carousel_container"].style.left =
                -(this.getWidth() * this.activeIndicator) + "px";
        },
    },
    mounted() {
        this.getWidth();
    },
    watch: {
        activeIndicator(val) {
            this.carouselMove();
        },
    },
};
</script>

<style lang="less" scoped>
.dd-carousel {
    overflow-x: hidden;
    width: 100%;
    position: relative;
    .dd-carousel_container {
        position: relative;
        display: flex;
        left: 0;
        flex-wrap: nowrap;
        align-items: center;
        transition: all 1s;

        .dd-carousel-item {
            // position: absolute;
            // top: 0;
            // left: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            overflow: hidden;
            // z-index: 0;
        }
    }
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
        .dd-icon {
            font-size: 30px;
        }
    }
    .dd-carousel_arrow-left {
        left: 16px;
    }
    .dd-carousel_arrow-right {
        right: 16px;
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
            background: #fff;
            margin: 0 4px;
            cursor: pointer;
            border-radius: 50%;
        }
        .dd-carousel_indicator_active {
            background: #999;
        }
    }
}
</style>
