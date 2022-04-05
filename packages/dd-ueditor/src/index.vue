<template>
    <vue-ueditor-wrap
        v-model="content"
        :config="myConfig"
        @ready="ready"
        :destroy="true"
    ></vue-ueditor-wrap>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
    name: "ddUeditor",
    props: {
        value: {
            type: String,
        },
        height: {
            type: Number,
            default: 500,
        },
        url: {
            type: String,
        },
    },
    data() {
        return {
            content: "",
            ueditor: "",
            myConfig: {
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: this.height,
                // 初始容器宽度
                initialFrameWidth: "100%",
                // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                // serverUrl: "//ueditor.szcloudplus.com/cos",
                serverUrl: this.url,
                // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                UEDITOR_HOME_URL: "/UEditor/",
            },
        };
    },
    methods: {
        ready(item) {
            this.ueditor = item;
            this.setContent(this.value);
        },
        //加入内容
        setContent(item) {
            if (item) {
                this.ueditor.setContent(item);
            }
        },
        //获取焦点
        focus() {
            this.ueditor.focus();
        },
        //失去焦点
        blur() {
            this.ueditor.blur();
        },
        //影藏编辑器
        setHide() {
            this.ueditor.setHide();
        },
        //显示编辑器
        setShow() {
            this.ueditor.setShow();
        },
        //不可编辑
        setDisabled() {
            this.ueditor.setDisabled();
        },
        //可编辑
        setEnabled() {
            this.ueditor.setEnabled();
        },
    },
    components: {
        VueUeditorWrap,
    },
    watch: {
        content(val) {
            if (this.ueditor) {
                this.$emit("input", val);
                this.$emit("change", val);
            }
        },
    },
};
</script>

<style lang="less" scoped></style>
