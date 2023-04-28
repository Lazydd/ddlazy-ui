<template>
    <div
        ref="virtualListRef"
        :style="{ height }"
        class="VirtualList"
        @scroll="scrollEvent($event)"
    >
        <div ref="scrollBoxRef" class="scroll-box" />
        <div ref="listGroupRef" class="list-group">
            <component
                :is="tag"
                ref="listRef"
                :id="item._index"
                :key="item.key"
                v-for="item in visibleData"
            >
                <slot ref="slot" :item="item.item" />
            </component>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddVirtualizedList",
    props: {
        //所有列表数据
        data: {
            type: Array,
            default: () => [],
        },
        //索引key
        dataKey: {
            type: String,
        },
        //预估高度
        estimatedItemSize: {
            type: Number,
            required: true,
        },
        //缓冲区比例
        bufferScale: {
            type: Number,
            default: 1,
        },
        //容器高度
        height: {
            type: String,
            default: "100%",
        },
        tag: {
            type: String,
            default: "li",
        },
        type: {
            type: String,
            default: "list",
            validator: (value) => ["list", "grid"].includes(value),
        },
        // innerHeight: {
        //     type: Number,
        //     default: 100,
        // },
    },
    computed: {
        _listData() {
            return this.data.map((item, index) => {
                return {
                    _index: `_${index}`,
                    key: this.dataKey ? item[this.dataKey] : `_${index}`,
                    item,
                };
            });
        },
        visibleCount() {
            return Math.ceil(this.screenHeight / this.estimatedItemSize);
        },
        aboveCount() {
            return Math.min(this.start, this.bufferScale * this.visibleCount);
        },
        belowCount() {
            return Math.min(
                this.data.length - this.end,
                this.bufferScale * this.visibleCount
            );
        },
        visibleData() {
            let start = this.start - this.aboveCount;
            let end = this.end + this.belowCount;
            return this._listData.slice(start, end);
        },
        virtualListRef() {
            return this.$refs.virtualListRef;
        },
        scrollBoxRef() {
            return this.$refs.scrollBoxRef;
        },
        listGroupRef() {
            return this.$refs.listGroupRef;
        },
        listRef() {
            return this.$refs.listRef;
        },
    },
    created() {
        this.initPositions();
    },
    mounted() {
        this.screenHeight = this.$el.clientHeight;
        this.start = 0;
        this.end = this.start + this.visibleCount;
    },
    updated() {
        this.$nextTick(function () {
            if (!this.listRef || !this.listRef.length) {
                return;
            }
            //获取真实元素大小，修改对应的尺寸缓存
            this.updateItemsSize();
            //更新列表总高度
            let height = this.positions[this.positions.length - 1].bottom;
            this.scrollBoxRef.style.height = height + "px";
            //更新真实偏移量
            this.setStartOffset();
        });
    },
    data() {
        return {
            //可视区域高度
            screenHeight: 0,
            //起始索引
            start: 0,
            //结束索引
            end: 0,
        };
    },
    methods: {
        initPositions() {
            this.positions = this.data.map((d, index) => ({
                index,
                height: this.estimatedItemSize,
                top: index * this.estimatedItemSize,
                bottom: (index + 1) * this.estimatedItemSize,
            }));
        },
        //获取列表起始索引
        getStartIndex(scrollTop = 0) {
            //二分法查找
            return this.binarySearch(this.positions, scrollTop);
        },
        binarySearch(list, value) {
            let start = 0;
            let end = list.length - 1;
            let tempIndex = null;

            while (start <= end) {
                let midIndex = parseInt((start + end) / 2);
                let midValue = list[midIndex].bottom;
                if (midValue === value) {
                    return midIndex + 1;
                } else if (midValue < value) {
                    start = midIndex + 1;
                } else if (midValue > value) {
                    if (tempIndex === null || tempIndex > midIndex) {
                        tempIndex = midIndex;
                    }
                    end = end - 1;
                }
            }
            return tempIndex;
        },
        //获取列表项的当前尺寸
        updateItemsSize() {
            let nodes = this.listRef;
            nodes.forEach((node) => {
                let rect = node.getBoundingClientRect();
                let height = rect.height;
                let index = +node.id.slice(1);
                let oldHeight = this.positions[index].height;
                let dValue = oldHeight - height;
                //存在差值
                if (dValue) {
                    this.positions[index].bottom =
                        this.positions[index].bottom - dValue;
                    this.positions[index].height = height;
                    for (let k = index + 1; k < this.positions.length; k++) {
                        this.positions[k].top = this.positions[k - 1].bottom;
                        this.positions[k].bottom =
                            this.positions[k].bottom - dValue;
                    }
                }
            });
        },
        //获取当前的偏移量
        setStartOffset() {
            let startOffset;
            if (this.start >= 1) {
                let size =
                    this.positions[this.start].top -
                    (this.positions[this.start - this.aboveCount]
                        ? this.positions[this.start - this.aboveCount].top
                        : 0);
                startOffset = this.positions[this.start - 1].bottom - size;
            } else {
                startOffset = 0;
            }
            this.listGroupRef.style.transform = `translate3d(0,${startOffset}px,0)`;
        },
        //滚动事件
        scrollEvent() {
            //当前滚动位置
            let scrollTop = this.virtualListRef.scrollTop;
            // let startBottom = this.positions[this.start - ]
            //此时的开始索引
            this.start = this.getStartIndex(scrollTop);
            //此时的结束索引
            this.end = this.start + this.visibleCount;
            //此时的偏移量
            this.setStartOffset();
        },
    },
};
</script>

<style scoped>
.VirtualList {
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
}

.scroll-box {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
}

.list-group {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
}
</style>
