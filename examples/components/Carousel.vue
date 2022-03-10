<template>
    <div class="page-box">
        <h2 class="_title">Carousel 走马灯</h2>
        <p class="_descript">
            在有限空间内，循环播放同一类型的图片、文字等内容
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-carousel height="150px">
                    <dd-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </dd-carousel-item>
                </dd-carousel>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            code1: `
                
            `,
        };
    },
};
</script>

<style lang="less" scoped>
/deep/.dd-carousel-item:nth-child(2n) {
    // background-color: #99a9bf;
    background: url("https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/lucheng/1644565026162.jpg");
}

/deep/.dd-carousel-item:nth-child(2n + 1) {
    // background-color: #d3dce6;
    background: url('https://zjsfgwczc.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/FGWSYSTEM/files/test/1638946365720.png');
}
/deep/.dd-carousel-item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
</style>
