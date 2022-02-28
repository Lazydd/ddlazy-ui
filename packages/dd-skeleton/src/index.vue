<template>
    <div class="dd-skeleton">
        <div
            :class="[
                'dd-skeleton__item',
                'dd-skeleton__paragraph',
                i == 0 ? 'is_first' : '',
                i == rows - 1 ? 'is_last' : '',
                animated ? 'is_animated' : '',
            ]"
            v-for="(item, i) in rows"
            :key="`${i}skeletonItem`"
        ></div>
    </div>
</template>

<script>
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
    },
};
</script>

<style lang="less" scoped>
@keyframes aaa {
    0% {
        background: #f2f2f2;
        background-size: 100% 100%;
    }
    25% {
        background: #f2f2f2;
        background-size: 300% 100%;
    }
    50% {
        background: linear-gradient(
            90deg,
            #f2f2f2 25%,
            #e6e6e6 37%,
            #f2f2f2 63%
        );
        background-size: 400% 100%;
    }
    75% {
        background: #f2f2f2;
        background-size: 300% 100%;
    }
    100% {
        background: #f2f2f2;
        background-size: 100% 100%;
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
    .is_animated {
        animation: aaa 4.4s ease infinite;
    }
}
</style>
