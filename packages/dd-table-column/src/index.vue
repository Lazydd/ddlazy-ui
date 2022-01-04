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
            default: "left",
        },
    },
    render: function (h) {
        return h(
            "th",
            {
                style: {
                    "text-align": "left",
                    color: "#909399",
                },
            },
            [
                h(
                    "div",
                    {
                        style: {
                            width: this.width + "px",
                        },
                    },
                    this.label
                ),
            ]
        );
    },
};
</script>

<style lang="less" scoped></style>
