<template>
    <div :class="['container', value ? 'night' : '']">
        <header>
            <dd-icon
                class="cetegory"
                icon="icon-category"
                v-show="size.width < 1024 ? true : false"
                @click="articeChange"
            ></dd-icon>
            <!-- <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre> -->
            <div class="tit" @click="$router.push('/')">
                <svg class="icon" aria-hidden="true" :style="{ fill: color }">
                    <use :xlink:href="`#${icon}`"></use>
                </svg>
                <h2>ddlazy-ui</h2>
            </div>
            <ul class="nav">
                <li
                    class="navList"
                    v-for="nav in navList"
                    :key="nav.label"
                    :class="{ isActive: nav.label == activeNav }"
                    @click="changeNav(nav)"
                >
                    {{ nav.label }}
                </li>
                <dd-switch v-model="value"></dd-switch>
            </ul>
        </header>
        <template>
            <router-view />
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    label: "指南",
                    path: "/guide/design",
                },
                {
                    label: "组件",
                    path: "/component/installation",
                },
            ],
            size: {},
            width: 0,
            timer: null,
            color: "rgb(70, 159, 252)",
            icon: "icon-salescenter",
            value: false,
            activeNav: "组件",
        };
    },
    methods: {
        articeChange() {
            this.isShow = true;
        },
        changeNav(nav) {
            this.activeNav = nav.label;
            this.$router.push(nav.path);
        },
    },
};
</script>

<style scoped lang="less">
.night {
    background: rgb(30, 30, 30) !important;
    /deep/ ._title {
        color: #999;
        transition: all 1s;
    }
    /deep/ .code {
        border-left: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        transition: all 1s;
    }
    /deep/ header {
        background-color: rgb(30, 30, 30) !important;
        transition: all 1s;
    }
    transition: all 1s;
}
.container {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background-color: #fff;
    transition: all 1s;
    /deep/ .code {
        border-left: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        transition: all 1s;
    }
    /deep/ header {
        background-color: #fff;
        transition: all 1s;
    }
    header {
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
        padding: 0 120px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #dcdfe6;
        height: 80px;
        .tit {
            display: flex;
            align-items: center;
            color: rgb(70, 159, 252);
            cursor: pointer;
            .icon {
                font-size: 40px;
                margin-right: 15px;
            }
        }
        .cetegory {
            position: absolute;
            left: 80px;
            font-size: 30px;
            cursor: pointer;
        }
        .nav {
            display: flex;
            align-items: center;

            .navList {
                position: relative;
                line-height: 80px;
                text-decoration: none;
                color: #1989fa;
                cursor: pointer;
                display: block;
                opacity: 0.5;
                padding: 0 22px;
                &:hover {
                    opacity: 1;
                    color: #1989fa !important;
                }
            }

            .isActive {
                opacity: 1;
                color: #1989fa !important;
                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: calc(50% - 15px);
                    bottom: 0;
                    height: 2px;
                    width: 30px;
                    background: #409eff;
                }
            }
        }
    }
}
</style>
