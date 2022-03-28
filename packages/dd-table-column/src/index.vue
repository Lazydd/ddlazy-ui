<template>
    <td>
        <div class="cell">
            <slot :row="scope">
                {{ tableData[1][prop] }}
            </slot>
        </div>
    </td>
</template>

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
    data() {
        return {
            scope: {
                name: "aaa",
                age: 18,
            },
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            data: {},
        };
    },
    created() {
        // console.log(this.$parent.data);
    },
    // render: function (h) {
    //     let isFixed = {};
    //     if (this.fixed) {
    //         isFixed.position = "sticky";
    //         isFixed[this.fixed] = "0px";
    //         isFixed["background-color"] = "#ffffff";
    //         isFixed["box-shadow"] = "0 0 10px rgba(0,0,0,.12)";
    //     }
    //     return h(
    //         "th",
    //         {
    //             style: [isFixed],
    //         },
    //         [
    //             h(
    //                 "div",
    //                 {
    //                     class: ["cell"],
    //                 },
    //                 this.label
    //             ),
    //         ]
    //     );
    // },
};
</script>

<style lang="less" scoped>
.cell {
    padding: 0 10px;
}
</style>
