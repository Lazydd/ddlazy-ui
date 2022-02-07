<template>
    <div class="dd-upload" @click="dd_upload">
        <dd-button type="primary" size="small">点击上传</dd-button>
    </div>
</template>

<script>
import ajax from "./ajax";
export default {
    name: "ddUpload",
    props: {
        action: {
            type: String,
        },
    },
    methods: {
        dd_upload() {
            console.log(ajax({ action: this.action }));
        },
    },
};
</script>

<style lang="less" scoped>
.dd-upload {
    width: 20px;
    height: 20px;
}
</style>
