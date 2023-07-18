<template>
    <div class="not-found">
        <div class="animation">
            <div class="rail">
                <template v-for="_ in 10">
                    <div class="stamp four">4</div>
                    <div class="stamp zero">0</div>
                </template>
            </div>
            <div class="world">
                <div class="forward">
                    <div class="box">
                        <div class="wall" v-for="index in 6" :key="index"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div @click="$router.replace('/component/installation')">首页</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
};
</script>
<style scoped lang="less">
@wallSize: 200px;
@borderColor: #000;

@keyframes zeroFour {
    0% {
        content: "4";
    }
    100% {
        content: "0";
    }
}

@keyframes roll {
    0% {
        transform: rotateZ(0deg);
    }
    85% {
        transform: rotateZ(90deg);
    }
    87% {
        transform: rotateZ(88deg);
    }
    90% {
        transform: rotateZ(90deg);
    }
    100% {
        transform: rotateZ(90deg);
    }
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-@wallSize);
    }
}

@keyframes stampSlide {
    0% {
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-@wallSize)
            translateY(130px);
    }
    100% {
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-@wallSize)
            translateY(-3870px);
    }
}
.not-found {
    .animation {
        display: flex;
        width: 100vw;
        height: 30vh;
        justify-content: center;
        align-items: center;
        div {
            transform-style: preserve-3d;
        }
        .rail {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotateX(-30deg) rotateY(-30deg);
            .stamp {
                position: absolute;
                width: @wallSize;
                height: @wallSize;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                font-size: 7rem;
                .loop(@i) when (@i > 0) {
                    &:nth-child(@{i}) {
                        animation: stampSlide 20 * 2000ms @i * -2000 - 300ms
                            linear infinite;
                    }
                    .loop(@i - 1);
                }
                .loop(20);
            }
        }
        .world {
            transform: rotateX(-30deg) rotateY(-30deg);
            .forward {
                position: absolute;
                animation: slide 2000ms linear infinite;
            }
            .box {
                width: @wallSize;
                height: @wallSize;
                transform-origin: 100% 100%;
                animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
                .wall {
                    position: absolute;
                    width: @wallSize;
                    height: @wallSize;
                    background: rgba(0, 0, 0, 0.5);
                    border: 1px solid #fafafa;
                    box-sizing: border-box;
                    &::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        font-size: 7rem;
                    }
                    &:nth-child(1) {
                        transform: translateZ(100px);
                    }
                    &:nth-child(2) {
                        transform: rotateX(180deg) translateZ(100px);
                    }
                    &:nth-child(3) {
                        transform: rotateX(90deg) translateZ(100px);
                    }
                    &:nth-child(3)::before {
                        transform: rotateX(180deg) rotateZ(90deg)
                            translateZ(-1px);
                        animation: zeroFour 4000ms -2000ms linear infinite;
                    }
                    &:nth-child(4) {
                        transform: rotateX(-90deg) translateZ(100px);
                        &::before {
                            transform: rotateX(180deg) rotateZ(-90deg)
                                translateZ(-1px);
                            animation: zeroFour 4000ms -2000ms linear infinite;
                        }
                    }
                    &:nth-child(5) {
                        transform: rotateY(90deg) translateZ(100px);
                        &::before {
                            transform: rotateX(180deg) translateZ(-1px);
                            animation: zeroFour 4000ms linear infinite;
                        }
                    }
                    &:nth-child(6) {
                        transform: rotateY(-90deg) translateZ(100px);
                        &::before {
                            transform: rotateX(180deg) rotateZ(180deg)
                                translateZ(-1px);
                            animation: zeroFour 4000ms linear infinite;
                        }
                    }
                }
            }
        }
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 280px;
        font-size: 30px;
        > div {
            display: inline-block;
            cursor: pointer;
            position: relative;
            width: 140px;
            height: 64px;
            margin: auto;
            border: 1px solid @borderColor;
            text-align: center;
            line-height: 64px;
            cursor: pointer;

            &::before,
            &::after {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                transition: 0.3s ease-in-out;
            }

            &::before {
                top: -5px;
                left: -5px;
                border-top: 1px solid @borderColor;
                border-left: 1px solid @borderColor;
            }

            &::after {
                right: -5px;
                bottom: -5px;
                border-bottom: 1px solid @borderColor;
                border-right: 1px solid @borderColor;
            }

            &:hover::before,
            &:hover::after {
                width: calc(100% + 9px);
                height: calc(100% + 9px);
            }
        }
    }
}
</style>
