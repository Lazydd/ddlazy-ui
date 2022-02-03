<template>
    <div>
        <h3 class="_title">{{ title }}</h3>
        <div class="box">
            <div class="dd-block">
                <div class="source">
                    <slot name="source"></slot>
                </div>
            </div>
            <transition name="fale">
                <div v-if="isShow">
                    <pre v-highlightjs="code"><code class="html"></code></pre>
                </div>
            </transition>
            <div class="control" @click="show">
                <dd-icon
                    :icon="isShow ? 'icon-arrow-up' : 'icon-arrow-down'"
                ></dd-icon>
                <span>{{ isShow ? "影藏代码" : "显示代码" }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddBlock",
    props: {
        title: {
            type: String,
        },
        code: {
            type: String,
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        show() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-block {
    border: 1px solid #ebebeb;
    border-radius: 3px 3px 0 0;
    transition: 0.2s;
}
.source {
    width: 100%;
    padding: 24px;
}
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.5s;
}
.fale-enter,
.fale-leave-to {
    opacity: 0;
}
.fale-enter-to,
.fale-leave {
    opacity: 1;
}
.control {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 0 0 3px 3px;
    border-top: none;
    color: #d3dce6;
    cursor: pointer;
    span {
        transition: 0.5s;
        opacity: 0;
    }
    .dd-icon {
        transition: 0.5s;
    }
    &:hover {
        color: #4096ff !important;
        background-color: rgba(215, 215, 215, 0.3);
        span {
            opacity: 1;
        }
        transition: background-color 1s;
    }
}
.box {
    z-index: 5;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
        transition: all 0.3s;
        .control {
            color: #d3dce6;
            .dd-icon,
            span {
                transform: translateX(-30px);
                opacity: 1;
            }
        }
    }
    transition: all 0.3s;
}
</style>
