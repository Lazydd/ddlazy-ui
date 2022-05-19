<template>
    <div class="page-box">
        <h2 class="_title">Upload 上传</h2>
        <p class="_descript">通过点击或者拖拽上传文件</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-upload
                    class="upload-demo"
                    action="/abcdef"
                    name="uploadFile"
                    accept=".jpg,.jpeg,.png,.gif"
                    :on-success="success"
                    :on-error="error"
                    :file-list="fileList"
                    :before-upload="beforeUpload"
                    :on-preview="onPreview"
                >
                    <dd-button type="primary" size="small">点击上传</dd-button>
                </dd-upload>
            </template>
        </dd-block>
        <dd-block title="照片墙" :code="code2">
            <template #source>
                <dd-upload
                    action="/abcdef/mengxiangTown/upload/fileToBase"
                    name="uploadFile"
                    :file-list="fileList"
                    list-type="picture-card"
                    :limit="5"
                >
                    <dd-icon
                        icon="icon-add-select"
                        class="avatar-uploader-icon"
                    ></dd-icon>
                </dd-upload>
            </template>
        </dd-block>
        <dd-block title="拖拽上传" :code="code3">
            <template #source>
                <dd-upload
                    action="/abcdef/mengxiangTown/upload/fileToBase"
                    name="uploadFile"
                    drag
                    :limit="4"
                    :on-success="success"
                    :file-list="fileList"
                    :on-preview="onPreview"
                    :on-exceed="onExceed"
                >
                    <dd-icon
                        icon="icon-yunshangchuan"
                        class="drag-uploader-icon"
                    ></dd-icon>
                    <div class="dd-upload_text">
                        将文件拖到此处，或<em>点击上传</em>
                    </div>
                </dd-upload>
            </template>
        </dd-block>
        <dd-block title="禁用" :code="code4">
            <template #source>
                <dd-upload
                    class="upload-demo"
                    action="/abcdef"
                    name="uploadFile"
                    :file-list="fileList"
                    disabled
                >
                    <dd-button type="primary" disabled size="small">
                        点击上传
                    </dd-button>
                </dd-upload>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-footer left="DatePicker 日期选择器" right="Transfer 穿梭框"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Upload",
    data() {
        return {
            fileList: [
                {
                    name: "test1.png",
                    url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854244293.png",
                },
                {
                    name: "test2.gif",
                    url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854262055.gif",
                },
                {
                    name: "test3.gif",
                    url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652930538167.gif",
                },
            ],
            code1: `
                <dd-upload
                    class="upload-demo"
                    action="/abcdef"
                    name="uploadFile"
                    accept=".jpg,.jpeg,.png,.gif"
                    :on-success="success"
                    :on-error="error"
                    :file-list="fileList"
                    :before-upload="beforeUpload"
                    :on-preview="onPreview"
                >
                    <dd-button type="primary" size="small">点击上传</dd-button>
                </dd-upload>

                fileList: [
                    {
                        name: "test1.png",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854244293.png",
                    },
                    {
                        name: "test2.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854262055.gif",
                    },
                    {
                        name: "test3.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652930538167.gif",
                    },
                ],

                error(res){
                    this.$message.error(res.statusText)
                },
                
                .upload-demo {
                    width: 360px;
                }
            `,
            code2: `
                 <dd-upload
                    action="/abcdef/mengxiangTown/upload/fileToBase"
                    name="uploadFile"
                    :file-list="fileList"
                    list-type="picture-card"
                    :limit="5"
                >
                    <dd-icon
                        icon="icon-add-select"
                        class="avatar-uploader-icon"
                    ></dd-icon>
                </dd-upload>

                fileList: [
                    {
                        name: "test1.png",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854244293.png",
                    },
                    {
                        name: "test2.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854262055.gif",
                    },
                    {
                        name: "test3.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652930538167.gif",
                    },
                ],
            `,
            code3: `
                <dd-upload
                    action="/abcdef"
                    name="uploadFile"
                    drag
                    :limit="4"
                    :file-list="fileList"
                >
                    <dd-icon
                        icon="icon-yunshangchuan"
                        class="drag-uploader-icon"
                    ></dd-icon>
                    <div class="dd-upload_text">
                        将文件拖到此处，或<em>点击上传</em>
                    </div>
                </dd-upload>

                fileList: [
                    {
                        name: "test1.png",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854244293.png",
                    },
                    {
                        name: "test2.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854262055.gif",
                    },
                    {
                        name: "test3.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652930538167.gif",
                    },
                ],

                .drag-uploader-icon {
                    font-size: 67px;
                    color: #c0c4cc;
                    margin: 40px 0 16px;
                    line-height: 50px;
                }
                .dd-upload_text {
                    color: #606266;
                    font-size: 14px;
                    text-align: center;
                    em {
                        color: #409eff;
                        font-style: normal;
                    }
                }
            `,
            code4: `
                <dd-upload
                    class="upload-demo"
                    action="/abcdef"
                    name="uploadFile"
                    :file-list="fileList"
                    disabled
                >
                    <dd-button type="primary" disabled size="small">
                        点击上传
                    </dd-button>
                </dd-upload>

                fileList: [
                    {
                        name: "test1.png",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854244293.png",
                    },
                    {
                        name: "test2.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652854262055.gif",
                    },
                    {
                        name: "test3.gif",
                        url: "https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/mengxiang/1652930538167.gif",
                    },
                ],
            `,
            Attributes: [
                {
                    parameter: "action",
                    explain: "必选参数，上传的地址",
                    type: "string",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "headers",
                    explain: "设置上传的请求头部",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "data",
                    explain: "上传时附带的额外参数",
                    type: "object",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "name",
                    explain: "上传的文件字段名",
                    type: "string",
                    optional: "—",
                    default: "file",
                },
                {
                    parameter: "show-file-list",
                    explain: "是否显示已上传文件列表",
                    type: "boolean",
                    optional: "—",
                    default: "true",
                },
                {
                    parameter: "drag",
                    explain: "是否启用拖拽上传",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "on-preview",
                    explain: "点击文件列表中已上传的文件时的钩子",
                    type: "function(file)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "before-remove",
                    explain: "删除文件之前的钩子，参数为上传的文件和文件列表",
                    type: "function(file, fileList)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "before-upload",
                    explain: "上传文件之前的钩子，参数为上传的文件",
                    type: "function(file)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "on-success",
                    explain: "文件上传成功时的钩子",
                    type: "function(response)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "on-error",
                    explain: "文件上传失败时的钩子",
                    type: "function(err)",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "list-type",
                    explain: "文件列表的类型",
                    type: "string",
                    optional: "text/picture-card",
                    default: "text",
                },
                {
                    parameter: "file-list",
                    explain: "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
                    type: "array",
                    optional: "—",
                    default: "[]",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "fale",
                },
                {
                    parameter: "limit",
                    explain: "最大允许上传个数",
                    type: "number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "on-exceed",
                    explain: "文件超出个数限制时的钩子",
                    type: "function(fileList)",
                    optional: "—",
                    default: "—",
                },
            ],
        };
    },
    methods: {
        success(res) {
            console.log(res);
        },
        error(res){
            this.$message.error(res.statusText)
        },
        beforeUpload(file) {
            console.log(file);
        },
        onPreview(file) {
            window.open(file.url);
        },
        onExceed() {
            this.$message.error("最大上传数量为4");
        },
    },
};
</script>

<style lang="less" scoped>
.upload-demo {
    width: 360px;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
}
.drag-uploader-icon {
    font-size: 67px;
    color: #c0c4cc;
    margin: 40px 0 16px;
    line-height: 50px;
}
.dd-upload_text {
    color: #606266;
    font-size: 14px;
    text-align: center;
    em {
        color: #409eff;
        font-style: normal;
    }
}
</style>
