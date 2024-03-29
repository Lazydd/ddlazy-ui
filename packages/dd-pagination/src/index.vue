<template>
    <div
        v-if="hideOnSinglePage ? total / pageSize > 1 : true"
        :class="['dd-pagination', { 'is-background': background }]"
    >
        <div :small="small">
            <div v-if="isShow.total" class="dd-pagination_total">
                共 {{ total }} 条
            </div>
            <div class="dd-pagination_sizes" v-if="isShow.sizes && pageSizes">
                <dd-select
                    v-model="currentPageSizes"
                    size="mini"
                    @change="currentPageSizesChange"
                >
                    <dd-option
                        v-for="item in pageSizes"
                        :key="item"
                        :label="`${item}条/页`"
                        :value="item"
                    />
                </dd-select>
            </div>
            <div
                v-if="isShow.prev"
                class="btn-pre control"
                @click="!disabled ? (!disabledPre ? btn_pre() : null) : null"
                :disabled="disabled ? disabled : disabledPre || pageCounts == 1"
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-left`" />
                </svg>
            </div>
            <ul class="pager" :disabled="disabled" v-if="isShow.pager">
                <li
                    class="number"
                    @click="dd_toFirst"
                    v-if="currentPages > 4 && pageCounts > 7"
                >
                    1
                </li>
                <li class="number" v-if="currentPages > 4 && pageCounts > 7">
                    ...
                </li>
                <li
                    class="number"
                    v-for="(page, index) in pageCountsListItem"
                    :key="index"
                    :class="page == currentPages ? 'active' : ''"
                    @click="!disabled ? pagerClick(page) : null"
                >
                    {{ page }}
                </li>
                <li
                    class="number"
                    v-if="pageCounts > 7 && currentPages < pageCounts - 3"
                >
                    ...
                </li>
                <li
                    class="number"
                    @click="dd_toLast"
                    v-if="pageCounts > 7 && currentPages < pageCounts - 3"
                >
                    {{ pageCounts }}
                </li>
            </ul>
            <div
                v-if="isShow.next"
                class="btn-next control"
                @click="!disabled ? (!disabledNext ? btn_next() : null) : null"
                :disabled="
                    disabled ? disabled : disabledNext || pageCounts == 1
                "
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-right`" />
                </svg>
            </div>
            <div class="dd-pagination__jump" v-if="isShow.jumper">
                <span
                    >前往
                    <div class="dd-input">
                        <input
                            class="dd-input_inner"
                            type="number"
                            v-model="dd_pagination_input"
                            @change="ddJumper"
                        />
                    </div>
                    页
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddPagination",
    props: {
        total: {
            type: Number,
        },
        layout: {
            type: String,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        pageSizes: {
            type: Array,
            default: () => [10, 20, 30, 40, 50],
        },
        pageCount: {
            type: Number,
        },
        background: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        "hide-on-single-page": {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            currentPages: this.currentPage || 1,
            pagesize: this.pageSize || 10,
            pageCounts: this.pageCount,
            pageCountsList: [],
            pageCountsListItem: [],
            disabledNext: false,
            disabledPre: false,
            dd_pagination_input: this.currentPage || 1,
            currentPageSizes: this.pageSizes[0],
            isShow: {},
        };
    },
    methods: {
        dd_toFirst() {
            this.currentPages = 1;
            this.dd_pagination_input = 1;
            if (this.pageCounts > 7) this.dd_pagination_auto(this.currentPages);
        },
        dd_toLast() {
            this.currentPages = this.pageCounts;
            this.dd_pagination_input = this.pageCounts;
            if (this.pageCounts > 7) this.dd_pagination_auto(this.currentPages);
        },
        dd_pagination_auto(page) {
            if (this.pageCounts == 7) return;
            if (page >= 5 && page <= this.pageCounts - 4) {
                this.pageCountsListItem = this.pageCountsList.slice(
                    page - 3,
                    2 + page
                );
            }
            if (page < 5) {
                this.pageCountsListItem = this.pageCountsList.slice(0, 5);
            }
            if (page > this.pageCounts - 4) {
                this.pageCountsListItem = this.pageCountsList.slice(-5);
            }
        },
        pagerClick(page) {
            this.currentPages = page;
            if (this.pageCounts > 7) this.dd_pagination_auto(this.currentPages);
            this.dd_pagination_input = this.currentPages;
            // this.$parent.currentPage = page;
            this.$emit("current-change", this.currentPages);
        },
        btn_next() {
            if (this.currentPages < this.pageCounts) {
                this.disabledNext = false;
                this.currentPages++;
                this.dd_pagination_input = this.currentPages;
                if (this.pageCounts > 7)
                    this.dd_pagination_auto(this.currentPages);
                this.$emit("next-click", this.currentPages);
            }
        },
        btn_pre() {
            if (this.currentPages > 1) {
                this.disabledPre = false;
                this.currentPages--;
                this.dd_pagination_input = this.currentPages;
                if (this.pageCounts >= 7)
                    this.dd_pagination_auto(this.currentPages);
                this.$emit("prev-click", this.currentPages);
            }
        },
        ddJumper(e) {
            if (e.target.value) {
                let current = parseInt(e.target.value);
                if (current > this.pageCounts) {
                    this.dd_pagination_input = this.pageCounts;
                } else if (current < 1) {
                    this.dd_pagination_input = 1;
                } else {
                    this.dd_pagination_input = current;
                }
                this.currentPages = this.dd_pagination_input;
                this.dd_pagination_auto(this.currentPages);
            }
        },
        currentPageSizesChange() {
            this.pagesize = this.currentPageSizes;
            this.pageInit();
            this.currentPages = 1;
            this.dd_pagination_input = 1;
            this.$emit("size-change", this.pagesize);
        },
        pageInit() {
            this.pageCountsList = [];
            if (this.currentPage >= this.pageCounts)
                this.currentPages = this.pageCounts;
            this.dd_pagination_input = this.currentPages;
            let count = Math.floor(this.total / this.pagesize);
            let mod = this.total % this.pagesize;
            if (mod == 0) this.pageCounts = count;
            if (mod != 0) this.pageCounts = count + 1;
            for (let i = 1; i <= this.pageCounts; i++) {
                this.pageCountsList.push(i);
            }
            if (this.pageCounts <= 7) {
                this.pageCountsListItem = this.pageCountsList.slice(
                    0,
                    this.pageCounts
                );
            } else {
                this.pageCountsListItem = this.pageCountsList.slice(0, 5);
            }

            let components = this.layout.split(",").map((item) => item.trim());
            components.map((item) => {
                switch (item) {
                    case "prev":
                        this.$set(this.isShow, item, true);
                        break;
                    case "next":
                        this.$set(this.isShow, item, true);
                        break;
                    case "pager":
                        this.$set(this.isShow, item, true);
                        break;
                    case "jumper":
                        this.$set(this.isShow, item, true);
                        break;
                    case "total":
                        this.$set(this.isShow, item, true);
                        break;
                    case "sizes":
                        this.$set(this.isShow, item, true);
                        break;
                }
            });
        },
    },
    created() {
        this.pageInit();
    },
    watch: {
        currentPages: {
            immediate: true,
            handler(val) {
                if (val >= this.pageCounts) {
                    this.disabledNext = true;
                } else {
                    this.disabledNext = false;
                }
                if (val <= 1) {
                    this.disabledPre = true;
                } else {
                    this.disabledPre = false;
                }
                this.$emit("update:currentPage", val);
            },
        },
    },
};
</script>

<style lang="less" scoped>
.dd-pagination {
    white-space: nowrap;
    // padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    vertical-align: middle;
    > div {
        display: flex;
        align-items: center;
    }
    .pager {
        user-select: none;
        list-style: none;
        display: inline-block;
        vertical-align: top;
        padding: 0;
        margin: 0;
        li {
            padding: 0 4px;
            background: #fff;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            margin: 0;
            &:hover {
                color: #409eff;
            }
        }
        .active {
            color: #409eff;
            cursor: default;
        }
    }
    [disabled] {
        li {
            color: #c0c4cc;
            background-color: #fff;
            cursor: not-allowed !important;
            pointer-events: none;
        }
    }
    .btn-pre {
        font-size: 20px;
        display: inline-block;
        background: 50% no-repeat;
        background-size: 16px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
        color: #303133;
    }
    .btn-next {
        font-size: 20px;
        display: inline-block;
        background: 50% no-repeat;
        background-size: 16px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
        color: #303133;
    }
    .control {
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    [disabled] {
        color: #c0c4cc;
        background-color: #fff;
        cursor: not-allowed !important;
    }
    [small] {
        .pager {
            li {
                padding: 0 4px;
                background: #fff;
                vertical-align: top;
                display: inline-block;
                font-size: 12px;
                line-height: 22px;
                height: 22px;
                min-width: 22px;
                cursor: pointer;
                box-sizing: border-box;
                text-align: center;
                margin: 0;
            }
        }
        .control {
            font-size: 15px;
            margin: 0 3px;
            min-width: 22px;
        }
    }
    .dd-pagination_total {
        font-size: 13px;
        line-height: 28px;
        margin-right: 10px;
        font-weight: 400;
        color: #606266;
    }
    .dd-pagination_sizes {
        font-size: 13px;
        margin-right: 10px;
        font-weight: 400;
        color: #606266;
        :deep(.dd-select) .dd-select_inner {
            width: 100px;
        }
        :deep(.dd-select) .dd-select-dropdown {
            min-width: 110px;
        }
    }
    .dd-pagination__jump {
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        margin-left: 24px;
        vertical-align: top;
        box-sizing: border-box;
        span {
            font-weight: 400;
            color: #606266;
        }
        .dd-input {
            position: relative;
            display: inline-block;
            .dd-input_inner {
                background-color: #fff;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                font-size: inherit;
                width: 50px;
                outline: none;
                padding: 0 3px;
                cursor: pointer;
                height: 28px;
                line-height: 28px;
                transition: all 0.3s;
                &:focus {
                    border-color: #409eff !important;
                }
                &:hover {
                    border-color: #c0c4cc;
                }
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            input[type="number"] {
                -moz-appearance: textfield;
            }
        }
    }
}

.is-background {
    .pager {
        li {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            min-width: 30px;
            border-radius: 2px;
        }
        .active {
            background-color: #409eff;
            color: #fff;
            &:hover {
                color: #fff;
            }
        }
    }
    .control {
        background-color: #f4f4f5;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
    }
    .btn-pre {
        margin: 0 5px 0 0;
    }
    .btn-next {
        margin: 0 0 0 5px;
    }
    [disabled] {
        color: #c0c4cc;
        cursor: not-allowed !important;
        li {
            color: #c0c4cc;
            background-color: #f4f4f5;
            cursor: not-allowed !important;
            pointer-events: none;
        }
    }
    [small] {
        .pager {
            li {
                background-color: #f4f4f5;
                color: #606266;
                margin: 0 3px;
                min-width: 22px;
                border-radius: 2px;
                &:hover {
                    color: #409eff;
                }
            }
            .active {
                color: #409eff;
                cursor: default;
            }
        }
        .control {
            height: 22px;
            font-size: 15px;
            min-width: 22px;
        }
        .btn-pre {
            margin: 0 3px 0 0;
        }
        .btn-next {
            margin: 0 0 0 3px;
        }
    }
}
</style>
