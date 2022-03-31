<template>
    <div class="page-box">
        <h2 class="_title">Tag 标签</h2>
        <p class="_descript">用于标记和选择。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-tag>标签一</dd-tag>
                <dd-tag type="success">标签二</dd-tag>
                <dd-tag type="info">标签三</dd-tag>
                <dd-tag type="warning">标签四</dd-tag>
                <dd-tag type="danger">标签五</dd-tag>
            </template>
        </dd-block>
        <dd-block title="可移除标签" :code="code2">
            <template #source>
                <dd-tag
                    v-for="item in tags"
                    :key="item.name"
                    :type="item.type"
                    closable
                    >{{ item.name }}
                </dd-tag>
            </template>
        </dd-block>
        <dd-block title="动态编辑标签" :code="code3">
            <template #source>
                <dd-tag
                    v-for="item in tags1"
                    :key="item"
                    closable
                    @close="handleClose"
                    >{{ item }}
                </dd-tag>
                <dd-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                >
                </dd-input>
                <dd-button
                    v-else
                    class="button-new-tag"
                    size="small"
                    @click="showInput"
                    >+ New Tag</dd-button
                >
            </template>
        </dd-block>
        <dd-block title="不同尺寸" :code="code4">
            <template #source>
                <dd-tag>默认标签</dd-tag>
                <dd-tag size="medium">中等标签</dd-tag>
                <dd-tag size="small">小型标签标签</dd-tag>
                <dd-tag size="mini">超小标签</dd-tag>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
    </div>
</template>

<script>
export default {
    name:'Tag',
    data() {
        return {
            tags: [
                { name: "标签一", type: "" },
                { name: "标签二", type: "success" },
                { name: "标签三", type: "info" },
                { name: "标签四", type: "warning" },
                { name: "标签五", type: "danger" },
            ],
            tags1: ["标签一", "标签二", "标签三", "标签四", "标签五"],
            inputVisible: false,
            inputValue: "",
            code1: `
                <dd-tag>标签一</dd-tag>
                <dd-tag type="success">标签二</dd-tag>
                <dd-tag type="info">标签三</dd-tag>
                <dd-tag type="warning">标签四</dd-tag>
                <dd-tag type="danger">标签五</dd-tag>
            `,
            code2: `
                <dd-tag
                    v-for="item in tags"
                    :key="item.name"
                    :type="item.type"
                    closable>
                </dd-tag>

                tags: [
                    { name: "标签一", type: "" },
                    { name: "标签二", type: "success" },
                    { name: "标签三", type: "info" },
                    { name: "标签四", type: "warning" },
                    { name: "标签五", type: "danger" },
                ],
            `,
            code3: `
                <dd-tag
                    v-for="(item, i) in tags1"
                    :key="i"
                    closable
                    @close="handleClose"
                    >{{ item }}
                </dd-tag>
                <dd-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                >
                </dd-input>
                <dd-button
                    v-else
                    class="button-new-tag"
                    size="small"
                    @click="showInput"
                    >+ New Tag</dd-button
                >
                
                handleClose(tag) {
                    this.tags1.splice(this.tags1.indexOf(tag), 1);
                },
                showInput() {
                    this.inputVisible = true;
                    this.$nextTick((_) => {
                        this.$refs.saveTagInput.$refs.input.focus();
                    });
                },

                handleInputConfirm() {
                    let inputValue = this.inputValue;
                    if (inputValue) {
                        this.tags1.push(inputValue);
                    }
                    this.inputVisible = false;
                    this.inputValue = "";
                },

                tags1: ["标签一", "标签二", "标签三", "标签四", "标签五"],
            `,
            code4: `
                <dd-tag>默认标签</dd-tag>
                <dd-tag size="medium">中等标签</dd-tag>
                <dd-tag size="small">小型标签标签</dd-tag>
                <dd-tag size="mini">超小标签</dd-tag>
            `,
            Attributes: [
                {
                    parameter: "type",
                    explain: "类型",
                    type: "string",
                    optional: "success/info/warning/danger",
                    default: "—",
                },
                {
                    parameter: "size",
                    explain: "尺寸",
                    type: "string",
                    optional: "medium / small / mini",
                    default: "—",
                },
                {
                    parameter: "closable",
                    explain: "是否可关闭",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "click",
                    explain: "点击 Tag 时触发的事件",
                    backParameter: "—",
                },
                {
                    name: "close",
                    explain: "关闭 Tag 时触发的事件",
                    backParameter: "—",
                },
            ],
        };
    },
    methods: {
        handleClose(tag) {
            this.tags1.splice(this.tags1.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick((_) => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.tags1.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        },
    },
};
</script>

<style lang="less" scoped>
.dd-tag + .dd-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>
