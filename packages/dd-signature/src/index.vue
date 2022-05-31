<template>
    <div class="dd-sgnature">
        <div class="boardBox" ref="boardBox">
            <canvas
                ref="board"
                @mousedown="pcStart"
                @mousemove="pcMove"
                @mouseup="pcEnd"
            ></canvas>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddSignature",
    props: {},
    data() {
        return {
            ctx: null,
            width: 0,
            height: 0,
            point: {
                x: 0,
                y: 0,
            },
            moving: false, // 是否正在绘制中且移动
            base64: "",
        };
    },
    mounted() {
        let board = this.$refs.board; // 获取DOM
        this.width = board.width = this.$refs.boardBox.offsetWidth; // 设置画布宽
        this.height = board.height = this.$refs.boardBox.offsetHeight; // 设置画布高
        this.ctx = board.getContext("2d"); // 二维绘图
        this.ctx.strokeStyle = "#ff0000"; // 颜色
        this.ctx.lineWidth = 5; // 线条宽度
    },
    methods: {
        // 鼠标按下(开始)
        pcStart(e) {
            let x = e.offsetX,
                y = e.offsetY; // 获取鼠标在画板（canvas）的坐标
            this.point.x = x;
            this.point.y = y;
            this.ctx.beginPath();
            this.moving = true;
            this.$emit("sartMoving", e);
        },
        // 鼠标移动（移动中...）
        pcMove(e) {
            if (this.moving) {
                let x = e.offsetX,
                    y = e.offsetY; // 获取鼠标在画板（canvas）的坐标
                this.ctx.moveTo(this.point.x, this.point.y); // 把路径移动到画布中的指定点，不创建线条(起始点)
                this.ctx.lineTo(x, y); // 添加一个新点，然后创建从该点到画布中最后指定点的线条，不创建线条
                this.ctx.stroke(); // 绘制
                (this.point.x = x), (this.point.y = y); // 重置点坐标为上一个坐标
                this.$emit("moving", e);
            }
        },
        // 鼠标松开（结束）
        pcEnd(e) {
            if (this.moving) {
                this.ctx.closePath(); // 停止绘制
                this.moving = false; // 关闭绘制开关
                this.$emit("stopMoving", e);
            }
        },
        // 清空画布
        cleanCanvas() {
            // clearRect() 方法清空给定矩形内的指定像素。
            this.ctx.clearRect(0, 0, this.width, this.height);
        },
        // 保存签名
        saveCanvas() {
            this.base64 = this.$refs.board.toDataURL(); // 转为base64
            this.$emit("save", this.base64);
        },
    },
};
</script>

<style lang="less" scoped>
.dd-sgnature {
    width: 100%;
    height: 100%;
    .boardBox {
        width: 100%;
        height: 100%;
        background: #eee;
    }
}
</style>
