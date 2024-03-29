<template>
    <div class="dd-skeleton">
        <div
            v-if="variant === 'text' && loadings"
            :class="[
                'dd-skeleton__item',
                'dd-skeleton__paragraph',
                {
                    is_first: i == 0,
                    is_last: i == rows - 1,
                    is_animated: animated,
                },
            ]"
            v-for="(_, i) in rows"
            :key="`${i}skeletonItem`"
        />
        <div
            v-if="variant === 'image' && loadings"
            :class="['dd-skeleton_img', { is_animated: animated }]"
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
@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
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
        background: linear-gradient(
            90deg,
            #f2f2f2 25%,
            #e6e6e6 37%,
            #f2f2f2 63%
        );
        background-size: 400% 100%;
        animation: skeleton-loading 2.4s ease infinite;
    }
}
</style>
