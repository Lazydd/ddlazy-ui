<template>
    <div class="dd-submenu">
        <div class="dd-submenu_title" style="padding-left: 40px">
            <slot name="title" />
            <dd-icon
                class="dd-submenu_icon-arrow"
                icon="icon-arrow-down"
            ></dd-icon>
        </div>
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "ddSubmenu",
    props: {},
};
</script>

<style lang="less" scoped>
.dd-submenu {
    .dd-submenu_title {
        display: flex;
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
            outline: none;
            background-color: #ecf5ff;
        }
        .dd-icon {
            font-size: 20px;
        }
        .dd-submenu_icon-arrow {
            position: absolute;
            // top: 50%;
            right: 20px;
            // margin-top: -7px;
            transition: transform 0.3s;
            font-size: 20px;
            color: #909399;
        }
    }
}
</style>
