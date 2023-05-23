<template>
    <div
        :class="[
            'dd-avatar',
            shape == 'square' ? 'dd-avatar-square' : 'dd-avatar-circle ',
            size,
        ]"
        :style="
            typeof size === 'number'
                ? `width: ${size}px; height: ${size}px; line-height: ${size}px`
                : ''
        "
    >
        <img
            v-if="src && Error"
            :src="src"
            alt=""
            @error="error"
            :style="`object-fit:${fit}`"
        />
        <div class="dd-icon" v-if="!src && icon">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${icon}`" />
            </svg>
        </div>
        <template v-if="$slots.default || ($slots.default && !Error)">
            <slot />
        </template>
    </div>
</template>

<script>
export default {
    name: "ddAvatar",
    props: {
        size: {
            type: [String, Number],
        },
        src: {
            type: String,
        },
        shape: {
            type: String,
        },
        icon: {
            type: String,
        },
        fit: {
            type: String,
        },
    },
    data() {
        return {
            Error: true,
        };
    },
    methods: {
        error(e) {
            this.Error = e.defaultPrevented;
            this.$emit("error", e.defaultPrevented);
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
    .dd-icon {
        display: inline-block;
        font-size: 25px;
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
