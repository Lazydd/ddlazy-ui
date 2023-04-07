<template>
    <div class="dd-menu dd-menu-vertical">
        <div
            class="dd-tree"
            v-for="(item, i) in myTree"
            :key="item.key"
        >
            <div
                class="dd-menu_title"
                :style="`padding-left:${node.nodeLevel * 18}px`"
                v-if="item.title"
                @click="tree_header(item, i)"
            >
                <div
                    :class="{ 'dd-menu-item_active': activeMenu === item.keys }"
                >
                    <span v-if="item.icon" class="dd-menu_logo">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="`#${item.icon}`"></use>
                        </svg>
                    </span>
                    {{ item.title }}
                </div>
                <span
                    :class="[
                        'dd-menu_icon',
                        item.isActive ? 'dd-menu_icon_active' : '',
                    ]"
                    :style="!item.children ? `color:transparent` : ''"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-arrow-down`"></use>
                    </svg>
                </span>
            </div>
            <div
                class="dd-menu_children"
                v-if="item.children && item.children.length"
            >
                <dd-transition>
                    <dd-menu
                        v-if="item.isActive"
                        :data="item.children"
                        :props="props"
                        :node="item"
                        :level="level + 1"
                        @click="abc"
                    ></dd-menu>
                </dd-transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddMenu",
    props: {
        data: {
            type: Array,
        },
        defaultActive: {},
        props: {
            type: Object,
            default() {
                return {
                    title: "title",
                    children: "children",
                };
            },
            validator: (value) => {
                let keys = Object.keys(value);
                return keys.includes("title") && keys.includes("children");
            },
        },
        level: {
            type: Number,
            default: 0,
        },
        node: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            nodeLevel: 1,
            isActive: false,
            activeMenu: this.defaultActive || null,
            myTree: this.data?.map((item) => {
                return {
                    title: item[this.props.title],
                    children: item[this.props.children],
                    icon: item.icon,
                    keys: item.key,
                    href: item.href,
                    isActive: false,
                };
            }),
        };
    },
    methods: {
        initMenu() {
            if (this.$parent?.nodeLevel) {
                let parentNodeLevel = this.$parent.nodeLevel;
                this.$set(this.node, "nodeLevel", parentNodeLevel + 1);
                this.nodeLevel = parentNodeLevel + 1;
            } else {
                this.$set(this.node, "nodeLevel", 1);
            }
        },
        tree_header(item, i) {
            this.$emit("menu-click", item, this.$vnode, this);
            this.$emit("click", item);
            item.isActive = !item.isActive;
            if (item.href) this.$router.push(item.href);
            if (!item.children) {
                this.activeMenu = item.keys || item.title;
                this.$emit("change", this.activeMenu);
            }
        },
        abc(item) {
            if (!item.children) {
                this.activeMenu = item.keys || item.title;
            }
        },
    },
    created() {
        this.initMenu();
    },
    watch: {
        activeMenu(val) {
            this.activeMenu = val;
        },
    },
};
</script>

<style lang="less" scoped>
.dd-menu-vertical {
    width: 240px;
    // min-height: 400px;
}

.dd-menu {
    position: relative;
    border-right: 1px solid #e6e6e6;
    margin: 0;
    padding-left: 0;
    cursor: default;
    background: #fff;
    color: #606266;
    .dd-tree {
        white-space: nowrap;
        outline: none;
        user-select: none;
        .dd-menu_children {
            display: block;
        }
        .dd-menu_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 56px;
            line-height: 56px;
            font-size: 14px;
            color: #303133;
            padding: 0 20px;
            list-style: none;
            cursor: pointer;
            position: relative;
            transition: border-color 0.3s, background-color 0.3s, color 0.3s;
            box-sizing: border-box;
            white-space: nowrap;
            &:hover {
                background-color: #f5f7fa;
            }
            .dd-menu_logo {
                display: inline-block;
                padding: 6px;
                cursor: pointer;
                color: #909399;
                font-size: 18px;
            }
            .dd-menu_icon {
                display: inline-block;
                padding: 6px;
                cursor: pointer;
                color: #c0c4cc;
                font-size: 12px;
                transform: rotate(0deg);
                transition: transform 0.3s ease-in-out;
                // &::before {
                //     content: "";
                // }
            }
            .dd-menu_icon_active {
                transform: rotate(180deg);
                transition: transform 0.3s ease-in-out;
            }
            .dd-menu-item_active {
                color: #409eff;
                .dd-menu_logo {
                    color: #409eff;
                }
            }
        }
    }
}
</style>
