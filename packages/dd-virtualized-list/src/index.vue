<template>
    <div
        class="dd-virtualized-list"
        ref="ddvirtualListRef"
        @scroll="scrollChange"
    >
        <div class="scroll-box" ref="ddscrollBoxRef" />
        <div
            class="list-group"
            ref="ddlistGroupRef"
            :class="{ grid: type == 'grid' }"
            :style="{
                gridTemplateColumns: `repeat(${
                    config.gridTemplateColumns || 1
                },1fr)`,
            }"
        >
            <component
                :is="tag"
                v-for="(item, index) in listData"
                :key="dataKey ? item[dataKey] : index"
                :style="{ height: config.innerHeight + 'px' }"
            >
                <slot :item="item" />
            </component>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddVirtualizedList",
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            },
        },
        dataKey: {
            type: String,
        },
        type: {
            type: String,
            default: "list",
            validator: (value) => ["list", "grid"].includes(value),
        },
        configObj: {
            type: Object,
            default() {
                return {
                    displayCount: 20,
                    innerHeight: 60,
                    gridTemplateColumns: 1,
                };
            },
            validator: (value) => {
                let keys = Object.keys(value);
                return (
                    keys.includes("displayCount") &&
                    keys.includes("innerHeight")
                );
            },
        },
        tag: {
            type: String,
            default: "li",
        },
    },
    data() {
        return {
            config: { ...this.configObj, start: 0 },
        };
    },
    computed: {
        listData() {
            return this.data.slice(
                this.config.start,
                this.config.displayCount + this.config.start
            );
        },
        virtualListRef() {
            return this.$refs.ddvirtualListRef;
        },
        listGroupRef() {
            return this.$refs.ddlistGroupRef;
        },
        scrollBoxRef() {
            return this.$refs.ddscrollBoxRef;
        },
    },
    methods: {
        scrollChange() {
            if (this.type == "grid") {
                this.config.start =
                    Math.floor(
                        this.virtualListRef.scrollTop / this.config.innerHeight
                    ) * (this.config.gridTemplateColumns || 1);
                this.listGroupRef.style.top =
                    (this.config.start /
                        (this.config.gridTemplateColumns || 1)) *
                        this.config.innerHeight +
                    "px";
            } else {
                this.config.start = Math.floor(
                    this.virtualListRef.scrollTop / this.config.innerHeight
                );
                this.listGroupRef.style.top =
                    this.config.start * this.config.innerHeight + "px";
            }
        },
    },
    mounted() {
        this.virtualListRef.style.top =
            this.config.start * this.config.innerHeight + "px";
        if (this.type == "grid") {
            this.scrollBoxRef.style.height =
                (this.data.length / (this.config.gridTemplateColumns || 1)) *
                    this.config.innerHeight +
                "px";
        } else {
            this.scrollBoxRef.style.height =
                this.data.length * this.config.innerHeight + "px";
        }
    },
    watch: {
        data(val) {
            if (val.length > 0) {
                if (this.type == "grid") {
                    this.scrollBoxRef.style.height =
                        (this.data.length /
                            (this.config.gridTemplateColumns || 1)) *
                            this.config.innerHeight +
                        "px";
                } else {
                    this.scrollBoxRef.style.height =
                        this.data.length * this.config.innerHeight + "px";
                }
                // this.virtualListRef.scrollTo(0, 0);
                // this.listGroupRef.style.top = 0;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.dd-virtualized-list {
    position: relative;
    width: 100%;
    overflow-y: auto;
}
.list-group {
    position: absolute;
    top: 0;
    width: 100%;
    content-visibility: auto;
    contain-intrinsic-size: 50px;
}

.grid {
    display: grid;
    width: 100%;
}
</style>
