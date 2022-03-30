<script>
export default {
    props: ["column", "row", "index", "align"],
    render(h) {
        const row = this.row;
        const column = this.column;
        const index = this.index;
        return (
            <td
                style={{
                    "text-align": column.align,
                    // "border-bottom": $parent.border
                    //     ? "none"
                    //     : "1px solid #ebeef5",
                }}
                class={
                    this.$parent.border
                        ? "dd-table-body_border"
                        : "dd-table-body_default"
                }
            >
                <div class="cell">
                    {this.column.renderCell.call(this, h, {
                        row,
                        column,
                        index,
                    })}
                </div>
            </td>
        );
    },
};
</script>

<style scoped lang="less">
.dd-table-body_border {
    border: 1px solid #ebeef5;
    border-top: none;
    border-left: none;
}
.dd-table-body_default {
    border-bottom: 1px solid #ebeef5;
}
td {
    padding: 15px 0;
    .cell {
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
    }
}
</style>
