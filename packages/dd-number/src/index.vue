<template>
    <div class="dd-number">
        {{ startValue }}
    </div>
</template>

<script>
export default {
    name: "ddNumber",
    props: {
        mounte: {
            type: Boolean,
            default: true,
        },
        value: {
            type: Number,
        },
        time: {
            type: Number,
            default: 1000,
        },
        pause: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dd_timerMethod: null,
            startValue: 0,
            endValue: this.value,
            pauseValue: this.pause,
        };
    },
    mounted() {
        if (this.mounte && !this.pause) this.dd_timer();
    },
    methods: {
        dd_timer() {
            if (
                this.value == null ||
                this.value == undefined ||
                this.endValue == this.pauseValue
            )
                return;
            this.dd_timerMethod = setInterval(async () => {
                if (this.pauseValue) await this.dd_sleep(Math.pow(2, 31) - 1);
                if (this.startValue < this.endValue) {
                    this.startValue++;
                } else {
                    this.pauseValue = true;
                    clearInterval(this.dd_timerMethod);
                }
            }, Math.floor(this.time / this.value));
        },
        dd_sleep(time) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                }, time);
            });
        },
    },
    watch: {
        pause: {
            immediate: true,
            handler(val) {
                this.pauseValue = val;
                this.$emit("pause", val, this.startValue);
                if (!val) {
                    this.dd_timer();
                }
            },
        },
        value: {
            handler(val) {
                this.startValue = val;
            },
        },
        startValue: {
            handler(val) {
                this.startValue = val;
                this.$emit("input", val);
            },
        },
    },
};
</script>

<style lang="less" scoped></style>
