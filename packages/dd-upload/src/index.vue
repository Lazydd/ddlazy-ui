<template>
    <div
        :class="['dd-upload', listType === 'picture-card' ? 'des' : '']"
        ref="dd-upload"
        @dragover.prevent="handleDragOver"
        @drop.prevent="handleDrag"
        @dragleave.prevent="isDrogAcitve = false"
    >
        <ul
            class="dd-upload-picture-card"
            onselectstart="return false"
            v-if="listType === 'picture-card'"
        >
            <li
                v-for="item in fileLists"
                :key="item.uid"
                v-if="fileLists.length"
                @click="onPreview(item)"
                @mouseenter="dd_upoadListenter(item.uid)"
                @mouseleave="dd_upoadListleave()"
            >
                <img v-if="item.url" :src="item.url" alt="" />
                <transition name="dd-fade">
                    <div class="dd-upload_tip" v-if="ActiveIndex === item.uid">
                        <dd-icon
                            icon="icon-viewlarger"
                            @click="ddUploadControl('amplify', item)"
                        ></dd-icon>
                        <!-- <dd-icon
                            icon="icon-download"
                            @click="ddUploadControl('downLoad', item)"
                        ></dd-icon> -->
                        <dd-icon
                            icon="icon-ashbin"
                            @click="ddUploadControl('delete', item)"
                        ></dd-icon>
                    </div>
                </transition>
            </li>
        </ul>
        <div
            :class="[
                listType == 'picture-card' ? 'avatar-uploader' : '',
                drag && listType != 'picture-card' ? 'dd-upload-dragger' : '',
                isDrogAcitve ? 'is-drogover' : '',
            ]"
            @click="dd_upload"
        >
            <input
                :type="disabled ? 'readonly' : 'file'"
                ref="input"
                :multiple="multiple"
                style="display: none"
                :accept="accept"
                @change="addFile"
            />
            <slot v-if="$slots.default" />
        </div>
        <ul class="dd-upload-list" v-if="showFileList && fileLists.length > 0">
            <li
                class="dd-upload-list_item"
                v-for="item in fileLists"
                :key="item.uid"
                @mouseenter="dd_upoadListenter(item.uid)"
                @mouseleave="dd_upoadListleave()"
            >
                <a
                    class="dd-upload-list_item-name"
                    @click="onPreview(item)"
                    v-if="listType === 'text'"
                >
                    <dd-icon icon="icon-shangchuanbeiandanzheng"></dd-icon>
                    {{ item.name }}
                </a>
                <dd-icon
                    v-if="listType === 'text'"
                    :icon="
                        ActiveIndex === item.uid ? 'icon-close' : 'icon-success'
                    "
                    @click="ActiveIndex === item.uid ? removeImg(item) : null"
                    :class="[
                        ActiveIndex === item.uid
                            ? 'dd-upload-icon_close'
                            : 'dd-upload-icon_success',
                    ]"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import ajax from "./ajax";
import ddIcon from "../../dd-icon";
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
        disabled: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
        },
        name: {
            type: String,
            default: "file",
        },
        drag: {
            type: Boolean,
            default: false,
        },
        listType: {
            type: String,
            default: "text",
        },
        data: {
            type: Object,
        },
        headers: {
            type: Object,
        },
        onSuccess: {
            type: Function,
            default: () => {},
        },
        onError: {
            type: Function,
            default: () => {},
        },
        fileList: {
            type: Array,
            default() {
                return [];
            },
        },
        showFileList: {
            type: Boolean,
            default: true,
        },
        beforeUpload: {
            type: Function,
            default: () => {},
        },
        onPreview: {
            type: Function,
            default: () => {},
        },
        limit: {
            type: Number,
        },
        onExceed: {
            type: Function,
            default: () => {},
        },
        beforeRemove: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            focusing: false,
            fileLists: this.fileList,
            index: 1,
            ActiveIndex: null,
            isDrogAcitve: false,
        };
    },
    methods: {
        dd_upoadListenter(index) {
            this.focusing = true;
            this.ActiveIndex = index;
        },
        dd_upoadListleave() {
            this.focusing = false;
            this.ActiveIndex = null;
        },
        dd_upload() {
            this.$refs.input.click();
        },
        ddUploadControl(type, item) {
            if (type === "amplify") {
                if (item.url) window.open(item.url);
            } else if (type === "download") {
            } else if (type === "delete") {
                this.removeImg(item);
            }
        },
        addFile(e, type) {
            if (this.limit && this.fileLists.length >= this.limit) {
                this.onExceed(this.fileLists);
            } else {
                let { action, headers, name, data } = this;
                let file =
                    type === 2 ? e.dataTransfer.files[0] : e.target.files[0];
                if (file == null || file == "undefined" || file === "undefined")
                    return true;
                let param = new FormData();
                param.append(name, file, file.name);
                if (data) {
                    Object.keys(data).map((key) => {
                        param.append(key, data[key]);
                    });
                }
                this.beforeUpload(file);
                ajax(
                    { action, param, headers },
                    (res) => {
                        this.fileLists.unshift({
                            name: file.name,
                            url: res.data,
                            uid: +new Date() + this.index++,
                        });
                        e.target.value = ""; //不加会导致无法连续上传相同文件
                        this.onSuccess(res);
                    },
                    (err) => {
                        this.onError(err);
                    }
                );
            }
            this.isDrogAcitve = false;
        },
        removeImg(item) {
            this.beforeRemove(item, this.fileLists);
            this.fileLists = this.fileLists.filter((items) => {
                return items.uid !== item.uid;
            });
        },
        initFiles() {
            if (!(this.fileList.length > 0)) return;
            this.fileLists = this.fileList.map((file) => {
                return { ...file, uid: +new Date() + this.index++ };
            });
        },
        handleDragOver() {
            if (this.disabled && !this.drag) return;
            this.isDrogAcitve = true;
        },
        handleDrag(e) {
            if (this.disabled && !this.drag) return;
            this.addFile(e, 2);
        },
    },
    mounted() {},
    created() {
        this.initFiles();
    },
    components: {
        ddIcon,
    },
};
</script>

<style lang="less" scoped>
.dd-upload {
    display: inline-block;
    // text-align: center;
    // cursor: pointer;
    outline: none;
    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
            border-color: #409eff;
        }
    }
    .dd-upload-dragger {
        background-color: #fff;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        box-sizing: border-box;
        width: 360px;
        height: 180px;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
            border-color: #409eff;
        }
    }
    .is-drogover {
        background-color: rgba(32, 159, 255, 0.06);
        border: 2px dashed #409eff;
    }
    .dd-upload-list {
        margin: 0;
        padding: 0;
        list-style: none;
        .dd-upload-list_item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
            font-size: 14px;
            color: #606266;
            line-height: 1.8;
            margin-top: 5px;
            position: relative;
            box-sizing: border-box;
            border-radius: 4px;
            width: 100%;

            .dd-icon {
                font-size: 18px;
            }
            &:first-child {
                margin-top: 10px;
            }
            &:hover {
                background-color: #f5f7fa;
            }
            .dd-upload-list_item-name {
                color: #606266;
                display: block;
                margin-right: 40px;
                overflow: hidden;
                padding-left: 4px;
                text-overflow: ellipsis;
                transition: color 0.3s;
                white-space: nowrap;
                &:hover {
                    color: #409eff;
                    cursor: pointer;
                }
            }
            .dd-upload-icon_success {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
                cursor: pointer;
                opacity: 0.75;
                color: #67c23a;
            }
            .dd-upload-icon_close {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
                cursor: pointer;
                opacity: 0.75;
                color: #606266;
            }
        }
    }
    .dd-upload-picture-card {
        display: flex;
        align-items: center;
        li {
            position: relative;
            margin-right: 10px;
            img {
                width: 148px;
                height: 148px;
            }
        }
        .dd-upload_tip {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 148px;
            position: absolute;
            width: 148px;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.4);
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            text-align: left;
            z-index: 99;
            .dd-icon {
                margin: 8px;
                cursor: pointer;
                color: #fff;
                font-size: 30px;
            }
        }
    }
}
.des {
    display: flex;
}
</style>
