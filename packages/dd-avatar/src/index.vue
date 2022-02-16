<template>
    <div
        :class="[
            'dd-avatar',
            shape == 'square' ? 'dd-avatar-square' : 'dd-avatar-circle ',
            size,
        ]"
    >
        <img :src="src" alt="" />
    </div>
</template>

<script>
export default {
    name: "ddAvatar",
    props: {
        size: {
            type: String,
        },
        src: {
            type: String,
        },
        shape: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-avatar {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    color: #fff;
    background: #c0c4cc;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    > img {
        display: block;
        height: 100%;
        vertical-align: middle;
    }
}
.dd-avatar-circle {
    border-radius: 50%;
}
.dd-avatar-square {
    border-radius: 4px;
}
.large {
    width: 40px;
    height: 40px;
    line-height: 40px;
}
.medium {
    width: 36px;
    height: 36px;
    line-height: 36px;
}
.small {
    width: 28px;
    height: 28px;
    line-height: 28px;
}
</style>
