<template>
    <div class="page-box">
        <h2 class="_title">Avatar 头像</h2>
        <p class="_descript">用图标、图片或者字符的形式展示用户或事物信息。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="main">
                    <div class="main" style="width: 50%">
                        <dd-avatar
                            :size="50"
                            :src="circleUrl"
                            style="display: block"
                        ></dd-avatar>
                        <div v-for="size in sizeList" :key="size">
                            <dd-avatar
                                style="display: block"
                                :size="size"
                                :src="circleUrl"
                            ></dd-avatar>
                        </div>
                    </div>
                    <div class="main" style="width: 50%">
                        <dd-avatar
                            :size="50"
                            shape="square"
                            :src="circleUrl"
                            style="display: block"
                        ></dd-avatar>
                        <div
                            class="block"
                            v-for="(size, i) in sizeList"
                            :key="i"
                        >
                            <dd-avatar
                                shape="square"
                                :size="size"
                                :src="circleUrl"
                            ></dd-avatar>
                        </div>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="展示类型" :code="code2">
            <template #source>
                <div class="main">
                    <dd-avatar
                        icon="icon-usercenter"
                        style="display: block"
                    ></dd-avatar>
                    <dd-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        style="display: block"
                    ></dd-avatar>
                    <dd-avatar style="display: block">User</dd-avatar>
                </div>
            </template>
        </dd-block>
        <dd-block title="图片加载失败的 fallback 行为" :code="code3">
            <template #source>
                <div class="main">
                    <dd-avatar
                        :size="60"
                        src="https://empty"
                        style="display: block"
                        ><img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                    /></dd-avatar>
                </div>
            </template>
        </dd-block>
        <dd-block title="图片如何适应容器框" :code="code4">
            <template #source>
                <div class="main">
                    <dd-avatar
                        v-for="fit in fits"
                        :key="fit"
                        shape="square"
                        :size="100"
                        :fit="fit"
                        :src="url"
                        style="display: block"
                    ></dd-avatar>
                </div>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Avatar",
    data() {
        return {
            size: "",
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            sizeList: ["large", "medium", "small"],
            fits: ["fill", "contain", "cover", "none", "scale-down"],
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            code1: `
                <div class="main">
                    <div class="main" style="width: 50%">
                        <dd-avatar
                            :size="50"
                            :src="circleUrl"
                            style="display: block"
                        ></dd-avatar>
                        <div v-for="size in sizeList" :key="size">
                            <dd-avatar
                                style="display: block"
                                :size="size"
                                :src="circleUrl"
                            ></dd-avatar>
                        </div>
                    </div>
                    <div class="main" style="width: 50%">
                        <dd-avatar
                            :size="50"
                            shape="square"
                            :src="circleUrl"
                            style="display: block"
                        ></dd-avatar>
                        <div
                            class="block"
                            v-for="(size, i) in sizeList"
                            :key="i"
                        >
                            <dd-avatar
                                shape="square"
                                :size="size"
                                :src="circleUrl"
                            ></dd-avatar>
                        </div>
                    </div>
                </div>

                .main {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `,
            code2: `
                <div class="main">
                    <dd-avatar
                        icon="icon-usercenter"
                        style="display: block"
                    ></dd-avatar>
                    <dd-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        style="display: block"
                    ></dd-avatar>
                    <dd-avatar style="display: block">User</dd-avatar>
                </div>
            `,
            code3: `
                <div class="main">
                    <dd-avatar
                        :size="60"
                        src="https://empty"
                        style="display: block"
                        ><img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                    /></dd-avatar>
                </div>
            `,
            code4: `
                <div class="main">
                    <dd-avatar
                        v-for="fit in fits"
                        :key="fit"
                        shape="square"
                        :size="100"
                        :fit="fit"
                        :src="url"
                        style="display: block"
                    ></dd-avatar>
                </div>

                fits: ["fill", "contain", "cover", "none", "scale-down"],
                url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
