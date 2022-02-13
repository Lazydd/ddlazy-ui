<template>
    <div class="dd-upload" @click="dd_upload">
        <input
            type="file"
            ref="input"
            :multiple="multiple"
            style="display: none"
            @change="addFile"
        />
        <slot />
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
        multiple: {
            type: Boolean,
        },
        size: {
            type: Number,
            default: 1,
        },
        name: {
            type: String,
            default: "file",
        },
    },
    methods: {
        dd_upload() {
            this.$refs.input.click();
        },
        addFile(e) {
            let file = e.target.files[0];
            if (file == null || file == "undefined" || file === "undefined")
                return true;
            // if (file.size > 1024 * this.size) alert("图片大小超过");
            let param = new FormData();
            param.append(this.name, file, file.name);
            param.append("type", "RESOURCE");
            ajax({ action: this.action, param });
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
