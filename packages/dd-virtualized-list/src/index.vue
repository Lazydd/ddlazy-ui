<template>
    <div
        class="dd-virtualized-list"
        ref="ddvirtualListRef"
        @scroll="scrollChange"
    >
        <div class="scroll-box" ref="ddscrollBoxRef"></div>
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
            <li
                v-for="(item, index) in listDate"
                :key="dateKey ? item[dateKey] : index"
            >
                <slot :item="item" />
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "ddVirtualizedList",
    props: {
        date: {
            type: Array,
            default: () => {
                return [];
            },
        },
        dateKey: {
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
                    innerHieght: 60,
                    gridTemplateColumns: 1,
                };
            },
            validator: (value) => {
                let keys = Object.keys(value);
                return (
                    keys.includes("displayCount") &&
                    keys.includes("innerHieght")
                );
            },
        },
    },
    data() {
        return {
            config: {
                start: 0,
                ...this.configObj,
            },
        };
    },
    computed: {
        listDate() {
            return this.date.slice(
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
                        this.virtualListRef.scrollTop / this.config.innerHieght
                    ) * (this.config.gridTemplateColumns || 1);
                this.listGroupRef.style.top =
                    (this.config.start /
                        (this.config.gridTemplateColumns || 1)) *
                        this.config.innerHieght +
                    "px";
            } else {
                this.config.start = Math.floor(
                    this.virtualListRef.scrollTop / this.config.innerHieght
                );
                this.listGroupRef.style.top =
                    this.config.start * this.config.innerHieght + "px";
            }
        },
    },
    mounted() {
        this.virtualListRef.style.top =
            this.config.start * this.config.innerHieght + "px";
        if (this.type == "grid") {
            this.scrollBoxRef.style.height =
                (this.date.length / (this.config.gridTemplateColumns || 1)) *
                    this.config.innerHieght +
                "px";
        } else {
            this.scrollBoxRef.style.height =
                this.date.length * this.config.innerHieght + "px";
        }
    },
    watch: {
        date(val) {
            if (val.length > 0) {
                if (this.type == "grid") {
                    this.scrollBoxRef.style.height =
                        (this.date.length /
                            (this.config.gridTemplateColumns || 1)) *
                            this.config.innerHieght +
                        "px";
                } else {
                    this.scrollBoxRef.style.height =
                        this.date.length * this.config.innerHieght + "px";
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
.grid {
    display: grid;
    width: 100%;
}
</style>
