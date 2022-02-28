<template>
    <div class="dd-empty">
        <div
            class="dd-empty_image"
            v-if="image"
            :style="`width:${imageSize}px`"
        >
            <img :src="image" alt="" />
        </div>
        <div class="dd-empty_description">
            <p>{{ description }}</p>
        </div>
        <div class="dd-empty_bottom" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "ddEmpty",
    props: {
        description: {
            type: String,
            default: "暂无数据",
        },
        image: {
            type: String,
            default:
                "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
        },
        imageSize: {
            type: Number,
            default: 160,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 40px 0;
    .dd-empty_image {
        img {
            user-select: none;
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: contain;
        }
    }
    .dd-empty_description {
        margin-top: 20px;
        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;
        }
    }
    .dd-empty_bottom {
        margin-top: 20px;
    }
}
</style>
