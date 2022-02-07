<template>
    <div class="dd-message">111111111</div>
</template>

<script>
export default {
    name: "ddMessage",
};
</script>

<style lang="less" scoped>
.dd-message {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    z-index: 9;
}
</style>
