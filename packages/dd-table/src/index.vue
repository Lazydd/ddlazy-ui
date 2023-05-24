<template>
    <div :class="['dd-table', { 'dd-table_border': border }]">
        <div style="display: none">
            <slot />
        </div>
        <table cellspacing="0" cellpadding="0" border="0">
            <thead>
                <tr>
                    <th
                        v-for="(item, i) in vnode"
                        :key="i"
                        :class="{ 'dd-table_th-border': border }"
                        :style="`width:${
                            item.width ? item.width + 'px' : ''
                        };text-align:${item.headerAlign};min-width:${
                            item.minWidth ? item.minWidth + 'px' : ''
                        }
                        `"
                    >
                        {{ item.label }}
                    </th>
                </tr>
            </thead>
            <table-body :data="data" :stripe="stripe" :border="border" />
        </table>
    </div>
</template>

<script>
import TableBody from "./table-body.vue";
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
        border: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            vnode: [],
            column: [],
            parameter: {},
        };
    },
    mounted() {
        this.$children.map((item) => {
            let item2 = item;
            if (item.child) item2 = item.child;
            if (item.$options.componentName == "ddTableColumn") {
                this.column.push(item2);
            }
        });
    },
    methods: {
        getThead() {
            this.vnode = [];
            this.$slots.default.map((item, i) => {
                let { label, width, headerAlign, minWidth } =
                    item.componentOptions.propsData;
                this.vnode.push({
                    label,
                    width,
                    minWidth,
                    headerAlign,
                });
            });
        },
    },
    created() {
        this.getThead();
    },
    components: {
        TableBody,
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
        thead {
            color: #909399;
            font-weight: 500;
        }
        th {
            padding: 15px 10px;
            text-align: left;
            border-bottom: 1px solid #ebeef5;
        }
        .dd-table_th-border {
            border: 1px solid #ebeef5;
            border-top: none;
            border-left: none;
        }
    }
    .isFix {
        position: sticky;
        left: 0px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    }
}
.dd-table_border {
    border: 1px solid #ebeef5;
    border-bottom: none;
    border-right: none;
}
</style>
