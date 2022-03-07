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
                        {{ checkedLeft.length }}/{{ checkedLeft.length }}
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
                            v-for="item in data"
                            :label="item.label"
                            :key="item.key"
                            >{{ item.label }}
                        </dd-checkbox>
                    </dd-checkbox-group>
                </div>
            </div>
        </div>
        <div class="dd-transfer__buttons">
            <dd-button icon="icon-arrow-left" type="primary"></dd-button>
            <dd-button
                icon="icon-arrow-right"
                type="primary"
                style="margin-left: 10px"
            ></dd-button>
        </div>
        <div class="dd-transfer-panel">
            <p class="dd-transfer-panel_header">
                <label>
                    <dd-checkbox
                        :indeterminate="isIndeterminateRight"
                        v-model="checkrighttTot"
                        @change="handleCheckRightChange"
                        >列表一
                    </dd-checkbox>
                    <span class="dd-checkbox_label">
                        {{ checkedRight.length }}/{{ checkedRight.length }}
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
                            v-for="item in data"
                            :label="item.label"
                            :key="item.key"
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
        input: {
            type: Array,
        },
        data: {
            type: Array,
            default: () => {},
        },
    },
    data() {
        return {
            isIndeterminateLeft: false,
            isIndeterminateRight: false,
            checkleftTot: false,
            checkrighttTot: false,
            checkedLeft: [],
            checkedRight: [],
        };
    },
    methods: {
        handleCheckLeftChange(val) {},
        handleCheckRightChange(val) {},
        handleCheckedLeftChange(val) {},
        handleCheckedRightChange(val) {},
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
    }
}
</style>
