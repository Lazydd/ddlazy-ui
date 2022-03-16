<script>
export default {
    name: "ddRow",
    render(h) {
        return h(
            "div",
            {
                class: ["dd-row", { isflex: this.type === "flex" }],
                style: {
                    "justify-content":
                        this.justify == "end" ? "flex-end" : this.justify,
                    "align-items": this.align,
                    "margin-left": "-" + this.gutter / 2 + "px",
                    "margin-right": "-" + this.gutter / 2 + "px",
                },
            },
            this.$slots.default
        );
    },
    props: {
        gutter: {
            type: [String, Number],
            default: 0,
        },
        type: {
            type: String,
        },
        justify: {
            type: String,
            default: "start",
        },
        align: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-row {
    display: flex;
    height: auto;
}
.isflex {
    display: flex;
}
</style>
