<script>
export default {
    name: "ddTableColumn",
    props: {
        prop: {
            type: String,
        },
        label: {
            type: String,
        },
        width: {
            type: [Number, String],
        },
        fixed: {
            type: String,
        },
    },
    render: function (h) {
        let isFixed = {};
        if (this.fixed) {
            isFixed.position = "sticky";
            isFixed[this.fixed] = "0px";
            isFixed["background-color"] = "#ffffff";
            isFixed["box-shadow"] = "0 0 10px rgba(0,0,0,.12)";
        }
        return h(
            "th",
            {
                style: [
                    isFixed,
                    {
                        "text-align": "left",
                        color: "#909399",
                        width: this.width + "px",
                    },
                ],
            },
            [
                h(
                    "div",
                    {
                        class: ["cell"],
                    },
                    this.label
                ),
            ]
        );
    },
};
</script>

<style lang="less" scoped></style>
