<template>
    <div class="dd-coder" v-html="coder" />
</template>

<script>
export default {
    name: "ddCoder",
    props: {
        coder: {
            type: String,
        },
    },
};
</script>

<style lang="less" scoped>
.dd-coder {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
}
</style>
