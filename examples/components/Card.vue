<template>
    <div class="page-box">
        <h2 class="_title">Card 卡片</h2>
        <p class="_descript">将信息聚合在卡片容器中展示。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-card class="box-card">
                    <div class="clearfix" slot="header">
                        <span>卡片名称</span>
                        <dd-link type="primary" style="float: right"
                            >主要链接</dd-link
                        >
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                    </div>
                </dd-card>
            </template>
        </dd-block>
        <dd-block title="简单卡片" :code="code2">
            <template #source>
                <dd-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                    </div>
                </dd-card>
            </template>
        </dd-block>
        <dd-block title="带图片" :code="code3">
            <template #source>
                <div class="box-card">
                    <div class="box-card1">
                        <dd-card :body-style="{ padding: '0px' }">
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image"
                            />
                            <div style="padding: 14px">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <dd-link type="primary">操作按钮</dd-link>
                                </div>
                            </div>
                        </dd-card>
                        <dd-card :body-style="{ padding: '0px' }">
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image"
                            />
                            <div style="padding: 14px">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <dd-link type="primary">操作按钮</dd-link>
                                </div>
                            </div>
                        </dd-card>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="卡片阴影" :code="code4">
            <template #source>
                <div class="box-card1">
                    <dd-card shadow="always">总是显示</dd-card>
                    <dd-card shadow="hover">鼠标悬浮时显示</dd-card>
                    <dd-card shadow="never">从不显示</dd-card>
                </div>
            </template>
        </dd-block>
        <dd-block title="设置body样式" :code="code5">
            <template #source>
                <div class="box-card">
                    <dd-card :body-style="{ padding: '50px' }">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{ "列表内容 " + o }}
                        </div>
                    </dd-card>
                </div>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            code1: `
                <dd-card class="box-card">
                    <div class="clearfix" slot="header">
                        <span>卡片名称</span>
                        <dd-link type="primary" style="float: right"
                            >主要链接</dd-link
                        >
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                    </div>
                </dd-card>
            `,
            code2: `
                <dd-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                    </div>
                </dd-card>
            `,
            code3: `
            <dd-card :body-style="{ padding: '0px' }">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <dd-link type="primary">操作按钮</dd-link>
                        </div>
                    </div>
                </dd-card>
                <dd-card :body-style="{ padding: '0px' }">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <dd-link type="primary">操作按钮</dd-link>
                        </div>
                    </div>
                </dd-card>    
            `,
            code4: `
                <div class="box-card1">
                    <dd-card shadow="always">总是显示</dd-card>
                    <dd-card shadow="hover">鼠标悬浮时显示</dd-card>
                    <dd-card shadow="never">从不显示</dd-card>
                </div>
            `,
            code5: `
                <dd-card :body-style="{ padding: '50px' }">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{ "列表内容 " + o }}
                        </div>
                    </dd-card>
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.box-card1 {
    display: flex;
    .dd-card {
        margin-right: 20px;
    }
    .dd-card:last-child {
        margin-right: 0;
    }
}
.box-card {
    width: 480px;
}
.image {
    width: 100%;
    display: block;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}
</style>
