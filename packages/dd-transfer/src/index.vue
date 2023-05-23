<template>
    <div class="dd-transfer">
        <div class="dd-transfer-panel">
            <p class="dd-transfer-panel_header">
                <label>
                    <dd-checkbox
                        :indeterminate="isIndeterminateLeft"
                        v-model="checkleftTot"
                        @change="handleCheckLeftChange"
                    >
                        {{ titles[0] }}
                    </dd-checkbox>
                    <span class="dd-checkbox_label">
                        {{ checkedLeft.length }}/{{ checkedLeftList.length }}
                    </span>
                </label>
            </p>
            <div class="dd-transfer-panel_body">
                <div class="dd-transfer-panel_list">
                    <dd-checkbox-group
                        class="dd-transfer-panel_item"
                        v-model="checkedLeft"
                        @change="handleCheckedLeftChange"
                    >
                        <dd-checkbox
                            v-for="item in checkedLeftList"
                            :label="item[props.label]"
                            :key="item[props.key]"
                            :disabled="item[props.disabled]"
                        >
                            {{ item.label }}
                        </dd-checkbox>
                    </dd-checkbox-group>
                </div>
            </div>
        </div>
        <div class="dd-transfer__buttons">
            <dd-button
                icon="icon-arrow-left"
                type="primary"
                @click="checkdLeftClick"
                :disabled="checkedRight.length == 0 ? true : false"
            >
                {{ buttonTexts[0] }}
            </dd-button>
            <dd-button
                type="primary"
                style="margin-left: 10px"
                @click="checkdRighttClick"
                :disabled="checkedLeft.length == 0 ? true : false"
            >
                {{ buttonTexts[1] }}<dd-icon icon="icon-arrow-right" />
            </dd-button>
        </div>
        <div class="dd-transfer-panel">
            <p class="dd-transfer-panel_header">
                <label>
                    <dd-checkbox
                        :indeterminate="isIndeterminateRight"
                        v-model="checkrightTot"
                        @change="handleCheckRightChange"
                    >
                        {{ titles[1] }}
                    </dd-checkbox>
                    <span class="dd-checkbox_label">
                        {{ checkedRight.length }}/{{ checkedRightList.length }}
                    </span>
                </label>
            </p>
            <div class="dd-transfer-panel_body">
                <div class="dd-transfer-panel_list">
                    <dd-checkbox-group
                        class="dd-transfer-panel_item"
                        v-model="checkedRight"
                        @change="handleCheckedRightChange"
                    >
                        <dd-checkbox
                            v-for="item in checkedRightList"
                            :label="item[props.label]"
                            :key="item[props.key]"
                            :disabled="item[props.disabled]"
                        >
                            {{ item.label }}
                        </dd-checkbox>
                    </dd-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ddCheckbox from "../../dd-checkbox";
import ddCheckboxGroup from "../../dd-checkbox-group";
import ddButton from "../../dd-button";
export default {
    name: "ddTransfer",
    props: {
        value: {
            type: Array,
        },
        data: {
            type: Array,
            default: () => {},
        },
        props: {
            type: Object,
            default: () => ({
                key: "key",
                label: "label",
                disabled: "disabled",
            }),
        },
        buttonTexts: {
            type: Array,
            default: () => [],
        },
        titles: {
            type: Array,
            default: () => ["列表 1", "列表 2"],
        },
    },
    data() {
        return {
            isIndeterminateLeft: false,
            isIndeterminateRight: false,
            checkleftTot: false,
            checkrightTot: false,
            checkedLeft: [],
            checkedRight: [],
            checkedLeftList: [],
            checkedRightList: [],
        };
    },
    methods: {
        initTransfer() {
            this.data.map((item) => {
                if (this.value.indexOf(item[this.props.key]) != -1) {
                    this.checkedRightList.push(item);
                } else {
                    this.checkedLeftList.push(item);
                }
            });
        },
        handleCheckLeftChange(val) {
            if (val) {
                this.checkedLeft = this.checkedLeftList.reduce((pre, item) => {
                    if (!item.disabled) pre.push(item.label);
                    return [...pre];
                }, []);
            } else {
                this.checkedLeft = [];
            }
            this.isIndeterminateLeft = false;
        },
        handleCheckRightChange(val) {
            if (val) {
                this.checkedRight = this.checkedRightList.reduce(
                    (pre, item) => {
                        if (!item.disabled) pre.push(item.label);
                        return [...pre];
                    },
                    []
                );
            } else {
                this.checkedRight = [];
            }
            this.isIndeterminateRight = false;
        },
        handleCheckedLeftChange(val) {
            let checkedCount = val.length;
            let disabledCount = 0;
            this.checkedLeftList.map((item) => {
                if (item[this.props.disabled]) {
                    disabledCount++;
                }
            });
            this.checkleftTot =
                checkedCount === this.checkedLeftList.length - disabledCount;
            this.isIndeterminateLeft =
                checkedCount > 0 &&
                checkedCount < this.checkedLeftList.length - disabledCount;
            this.$emit("left-check-change", this.checkedLeftList);
        },
        handleCheckedRightChange(val) {
            let checkedCount = val.length;
            let disabledCount = 0;
            this.checkedRightList.map((item) => {
                if (item[this.props.disabled]) {
                    disabledCount++;
                }
            });
            this.checkrightTot =
                checkedCount === this.checkedRightList.length - disabledCount;
            this.isIndeterminateRight =
                checkedCount > 0 &&
                checkedCount < this.checkedRightList.length - disabledCount;
            this.$emit("right-check-change", this.checkedRightList);
        },
        checkdLeftClick() {
            let arr = [];
            this.data.map((item, i) => {
                this.checkedRight.map((items) => {
                    if (item[[this.props.label]] == items) {
                        arr = [...arr, item];
                        this.checkedRightList = this.checkedRightList.filter(
                            (itemChild) => {
                                return itemChild[[this.props.label]] != items;
                            }
                        );
                    }
                });
            });
            this.checkedLeftList = [...this.checkedLeftList, ...arr];
            this.checkedLeftList = this.checkedLeftList.sort((a, b) => {
                return a[this.props.key] - b[this.props.key];
            });
            this.isIndeterminateRight = false;
            this.checkrightTot = false;
            this.checkedRight = [];
        },
        checkdRighttClick() {
            let arr = [];
            this.data.map((item, i) => {
                this.checkedLeft.map((items) => {
                    if (item[this.props.label] == items) {
                        arr = [...arr, item];
                        this.checkedLeftList = this.checkedLeftList.filter(
                            (itemChild) => {
                                return itemChild[this.props.label] != items;
                            }
                        );
                    }
                });
            });
            this.checkedRightList = [...this.checkedRightList, ...arr];
            this.checkedRightList = this.checkedRightList.sort((a, b) => {
                return a[this.props.key] - b[this.props.key];
            });
            this.isIndeterminateLeft = false;
            this.checkleftTot = false;
            this.checkedLeft = [];
        },
    },
    created() {
        this.initTransfer();
    },
    watch: {
        checkedRight(val) {
            this.$emit("change", val);
        },
    },
    components: {
        ddCheckbox,
        ddCheckboxGroup,
        ddButton,
    },
};
</script>

<style lang="less" scoped>
.dd-transfer {
    .dd-transfer-panel {
        border: 1px solid #ebeef5;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        display: inline-block;
        vertical-align: middle;
        width: 200px;
        max-height: 100%;
        box-sizing: border-box;
        position: relative;
        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;
        }
        .dd-transfer-panel_header {
            height: 40px;
            line-height: 40px;
            background: #f5f7fa;
            margin: 0;
            padding-left: 15px;
            border-bottom: 1px solid #ebeef5;
            box-sizing: border-box;
            color: #000;
            .dd-checkbox_label {
                position: absolute;
                right: 15px;
                color: #909399;
                font-size: 12px;
                font-weight: 400;
            }
        }
        .dd-transfer-panel_body {
            height: 246px;
            .dd-transfer-panel_list {
                margin: 0;
                padding: 6px 0;
                list-style: none;
                height: 246px;
                overflow: auto;
                box-sizing: border-box;
                .dd-transfer-panel_item {
                    height: 30px;
                    line-height: 30px;
                    padding-left: 15px;
                    display: block !important;

                    :deep(.dd-checkbox) {
                        display: flex;
                        align-items: center;
                        &:hover {
                            color: #409eff;
                        }
                    }
                    :deep(.checkbox_input) {
                        position: absolute;
                    }
                    :deep(.checkbox__label) {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: block;
                        box-sizing: border-box;
                        padding-left: 24px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
    .dd-transfer__buttons {
        display: inline-block;
        vertical-align: middle;
        padding: 0 30px;
        .dd-button {
            :deep(.des),
            :deep(.dd-icon) {
                font-size: 18px;
            }
        }
    }
}
</style>
