<template>
    <div :class="['dd-pagination', background ? 'is-background' : '']">
        <div :small="small">
            <div
                class="btn-pre control"
                @click="!disabled ? (!disabledPre ? btn_pre() : null) : null"
                :disabled="disabled ? disabled : disabledPre || pageCounts == 1"
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-left`"></use>
                </svg>
            </div>
            <ul class="pager" :disabled="disabled">
                <li
                    class="number"
                    v-for="(page, index) in pageCounts"
                    :key="index"
                    :class="page == currentPages ? 'active' : ''"
                    @click="!disabled ? pagerClick(page) : null"
                >
                    {{ page }}
                </li>
                <li class="number">...</li>
            </ul>
            <div
                class="btn-next control"
                @click="!disabled ? (!disabledNext ? btn_next() : null) : null"
                :disabled="
                    disabled ? disabled : disabledNext || pageCounts == 1
                "
            >
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-right`"></use>
                </svg>
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
        pageSizes: {
            type: Number,
            default: 10,
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
    },
    data() {
        return {
            currentPages: this.currentPage || 1,
            pagesize: this.pageSizes || 10,
            pageCounts: this.pageCount,
            disabledNext: false,
            disabledPre: false,
        };
    },
    methods: {
        pagerClick(page) {
            this.currentPages = page;
            this.$parent.currentPage = page;
            this.$emit("current-change", this.currentPages);
        },
        btn_next() {
            if (this.currentPages < this.pageCounts) {
                this.disabledNext = false;
                this.currentPages++;
                this.$emit("next-click", this.currentPages);
            }
        },
        btn_pre() {
            if (this.currentPages > 1) {
                this.disabledPre = false;
                this.currentPages--;
                this.$emit("prev-click", this.currentPages);
            }
        },
        pageInit() {
            if (this.currentPage >= this.pageCounts)
                this.currentPages = this.pageCounts;
            let count = Math.floor(this.total / this.pagesize);
            let mod = this.total % this.pagesize;
            if (mod == 0) this.pageCounts = count;
            if (mod != 0) this.pageCounts = count + 1;
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
    padding: 2px 5px;
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
    }
    .control {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
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
            margin: 0 3px;
            min-width: 22px;
        }
    }
}
</style>
