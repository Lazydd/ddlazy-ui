<template>
    <div class="dd-slider">
        <div class="dd-slider_runway">
            <div class="dd-slider_button-wrapper">
                <div class="dd-tooltip dd-slider_button"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddSlider",
};
</script>

<style lang="less" scoped>
.dd-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
    .dd-slider_runway {
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
        .dd-slider_button-wrapper {
            height: 36px;
            width: 36px;
            position: absolute;
            z-index: 1001;
            top: -15px;
            transform: translateX(-50%);
            background-color: transparent;
            text-align: center;
            user-select: none;
            // line-height: normal;
            line-height: 33px;
            .dd-tooltip {
                display: inline-block;
                vertical-align: middle;
            }
            .dd-slider_button {
                width: 16px;
                height: 16px;
                border: 2px solid #409eff;
                background-color: #fff;
                box-sizing: content-box;
                border-radius: 50%;
                transition: 0.2s;
                user-select: none;
                line-height: 36px;
            }
        }
    }
}
</style>
