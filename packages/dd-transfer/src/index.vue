<template>
    <div class="dd-transfer">
        <div class="dd-transfer-panel">
            <p class="dd-transfer-panel_header">
                <label>
                    <dd-checkbox
                        :indeterminate="isIndeterminateLeft"
                        v-model="checkleftTot"
                        @change="handleCheckLeftChange"
                        >列表一
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
                            :label="item.label"
                            :key="item.key"
                            :disabled="item.disabled"
                            >{{ item.label }}
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
            ></dd-button>
            <dd-button
                icon="icon-arrow-right"
                type="primary"
                style="margin-left: 10px"
                @click="checkdRighttClick"
                :disabled="checkedLeft.length == 0 ? true : false"
            ></dd-button>
        </div>
        <div class="dd-transfer-panel">
            <p class="dd-transfer-panel_header">
                <label>
                    <dd-checkbox
                        :indeterminate="isIndeterminateRight"
                        v-model="checkrightTot"
                        @change="handleCheckRightChange"
                        >列表二
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
                            :label="item.label"
                            :key="item.key"
                            :disabled="item.disabled"
                            >{{ item.label }}
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
            }),
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
                if (this.value.indexOf(item.key) != -1) {
                    this.checkedRightList.push(item);
                } else {
                    this.checkedLeftList.push(item);
                }
            });
        },
        handleCheckLeftChange(val) {
            let arr = [];
            this.checkedLeftList.map((item) => {
                if (item.disabled == false) {
                    arr.push(item.label);
                }
            });
            this.checkedLeft = val ? [...arr] : [];
            this.isIndeterminateLeft = false;
        },
        handleCheckRightChange(val) {
            let arr = [];
            this.checkedRightList.map((item) => {
                if (item.disabled == false) {
                    arr.push(item.label);
                }
            });
            this.checkedRight = val ? [...arr] : [];
            this.isIndeterminateRight = false;
        },
        handleCheckedLeftChange(val) {
            let checkedCount = val.length;
            let disabledCount = 0;
            this.checkedLeftList.map((item) => {
                if (item.disabled) {
                    disabledCount++;
                }
            });
            this.checkleftTot =
                checkedCount === this.checkedLeftList.length - disabledCount;
            this.isIndeterminateLeft =
                checkedCount > 0 &&
                checkedCount < this.checkedLeftList.length - disabledCount;
        },
        handleCheckedRightChange(val) {
            let checkedCount = val.length;
            let disabledCount = 0;
            this.checkedRightList.map((item) => {
                if (item.disabled) {
                    disabledCount++;
                }
            });
            this.checkrightTot =
                checkedCount === this.checkedRightList.length - disabledCount;
            this.isIndeterminateRight =
                checkedCount > 0 &&
                checkedCount < this.checkedRightList.length - disabledCount;
        },
        checkdLeftClick() {
            let arr = [];
            this.data.map((item, i) => {
                this.checkedRight.map((items) => {
                    if (item.label == items) {
                        arr = [...arr, item];
                        this.checkedRightList = this.checkedRightList.filter(
                            (itemChild) => {
                                return itemChild.label != items;
                            }
                        );
                    }
                });
            });
            this.checkedLeftList = [...this.checkedLeftList, ...arr];
            this.checkedLeftList = this.checkedLeftList.sort((a, b) => {
                return a["key"] - b["key"];
            });
            this.isIndeterminateRight = false;
            this.checkRightTot = false;
            this.checkedRight = [];
        },
        checkdRighttClick() {
            let arr = [];
            this.data.map((item, i) => {
                this.checkedLeft.map((items) => {
                    if (item.label == items) {
                        arr = [...arr, item];
                        this.checkedLeftList = this.checkedLeftList.filter(
                            (itemChild) => {
                                return itemChild.label != items;
                            }
                        );
                    }
                });
            });
            this.checkedRightList = [...this.checkedRightList, ...arr];
            this.checkedRightList = this.checkedRightList.sort((a, b) => {
                return a["key"] - b["key"];
            });
            this.isIndeterminateLeft = false;
            this.checkleftTot = false;
            this.checkedLeft = [];
        },
    },
    created() {
        this.initTransfer();
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

                    /deep/.dd-checkbox {
                        display: flex;
                        align-items: center;
                        &:hover {
                            color: #409eff;
                        }
                    }
                    /deep/.checkbox_input {
                        position: absolute;
                    }
                    /deep/.checkbox__label {
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
            /deep/.dd-icon {
                font-size: 20px;
            }
        }
    }
}
</style>
