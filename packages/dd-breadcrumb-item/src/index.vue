<template>
    <span class="dd-breadcrumb-item">
        <span class="dd-breadcrumb_inner"><slot /></span>
        <span class="dd-breadcrumb_separator" v-if="">{{ separator }}</span>
    </span>
</template>

<script>
export default {
    name: "ddBreadcrumbItem",
    props: {
        kk: {
            type: String,
        },
    },
    data() {
        return {
            separator: this.$parent.separator,
        };
    },
    methods: {
        aa() {
            console.log(this.$slots.default);
            console.log(this.$parent.$slots.default);
        },
    },
    created() {
        this.aa();
    },
    mounted(){
        console.log(this.kk);
    }
};
</script>

<style lang="less" scoped>
.dd-breadcrumb-item {
    float: left;
    .dd-breadcrumb_inner {
        color: #606266;
    }
    .dd-breadcrumb_separator {
        margin: 0 9px;
        font-weight: 700;
        color: #c0c4cc;
    }
}
</style>
