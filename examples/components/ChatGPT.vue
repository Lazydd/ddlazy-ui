<template>
    <div class="page-box">
        <h2 class="_title">chatGPT</h2>
        <p class="_descript">openAPI语言模型（https://platform.openai.com/）</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="dd-chat-gpt">
                    <div class="dd-chat-gpt-content">
                        <div class="content">{{ content }}</div>
                    </div>
                    <dd-input
                        class="appkey"
                        v-model="appkey"
                        placeholder="write you appkey"
                    />
                    <div class="dd-caht-gpt_footer">
                        <dd-input
                            v-model="inputValue"
                            placeholder="write a tagline for an ice cream shop"
                        />
                        <dd-button @click="submit">提交</dd-button>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-footer left="Signature 签名" right="PrintArea 打印"></dd-footer>
    </div>
</template>

<script>
import { instance as $axios } from "../utils/axios";
export default {
    name: "Card",
    data() {
        return {
            code1: `
                <div class="dd-chat-gpt">
                    <div class="dd-chat-gpt-content">
                        <div class="content">{{ content }}</div>
                    </div>
                    <dd-input
                        class="appkey"
                        v-model="appkey"
                        placeholder="write you appkey"
                    />
                    <div class="dd-caht-gpt_footer">
                        <dd-input
                            v-model="inputValue"
                            placeholder="write a tagline for an ice cream shop"
                        />
                        <dd-button @click="submit">提交</dd-button>
                    </div>
                </div>

                methods: {
                    submit() {
                        $axios
                            .post(
                                "/v1/engines/text-davinci-003-playground/completions",
                                {
                                    prompt: this.inputValue,
                                    max_tokens: 2048,
                                },
                                {
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer " + this.appkey,
                                    },
                                }
                            )
                            .then((res) => {
                                this.content += res.data.choices[0].text;
                            });
                    },
                }
            `,

            inputValue: "",
            appkey: "",
            content: "",
        };
    },
    methods: {
        submit() {
            $axios
                .post(
                    "/v1/engines/text-davinci-003-playground/completions",
                    {
                        prompt: this.inputValue,
                        max_tokens: 2048,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.appkey,
                        },
                    }
                )
                .then((res) => {
                    this.content += res.data.choices[0].text;
                });
        },
    },
};
</script>

<style lang="less" scoped>
.dd-chat-gpt {
    .dd-chat-gpt-content {
        padding: 20px;
        border: 1px solid #c5c5d2;
        margin-bottom: 20px;
        .content {
            height: 600px;
            text-align: justify;
            overflow: auto;
        }
    }
    .dd-caht-gpt_footer {
        display: flex;
        align-items: center;
        .dd-input {
            width: 100%;
        }
    }
    .dd-button {
        margin-left: 20px;
    }
    .appkey {
        width: 500px;
        margin-bottom: 20px;
    }
}
</style>
