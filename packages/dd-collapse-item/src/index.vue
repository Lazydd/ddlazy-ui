<template>
    <div
        :class="[
            'dd-collapse-item',
            isActive === true ? 'is-active' : '',
            arrayActive ? 'is-active' : '',
        ]"
    >
        <div
            :class="['dd-collapse-item__header', disabled ? 'is-disabled' : '']"
            @click="!disabled ? sollapseChange() : null"
            :style="
                (!isArray ? !isActive : !arrayActive)
                    ? 'border-bottom: 1px solid #ebeef5;'
                    : ''
            "
        >
            <slot v-if="$slots.title" name="title" />
            <template v-else>
                {{ title }}
            </template>
            <div class="dd-collapse-item__arrow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </div>
        </div>
        <transition name="fale">
            <div
                class="dd-collapse-item__wrap"
                v-if="
                    !isArray
                        ? accordion
                            ? name == $parent.activeName && isActive
                                ? true
                                : false
                            : isActive
                        : arrayActive
                "
            >
                <div class="dd-collapse-item__content"><slot /></div>
            </div>
        </transition>
    </div>
</template>

<script>
let newArr = [];
import mixin from "../../dd-mixins/mixin";
export default {
    name: "ddCollapseItem",
    mixins: [mixin],
    props: {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isActive: null,
            accordion: this.$parent.accordion,
            activeName: null,
            isArray: null,
            arrayActive: null,
            activeArr: this.$parent.value,
        };
    },
    methods: {
        sollapseChange() {
            if (this.isArray) {
                this.initNewArr();
                this.$parent.activeName = newArr;
                this.arrayIsactive();
            } else {
                this.activeName = this.name;
                this.isActive = !this.isActive;
                this.$parent.activeName = this.activeName;
                if (this.$parent.activeName != this.activeName) {
                    this.isActive = false;
                }
            }
            this.$parent.changeActive_name();
        },
        arrayIsactive() {
            if (newArr.length) {
                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[i] == this.name) {
                        this.arrayActive = true;
                        break;
                    } else {
                        this.arrayActive = false;
                    }
                }
            } else {
                this.arrayActive = false;
            }
        },
        initNewArr() {
            let arr = [...this.$parent.value];
            if (arr.length) {
                newArr = this.multipleChoice(arr, this.name);
            } else {
                newArr = [...arr, this.name];
            }
        },
        initCollapse() {
            if (this.$parent.value instanceof Array) {
                this.isActive = this.$parent.value;
                this.isArray = true;
                newArr = this.isActive;
                this.arrayIsactive();
            } else if (typeof this.$parent.value == "string") {
                this.isActive = this.$parent.value == this.name ? true : false;
                this.isArray = false;
            }
        },
    },
    created() {
        this.initCollapse();
    },
    watch: {
        "$parent.activeName"(val) {
            if (this.accordion)
                if (this.activeName != val) this.isActive = false;
        },
        "$parent.value"(val) {
            this.activeArr = val;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-collapse-item {
    .dd-collapse-item__header {
        display: flex;
        align-items: center;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        color: #303133;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        outline: none;
        .dd-collapse-item__arrow {
            display: inline-block;
            margin: 0 8px 0 auto;
            transition: transform 0.3s;
            font-weight: 300;
            font-size: 20px;
        }
        .dd-icon {
            font-size: 18px;
            height: 100%;
        }
    }
    .dd-collapse-item__wrap {
        height: auto;
        background-color: #fff;
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px solid #ebeef5;
        .dd-collapse-item__content {
            padding-bottom: 25px;
            font-size: 13px;
            color: #303133;
            line-height: 1.7692307692;
        }
    }
    .is-disabled {
        color: #bbb;
        cursor: not-allowed;
    }
}
.is-active {
    .dd-collapse-item__header {
        .dd-collapse-item__arrow {
            transform: rotate(90deg);
        }
    }
}
.fale-enter-active,
.fale-leave-active {
    transition: opacity 0.3s;
}
.fale-enter,
.fale-leave-to {
    opacity: 0;
}
.fale-enter-to,
.fale-leave {
    opacity: 1;
}
</style>
