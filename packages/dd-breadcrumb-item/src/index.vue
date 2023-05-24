<template>
    <span class="dd-breadcrumb-item">
        <span
            @click="
                to || $router
                    ? !replace
                        ? $router.push(to)
                        : $router.replace(to)
                    : null
            "
            :class="['dd-breadcrumb_inner', { 'is-link': to }]"
        >
            <slot v-if="$slots.default" />
        </span>
        <span class="dd-breadcrumb_separator" v-if="separatorClass">
            <div class="dd-icon">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${separatorClass}`" />
                </svg>
            </div>
        </span>
        <span class="dd-breadcrumb_separator" v-else>
            {{ separator }}
        </span>
    </span>
</template>

<script>
export default {
    name: "ddBreadcrumbItem",
    props: {
        to: {
            type: [String, Object],
        },
        replace: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            separator: this.$parent.separator,
            separatorClass: this.$parent.separatorClass,
        };
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.dd-breadcrumb-item {
    float: left;

    .dd-breadcrumb_inner {
        color: #606266;
        a {
            font-weight: 700;
            text-decoration: none;
            transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            color: #303133;
            &:hover {
                color: #409eff;
                cursor: pointer;
            }
        }
    }
    .is-link {
        font-weight: 700;
        text-decoration: none;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: #303133;
        &:hover {
            color: #409eff;
            cursor: pointer;
        }
    }
    .dd-breadcrumb_separator {
        margin: 0 9px;
        font-weight: 700;
        color: #c0c4cc;
        .dd-icon {
            display: inline-block;
        }
    }
    &:last-child .dd-breadcrumb_separator {
        display: none;
    }
}
</style>
