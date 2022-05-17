<template>
    <div class="page-box">
        <h2 class="_title">Image 图片</h2>
        <p class="_descript">
            图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="main">
                    <dd-image
                        v-for="fit in fits"
                        :key="fit"
                        :fit="fit"
                        :src="url"
                        style="width: 100px; height: 100px"
                    ></dd-image>
                </div>
            </template>
        </dd-block>
        <dd-block title="占位内容" :code="code2">
            <template #source>
                <div class="demo-image">
                    <div class="block">
                        <span>默认</span>
                        <dd-image
                            style="width: 300px; height: 200px"
                            :src="src"
                        ></dd-image>
                    </div>
                    <div class="block">
                        <span>自定义</span>
                        <dd-image
                            style="width: 300px; height: 200px"
                            :src="src"
                        >
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </dd-image>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="加载失败" :code="code3">
            <template #source>
                <div class="demo-image">
                    <div class="block">
                        <span>默认</span>
                        <dd-image
                            style="width: 300px; height: 200px"
                        ></dd-image>
                    </div>
                    <div class="block">
                        <span>自定义</span>
                        <dd-image style="width: 300px; height: 200px">
                            <div slot="error" class="image-slot">
                                <dd-icon icon="icon-pic"></dd-icon>
                            </div>
                        </dd-image>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-block title="懒加载" :code="code4">
            <template #source>
                <div class="demo-lazy">
                    <dd-image
                        v-for="url in urls"
                        :key="url"
                        :src="url"
                        lazy
                    ></dd-image>
                </div>
            </template>
        </dd-block>
        <dd-block title="大图预览" :code="code5">
            <template #source>
                <div style="width: 100px; height: 100px">
                    <dd-image
                        :src="url"
                        :preview-src-list="srcList"
                        :z-index="5000"
                        @change="change"
                    ></dd-image>
                </div>
            </template>
        </dd-block>
        <dd-describe title="Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Slot" :data="Attributes3" slots></dd-describe>
        <dd-footer left="Scroll 滚动条" right="Backtop 回到顶部"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Images",
    data() {
        return {
            fits: ["fill", "contain", "cover", "none", "scale-down"],
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
            urls: [
                "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
                "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
                "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
                "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
                "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
                "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
            ],
            srcList: [
                "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            ],
            code1: `
                <div class="main">
                    <dd-image
                        v-for="fit in fits"
                        :key="fit"
                        :fit="fit"
                        :src="url"
                        style="width: 100px; height: 100px"
                    ></dd-image>
                </div>

                fits: ["fill", "contain", "cover", "none", "scale-down"],
                url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

                .main {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `,
            code2: `
                <div class="demo-image">
                    <div class="block">
                        <dd-image :src="src"></dd-image>
                    </div>
                    <div class="block">
                        <dd-image :src="src">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </dd-image>
                    </div>
                </div>

                src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",

                .demo-image {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .block {
                        width: 300px;
                        height: 200px;
                    }
                }
            `,
            code3: `
                <div class="demo-image">
                    <div class="block">
                        <span>默认</span>
                        <dd-image
                            style="width: 300px; height: 200px"
                        ></dd-image>
                    </div>
                    <div class="block">
                        <span>自定义</span>
                        <dd-image style="width: 300px; height: 200px">
                            <div slot="error" class="image-slot">
                                <dd-icon icon="icon-pic"></dd-icon>
                            </div>
                        </dd-image>
                    </div>
                </div>
            `,
            code4: `
                <div class="demo-lazy">
                    <dd-image
                        v-for="url in urls"
                        :key="url"
                        :src="url"
                        lazy
                    ></dd-image>
                </div>

                urls: [
                    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
                    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
                    "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
                    "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
                    "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
                    "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
                ],
            `,
            code5: `
                <div style="width: 100px; height: 100px">
                    <dd-image
                        :src="url"
                        :preview-src-list="srcList"
                        :z-index="5000"
                        @change="change"
                    ></dd-image>
                </div>

                url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                srcList: [
                    "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                    "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                ],

                change(index) {
                    console.log(index);
                },
            `,
            Attributes: [
                {
                    parameter: "src",
                    explain: "图片源，同原生",
                    type: "string",
                    optional: "—",
                    default: "-",
                },
                {
                    parameter: "fit",
                    explain: "当展示类型为图片的时候，设置图片如何适应容器框",
                    type: "string",
                    optional: "fill / contain / cover / none / scale-down",
                    default: "-",
                },
                {
                    parameter: "alt",
                    explain: "原生 alt",
                    type: "string",
                    optional: "-",
                    default: "-",
                },
                {
                    parameter: "lazy",
                    explain: "是否开启懒加载",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
                {
                    parameter: "preview-src-list",
                    explain: "开启图片预览功能",
                    type: "Array",
                    optional: "—",
                    default: "-",
                },
                {
                    parameter: "init-index",
                    explain: "设置图片预览的索引",
                    type: "Number/String",
                    optional: "—",
                    default: "0",
                },
                {
                    parameter: "z-index",
                    explain: "设置图片预览的 z-index",
                    type: "Number",
                    optional: "—",
                    default: "2000",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "仅在大图预览切换时触发",
                    backParameter: "index",
                },
                {
                    name: "load",
                    explain: "图片加载成功触发",
                    backParameter: "(e: Event)",
                },
                {
                    name: "error",
                    explain: "图片加载失败触发",
                    backParameter: "(e: Error)",
                },
            ],
            Attributes3: [
                {
                    name: "placeholder",
                    explain: "图片未加载的占位内容",
                },
                {
                    name: "error",
                    explain: "加载失败的内容",
                },
            ],
        };
    },
    methods: {
        change(index) {
            console.log(index);
        },
    },
};
</script>

<style lang="less" scoped>
.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.demo-image {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
}
.demo-lazy {
    height: 400px;
    overflow-y: auto;
    .dd-image {
        display: block;
        min-height: 200px;
        margin-bottom: 10px;
    }
}
</style>
