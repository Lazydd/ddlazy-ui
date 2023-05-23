<template>
    <div class="dd-footer">
        <div class="dd-icon">
            <svg class="icon" v-if="left" aria-hidden="true">
                <use xlink:href="#icon-arrow-left" />
            </svg>
            <span>{{ left }}</span>
        </div>
        <div class="dd-icon">
            <span>{{ right }}</span>
            <svg class="icon" v-if="right" aria-hidden="true">
                <use xlink:href="#icon-arrow-right" />
            </svg>
        </div>
        <dd-backtop target=".main-box" />
    </div>
</template>

<script>
export default {
    name: "ddFooter",
    props: {
        left: {
            type: String,
        },
        right: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    color: #333;
    .dd-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.3s;
        .icon {
            transition: 0.3s;
            color: #999;
            vertical-align: baseline;
            &:first-child {
                margin-right: 5px;
            }
            &:last-child {
                margin-left: 5px;
            }
        }
        &:hover {
            color: #409eff;
        }
    }
}
</style>
