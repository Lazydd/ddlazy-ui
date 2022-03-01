<template>
    <div class="dd-collapse-item">
        <div class="dd-collapse-item__header">
            {{ title }}
        </div>
        <div class="dd-collapse-item__wrap">
            <div class="dd-collapse-item__content"><slot /></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddCollapseItem",
    props: {
        title: {
            type: String,
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
        border-bottom: 1px solid #ebeef5;
        font-size: 13px;
        font-weight: 500;
        transition: border-bottom-color 0.3s;
        outline: none;
    }
    .dd-collapse-item__wrap {
        will-change: height;
        background-color: #fff;
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px px solid #ebeef5;
        .dd-collapse-item__content {
            padding-bottom: 25px;
            font-size: 13px;
            color: #303133;
            line-height: 1.7692307692;
        }
    }
}
</style>
