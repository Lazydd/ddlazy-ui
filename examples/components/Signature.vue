<template>
    <div class="page-box">
        <h2 class="_title">Signature 签名</h2>
        <p class="_descript">数字签名</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="control-group">
                    <dd-button @click="confirm">确定</dd-button>
                    <dd-button @click="cancel">取消</dd-button>
                </div>
                <div class="container-box">
                    <div class="signature-box">
                        <dd-signature
                            ref="signature"
                            @save="save"
                        ></dd-signature>
                    </div>
                    <div class="signature-box">
                        <img :src="url" alt="" />
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Events" :data="Attributes" events></dd-describe>
        <dd-footer left="Map 地图" right="chatGPT"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Signature",
    data() {
        return {
            url: "",
            code1: `
                <div class="control-group">
                    <dd-button @click="confirm">确定</dd-button>
                    <dd-button @click="cancel">取消</dd-button>
                </div>
                <div class="container-box">
                    <div class="signature-box">
                        <dd-signature
                            ref="signature"
                            @save="save"
                        ></dd-signature>
                    </div>
                    <div class="signature-box">
                        <img :src="url" alt="" />
                    </div>
                </div>

                url: "",

                methods: {
                    confirm() {
                        this.$refs.signature.saveCanvas();
                    },
                    cancel() {
                        this.$refs.signature.cleanCanvas();
                    },
                    save(url) {
                        this.url = url;
                    },
                },

                .control-group {
                    margin-bottom: 20px;
                    .dd-button {
                        &:first-child {
                            margin-right: 20px;
                        }
                    }
                }
                .container-box {
                    display: flex;
                }
                .signature-box {
                    width: 100%;
                    height: 500px;
                }
            `,
            Attributes: [
                {
                    name: "cancel",
                    explain: "清空签名",
                    backParameter: "—",
                },
                {
                    name: "confirm",
                    explain: "触发签名保存",
                    backParameter: "—",
                },
                {
                    name: "save",
                    explain: "签名保存后触发的回调",
                    backParameter: "string（base64）",
                },
                {
                    name: "stopMoving",
                    explain: "鼠标松开的回调",
                    backParameter: "(event: Event)",
                },
                {
                    name: "moving",
                    explain: "鼠标按下移动中的回调",
                    backParameter: "(event: Event)",
                },
                {
                    name: "sartMoving",
                    explain: "鼠标按下的回调",
                    backParameter: "(event: Event)",
                },
            ],
        };
    },
    methods: {
        confirm() {
            this.$refs.signature.saveCanvas();
        },
        cancel() {
            this.$refs.signature.cleanCanvas();
        },
        save(url) {
            this.url = url;
        },
    },
};
</script>

<style lang="less" scoped>
.control-group {
    margin-bottom: 20px;
    .dd-button {
        &:first-child {
            margin-right: 20px;
        }
    }
}
.container-box {
    display: flex;
}
.signature-box {
    width: 100%;
    height: 500px;
}
</style>
