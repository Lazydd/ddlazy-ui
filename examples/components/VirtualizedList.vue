<template>
    <div class="page-box">
        <h2 class="_title">VirtualizedList 虚拟滚动列表</h2>
        <p class="_descript">
            通过虚拟化滚动列表组件，超大数据渲染将减少卡顿。
        </p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="list-box" ref="listBox" @scroll="scrollChange">
                    <div class="scroll-box" ref="scrollBox"></div>
                    <div class="list-group" ref="listGroup">
                        <li v-for="(item, i) in lists" :key="i">{{ item }}</li>
                    </div>
                </div>
            </template>
        </dd-block>
        <dd-footer left="InfiniteScroll 无限滚动" right="Echarts 图表"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "VirtualizedList",
    data() {
        return {
            code1: `
                <div class="list-box" ref="listBox" @scroll="scrollChange">
                    <div class="scroll-box" ref="scrollBox"></div>
                    <div class="list-group" ref="listGroup">
                        <li v-for="(item, i) in lists" :key="i">{{ item }}</li>
                    </div>
                </div>

                .list-box {
                    position: relative;
                    border: 1px solid skyblue;
                    overflow-y: auto;
                    margin: 0 auto;
                }
                .list-group {
                    position: absolute;
                    top: 0;
                    width: 100%;
                }
                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                    background: #e8f3fe;
                    margin: 10px;
                    color: #7dbcfc;
                }

                data() {
                    return {
                        list: [],
                        innerHieght: 50,
                        number: 10,
                        start: 0,
                        end: 10,
                    }
                },

                computed: {
                    lists() {
                        return this.list.slice(this.start, this.end);
                    },
                },
                mounted() {
                    for (let i = 0; i < 100000; i++) {
                        this.list.push("列表" + i);
                    }

                    this.$refs.listBox.style.height = this.number * this.innerHieght + "px";
                    this.$refs.scrollBox.style.height =
                        this.list.length * this.innerHieght + "px";
                },
                methods: {
                    scrollChange() {
                        this.start = Math.floor(
                            this.$refs.listBox.scrollTop / this.innerHieght
                        );
                        this.end = this.start + this.number;
                        this.$refs.listGroup.style.top =
                            this.start * this.innerHieght + "px";
                    },
                },
            `,
            list: [],
            innerHieght: 50,
            number: 10,
            start: 0,
            end: 10,
        };
    },
    computed: {
        lists() {
            return this.list.slice(this.start, this.end);
        },
    },
    mounted() {
        for (let i = 0; i < 100000; i++) {
            this.list.push("列表" + i);
        }

        this.$refs.listBox.style.height = this.number * this.innerHieght + "px";
        this.$refs.scrollBox.style.height =
            this.list.length * this.innerHieght + "px";
    },
    methods: {
        scrollChange() {
            this.start = Math.floor(
                this.$refs.listBox.scrollTop / this.innerHieght
            );
            this.end = this.start + this.number;
            this.$refs.listGroup.style.top =
                this.start * this.innerHieght + "px";
        },
    },
};
</script>

<style lang="less" scoped>
.list-box {
    position: relative;
    border: 1px solid skyblue;
    overflow-y: auto;
    margin: 0 auto;
}
.list-group {
    position: absolute;
    top: 0;
    width: 100%;
}
li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
}
</style>
