<script>
export default {
    name: "ddTable",
    props: {
        data: {
            type: Array,
            default: [],
        },
        stripe: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [String, Number],
        },
    },
    render: function (h) {
        let _this = this;
        let tableList = this.$slots.default;
        console.log(tableList);
        let vnode = [];
        tableList.map((item, i) => {
            let { prop, label, width } = item.componentOptions.propsData;
            vnode.push({
                prop,
                label,
                width,
                children: item.componentOptions.children,
            });
        });

        return h(
            "div",
            {
                class: ["dd-table"],
            },
            [
                h(
                    "table",
                    {
                        attrs: {
                            cellspacing: 0,
                        },
                    },
                    [
                        h("thead", [h("tr", {}, [_this.$slots.default])]),
                        h("tbody", [
                            _this.data.map((item, i) => {
                                return h(
                                    "tr",
                                    {
                                        class: [
                                            "dd-table_cell",
                                            _this.stripe && i % 2 !== 0
                                                ? "striped"
                                                : "",
                                        ],
                                    },
                                    [
                                        Array.from({
                                            length: tableList.length,
                                        }).map((items, j) => {
                                            return h(
                                                "td",
                                                {
                                                    // style: {
                                                    //     width: vnode[i].width
                                                    //         ? vnode[i].width +
                                                    //           "px"
                                                    //         : (1 /
                                                    //               Object.keys(
                                                    //                   item
                                                    //               ).length) *
                                                    //               100 +
                                                    //           "%",
                                                    // },
                                                },
                                                [
                                                    h(
                                                        "div",
                                                        {
                                                            class: ["cell"],
                                                        },
                                                        vnode[j].children
                                                            ? vnode[j].children
                                                            : item[
                                                                  Object.keys(
                                                                      item
                                                                  )[j]
                                                              ]
                                                    ),
                                                ]
                                            );
                                        }),
                                    ]
                                );
                            }),
                        ]),
                    ]
                ),
            ]
        );
    },
};
</script>

<style scoped lang="less">
.dd-table {
    height: 100%;
    table {
        width: 100%;
        th {
            // background-color: #fff;
            -webkit-touch-callout: none;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
        }
        td,
        th {
            padding: 15px 10px;
            // background-color: #fff;
            border-bottom: 1px solid #ebeef5;
        }
        td {
            padding: 15px 0;
            .cell {
                padding: 0 10px;
            }
        }
        .dd-table_cell {
            &:hover {
                transition: background-color 0.25s ease;
                background-color: #f5f7fa !important;
            }
        }
        .striped {
            background-color: #fafafa;
        }
    }
    .isFix {
        position: sticky;
        left: 0px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    }
}
</style>
