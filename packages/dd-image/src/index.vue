<template>
    <div :class="['dd-image']">
        <img
            :class="{ 'dd-image_preview': previewSrcList.length }"
            v-if="src && Error"
            :src="
                lazy
                    ? 'http://cdn.ddlazy.cn/fastboot/2022/08/31/095140875/loading.gif'
                    : src
            "
            :data-src="lazy ? src : ''"
            :alt="alt"
            @load="load"
            @error="error"
            @click="preview ? ddImage_preview() : null"
            :style="lazy ? 'object-fit:none' : `object-fit:${fit}`"
        />
        <template v-if="$slots.placeholder && !Error">
            <div class="dd-image_error">
                <slot name="placeholder" />
            </div>
        </template>
        <template v-if="(!src || !Error) && !lazy">
            <template v-if="!$slots.placeholder && !$slots.error">
                <div class="dd-image_error">加载失败</div>
            </template>
            <div v-if="$slots.error" class="dd-image_error">
                <slot name="error" />
            </div>
            <div v-if="$slots.placeholder" class="dd-image_error">
                <slot name="placeholder" />
            </div>
        </template>
        <template v-if="preview">
            <transition name="dd-fade">
                <image-preview
                    v-if="showViewer"
                    :on-close="closeViewer"
                    :url-list="previewSrcList"
                    :init-index="initIndex"
                    v-on="$listeners"
                ></image-preview
            ></transition>
        </template>
    </div>
</template>

<script>
import imagePreview from "./imagePreview";
export default {
    name: "ddImage",
    props: {
        size: {
            type: [String, Number],
        },
        src: {
            type: String,
        },
        fit: {
            type: String,
        },
        lazy: {
            type: Boolean,
            default: false,
        },
        alt: {
            type: String,
        },
        previewSrcList: {
            type: Array,
            default() {
                return [];
            },
        },
        initIndex: {
            type: [Number, String],
            default: 0,
        },
    },
    data() {
        return {
            Error: true,
            showViewer: false,
        };
    },
    mounted() {
        if (this.lazy) {
            this.dd_lazyInitImg();
        }
    },
    methods: {
        error(e) {
            this.Error = e.defaultPrevented;
            this.$emit("error", e.defaultPrevented);
        },
        load(e) {
            this.$emit("load", e);
        },
        dd_lazyInitImg() {
            const imgs = document.querySelectorAll("img[data-src]");
            const config = {
                rootMargin: "0px",
                threshold: 0,
            };
            let observer = new IntersectionObserver((entries, self) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let img = entry.target;
                        let src = img.dataset.src;
                        if (src) {
                            img.src = src;
                            img.removeAttribute("data-src");
                        }
                        // 解除观察
                        self.unobserve(entry.target);
                    }
                });
            }, config);

            imgs.forEach((image) => {
                observer.observe(image);
            });
        },
        ddImage_preview() {
            // if (!this.showViewer) return;
            this.showViewer = true;
        },
        closeViewer() {
            this.showViewer = false;
        },
    },
    computed: {
        preview() {
            return this.previewSrcList && this.previewSrcList.length > 0;
        },
    },
    components: {
        imagePreview,
    },
};
</script>

<style lang="less" scoped>
.dd-image {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    > img {
        height: 100%;
        width: 100%;
    }
    .dd-image_error {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 34px;
        color: #c0c4cc;
        background: #f5f7fa;
        vertical-align: middle;
    }
    .dd-image_preview {
        cursor: pointer;
    }
}
</style>
