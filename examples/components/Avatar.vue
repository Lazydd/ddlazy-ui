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
    </div>
</template>

<script>
export default {
    name: "Badge",
    data() {
        return {
            size: "",
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            sizeList: ["large", "medium", "small"],
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
