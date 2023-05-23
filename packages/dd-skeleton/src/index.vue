<template>
    <div class="dd-skeleton">
        <div
            v-if="variant === 'text' && loadings"
            :class="[
                'dd-skeleton__item',
                'dd-skeleton__paragraph',
                i == 0 ? 'is_first' : '',
                i == rows - 1 ? 'is_last' : '',
                animated ? 'is_animated' : '',
            ]"
            v-for="(item, i) in rows"
            :key="`${i}skeletonItem`"
        />
        <div
            v-if="variant === 'image' && loadings"
            :class="['dd-skeleton_img', animated ? 'is_animated_img' : '']"
        >
            <dd-icon class="dd-skeleton-icon" icon="icon-pic" />
        </div>
        <div v-if="!loadings">
            <slot v-if="$slots.default" />
        </div>
    </div>
</template>

<script>
let timer = null;
import ddIcon from "../../dd-icon";
export default {
    name: "ddSkeleton",
    props: {
        rows: {
            type: Number,
            default: 4,
        },
        animated: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: "text",
        },
        loading: {
            type: Boolean,
            default: true,
        },
        throttle: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            loadings: this.loading,
        };
    },
    methods: {
        loadingChange() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.loadings = this.loading;
            }, this.throttle);
        },
    },
    mounted() {
        this.loadingChange();
    },
    beforeDestroy() {
        if (timer) clearTimeout(timer);
    },
    components: {
        ddIcon,
    },
    watch: {
        loading(val) {
            this.loadingChange();
        },
    },
};
</script>

<style lang="less" scoped>
@keyframes loading {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
@keyframes loadingImg {
    0% {
        left: -50%;
    }
    100% {
        left: 100%;
    }
}
.dd-skeleton {
    width: 100%;
    .dd-skeleton__item {
        background: #f2f2f2;
        display: inline-block;
        height: 16px;
        border-radius: 4px;
        width: 100%;
    }
    .dd-skeleton__paragraph {
        margin-top: 16px;
    }
    .dd-skeleton__paragraph:first-child {
        margin-top: 0;
    }
    .is_first {
        width: 33%;
    }
    .is_last {
        width: 66%;
    }
    .dd-skeleton_img {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f2f2f2;
        color: #dcdde0;
        .dd-skeleton-icon {
            font-size: 80px;
        }
    }
    .is_animated {
        position: relative;
        overflow: hidden;
        &::before {
            position: absolute;
            animation: loading 2.4s ease infinite;
            content: "";
            display: inline-block;
            height: 16px;
            width: 100%;
            background: linear-gradient(
                90deg,
                #f2f2f2 25%,
                #e6e6e6 37%,
                #f2f2f2 63%
            );
        }
    }
    .is_animated_img {
        position: relative;
        overflow: hidden;
        &::before {
            position: absolute;
            animation: loadingImg 1.4s ease infinite;
            content: "";
            display: inline-block;
            height: 100%;
            width: 50%;
            background: linear-gradient(
                90deg,
                #f2f2f2 25%,
                #e6e6e6 37%,
                #f2f2f2 63%
            );
            opacity: 0.5;
        }
    }
}
</style>
