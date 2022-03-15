<template>
    <div class="page-box">
        <h2 class="_title">内置过渡动画</h2>
        <p class="_descript">
            ddlazy-ui 内应用在部分组件的过渡动画，你也可以直接使用。
        </p>
        <dd-block title="fade 淡入淡出" :code="code1">
            <template #source>
                <div>
                    <dd-button @click="show = !show">Click Me</dd-button>
                    <div style="display: flex; margin-top: 20px; height: 100px">
                        <dd-transition name="dd-fade">
                            <div v-show="show" class="transition-box">
                                .dd-fade
                            </div>
                        </dd-transition>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="zoom 缩放" :code="code2">
            <template #source>
                <div>
                    <dd-button @click="show2 = !show2">Click Me</dd-button>
                    <div class="zoom">
                        <dd-transition name="dd-zoom-center">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-center
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-left">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-left
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-right">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-right
                            </div>
                        </dd-transition>
                    </div>
                    <div class="zoom">
                        <dd-transition name="dd-zoom-centerVertical">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-centerVertical
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-top">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-top
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-bottom">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-bottom
                            </div>
                        </dd-transition>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="collapse 展开折叠" :code="code3">
            <template #source>
                <div class="fold">
                    <dd-button @click="show3 = !show3">Click Me</dd-button>
                    <div style="height: 320px">
                        <dd-transition name="list">
                            <div v-show="show3">
                                <div class="transition-box">折叠</div>
                                <div class="transition-box">折叠</div>
                                <div class="transition-box">折叠</div>
                            </div>
                        </dd-transition>
                    </div>
                </div>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Link",
    data() {
        return {
            show: true,
            show2: true,
            show3: true,
            code1: `
                 <div>
                    <dd-button @click="show = !show">Click Me</dd-button>
                    <div style="display: flex; margin-top: 20px; height: 100px">
                        <dd-transition name="dd-fade">
                            <div v-show="show" class="transition-box">
                                .el-fade-in
                            </div>
                        </dd-transition>
                    </div>
                </div>
            `,
            code2: `
                <div>
                    <dd-button @click="show2 = !show2">Click Me</dd-button>
                    <div style="display: flex; margin-top: 20px; height: 100px">
                        <dd-transition name="dd-zoom-center">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-center
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-top">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-top
                            </div>
                        </dd-transition>
                        <dd-transition name="dd-zoom-bottom">
                            <div v-show="show2" class="transition-box">
                                .dd-zoom-bottom
                            </div>
                        </dd-transition>
                    </div>
                </div>
            `,
            code3: `

            `,
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .zoom {
        display: flex;
        margin-top: 20px;
        height: 100px;
    }
    .fold {
        .dd-transition {
            margin-top: 20px;
            height: 320px;
        }
    }
}
</style>
