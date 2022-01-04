<template>
    <div ref="dd-table" class="dd-table" :style="{ height, overflow: 'auto' }">
        <table cellspacing="0">
            <thead>
                <tr>
                    <slot></slot>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="dd-table_cell"
                    v-for="(thead, i) in data"
                    :key="i"
                    :stripe="stripe"
                >
                    <td
                        v-for="tbody in tableStore"
                        :style="tbody.width ? `width:${tbody.width}` : ''"
                        :class="[tbody.fixed ? 'isFix' : '']"
                        :key="tbody.prop"
                    >
                        <span v-if="tbody.prop">
                            {{ thead[tbody.prop] }}
                        </span>
                        <span v-else>
                            <slot :scope="tbody"></slot>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
let vnodeArr = [];
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
        height: {
            type: [String, Number],
        },
    },
    data() {
        const slotList = this.$slots.default;
        let vnodeObj = {};
        console.log(this.$slots);
        slotList.map((vnode, index) => {
            vnodeObj = vnode.componentOptions.propsData;
            vnodeObj["index"] = index;
            vnodeArr.push(vnodeObj);
        });
        return {
            tableStore: [],
        };
    },
    created() {
        this.tableStore = vnodeArr;
        vnodeArr = [];
    },
    mounted() {
        function scrollHandle(e) {
            let scrollTop = this.scrollTop;
            this.querySelector("thead").style.transform =
                "translateY(" + scrollTop + "px)";
        }
        this.$refs["dd-table"].addEventListener("scroll", scrollHandle);
    },
};
</script>

<style lang="less" scoped>
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
        .dd-table_cell {
            &:hover {
                transition: background-color 0.25s ease;
                background-color: #f5f7fa !important;
            }
        }
        tbody {
            tr {
                &[stripe] {
                    &:nth-child(even) {
                        background-color: #fafafa;
                    }
                }
            }
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
