<script>
export default {
    name: "ddCarousel",
    props: {
        height: {
            type: String,
        },
    },
    data() {
        return {
            carouselIndex: 0,
            carouselLength: 0,
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
                        class: ["dd-carousel_container"],
                        style: {
                            height: this.height,
                        },
                    },
                    [
                        carouselList.map((item, i) => {
                            return h("div", {
                                class: ["dd-carousel-item"],
                                ref: `carouselItem-${i}`,
                                style: {
                                    width: "500px",
                                },
                                // domProps: {
                                //     innerHTML: "132",
                                // },
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
    methods: {
        getWidth() {
            return this.carouselItem.offsetWidth;
        },
    },
    mounted() {
        this.getWidth();
    },
};
</script>

<style lang="less" scoped>
.dd-carousel {
    // overflow-x: hidden;
    position: relative;
    .dd-carousel_container {
        width: auto;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
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
        }
        .dd-carousel-item {
            position: absolute;
            // top: 0;
            // left: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            overflow: hidden;
            // z-index: 0;
        }
    }
}
</style>
