<template>
    <div class="tinymce-container">
        <editor
            id="tinymce"
            v-model="value"
            :init="init"
            :disabled="disabled"
        />
    </div>
</template>

<script>
import tinymce from "tinymce";
import Editor from "@tinymce/tinymce-vue";

import "tinymce/themes/silver/theme";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount"; // 字数统计插件

import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/template"; // 模板插件
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/preview";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/print";
import "tinymce/plugins/hr";
// import { uploadImg } from "@/api/common";
export default {
    name: "ddUeditor",
    components: {
        Editor,
        // uploadImg,
    },
    props: {
        tinymceHtml: "",
        tinymceHeight: {
            type: Number,
            default: 500,
        },
        url: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            value: this.tinymceHtml,
            //初始化配置
            //http://tinymce.ax-z.cn/plugins/hr.php
            init: {
                selector: "#tinymce", //tinymce的id
                language_url:
                    process.env.BASE_URL + "static/tinymce/langs/zh_CN.js",
                language: "zh_CN",
                skin_url: process.env.BASE_URL + "static/skins/ui/oxide", //编辑器需要一个skin才能正常工作，所以要设置一个skin_url指向之前复制出来的skin文件
                height: this.tinymceHeight,
                plugins:
                    "link lists image code table wordcount media fullscreen preview contextmenu textcolor print hr", //引入插件
                toolbar:
                    "fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image media quicklink hr h2 h3 blockquote table numlist bullist preview fullscreen print contextmenu textcolor", //工具栏
                browser_spellcheck: true, // 拼写检查
                branding: false, // 去水印
                elementpath: false, //禁用编辑器底部的状态栏
                statusbar: false, // 隐藏编辑器底部的状态栏
                paste_data_images: true, // 允许粘贴图像
                menubar: false, // 隐藏最上方menu

                file_picker_types: "image",
                images_upload_credentials: true,
                fontsize_formats:
                    "14px 16px 18px 20px 24px 26px 28px 30px 32px 36px", //字体大小
                font_formats:
                    "微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times", //字体
                images_upload_url: this.url,
                images_upload_handler: function (blobInfo, success, failure) {
                    let formdata = new FormData();
                    formdata.append("image", blobInfo.blob());

                    uploadImg(formdata)
                        .then((res) => {
                            success("https://qnsjk.huabeisky.com/" + res.data);
                        })
                        .catch((res) => {
                            failure("error");
                        });
                },
            },
        };
    },
    mounted() {
        tinymce.init({});
    },
    methods: {},
    watch: {
        value(val, oldV) {
            this.$emit("change", val);
        },
    },
};
</script>
<style scoped lang="less"></style>
