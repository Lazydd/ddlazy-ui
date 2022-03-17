<template>
    <div class="main-main">
        <footer>
            <div class="containers">
                <div class="footer-main">123</div>
                <div class="footer-social">
                    <a href="https://github.com/Lazydd/ddlazy-ui" target="_blank">
                        <dd-icon icon="icon-github-fill"></dd-icon>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Guides",
};
</script>

<style scoped lang="less">
.main-main {
    height: calc(100vh - 80px);
    margin-top: 80px;
    box-sizing: border-box;
}
footer {
    background-color: #f7fbfd;
    width: 100%;
    padding: 40px 150px;
    box-sizing: border-box;
    height: 340px;
    .containers {
        box-sizing: border-box;
        width: auto;
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;
    }
    .footer-social {
        float: right;
        text-align: right;
        font-size: 20px;
        cursor: pointer;
        .dd-icon {
            transform: scale(1);
            color: #c8d6e8;
            transition: all 0.5s;
        }
        &:hover {
            .dd-icon {
                transform: scale(1.4);
                color: #8d99ab;
            }
        }
    }
}
</style>
