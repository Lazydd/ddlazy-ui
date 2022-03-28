<template>
    <tbody>
        <tr v-for="(item,i) in ">
            <div class="cell">
                <slot :row="scope">{{ label }}</slot>
            </div>
        </tr>
    </tbody>
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
        };
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
th {
    text-align: left;
    color: "#909399";
}
</style>
