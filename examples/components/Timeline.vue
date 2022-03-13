<template>
    <div class="page-box">
        <h2 class="_title">Timeline 时间线</h2>
        <p class="_descript">可视化地呈现时间流信息。</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <div class="radio">
                    排序：
                    <dd-radio-group v-model="reverse">
                        <dd-radio :label="true">倒序</dd-radio>
                        <dd-radio :label="false">正序</dd-radio>
                    </dd-radio-group>
                </div>
                <dd-timeline :reverse="reverse">
                    <dd-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </dd-timeline-item>
                </dd-timeline>
            </template>
        </dd-block>
        <dd-block title="⾃定义节点样式" :code="code2">
            <template #source>
                <dd-timeline>
                    <dd-timeline-item
                        v-for="(activity, index) in activities2"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </dd-timeline-item>
                </dd-timeline>
            </template>
        </dd-block>
        <dd-block title="⾃定义时间戳" :code="code3">
            <template #source>
                <dd-timeline>
                    <dd-timeline-item timestamp="2018/4/12" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                    <dd-timeline-item timestamp="2018/4/3" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                    <dd-timeline-item timestamp="2018/4/2" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                </dd-timeline>
            </template>
        </dd-block>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    data() {
        return {
            reverse: true,
            activities: [
                {
                    content: "活动按期开始",
                    timestamp: "2018-04-15",
                },
                {
                    content: "通过审核",
                    timestamp: "2018-04-13",
                },
                {
                    content: "创建成功",
                    timestamp: "2018-04-11",
                },
            ],
            activities2: [
                {
                    content: "支持使用图标",
                    timestamp: "2018-04-12 20:46",
                    size: "large",
                    type: "primary",
                    icon: "icon-ellipsis",
                },
                {
                    content: "支持自定义颜色",
                    timestamp: "2018-04-03 20:46",
                    color: "#0bbd87",
                },
                {
                    content: "支持自定义尺寸",
                    timestamp: "2018-04-03 20:46",
                    size: "large",
                },
                {
                    content: "默认样式的节点",
                    timestamp: "2018-04-03 20:46",
                },
            ],
            code1: `
                <div class="radio">
                    排序：
                    <dd-radio-group v-model="reverse">
                        <dd-radio :label="true">倒序</dd-radio>
                        <dd-radio :label="false">正序</dd-radio>
                    </dd-radio-group>
                </div>
                <dd-timeline :reverse="reverse">
                    <dd-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </dd-timeline-item>
                </dd-timeline>

                reverse: true,
                activities: [
                    {
                        content: "活动按期开始",
                        timestamp: "2018-04-15",
                    },
                    {
                        content: "通过审核",
                        timestamp: "2018-04-13",
                    },
                    {
                        content: "创建成功",
                        timestamp: "2018-04-11",
                    },
                ],
            `,
            code2: `
                <dd-timeline>
                    <dd-timeline-item
                        v-for="(activity, index) in activities2"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </dd-timeline-item>
                </dd-timeline>

                activities2: [
                    {
                        content: "支持使用图标",
                        timestamp: "2018-04-12 20:46",
                        size: "large",
                        type: "primary",
                        icon: "icon-ellipsis",
                    },
                    {
                        content: "支持自定义颜色",
                        timestamp: "2018-04-03 20:46",
                        color: "#0bbd87",
                    },
                    {
                        content: "支持自定义尺寸",
                        timestamp: "2018-04-03 20:46",
                        size: "large",
                    },
                    {
                        content: "默认样式的节点",
                        timestamp: "2018-04-03 20:46",
                    },
                ],
            `,
            code3: `
                <dd-timeline>
                    <dd-timeline-item timestamp="2018/4/12" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                    <dd-timeline-item timestamp="2018/4/3" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                    <dd-timeline-item timestamp="2018/4/2" placement="top">
                        <dd-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </dd-card>
                    </dd-timeline-item>
                </dd-timeline>
            `,
        };
    },
};
</script>

<style lang="less" scoped>
.radio {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
</style>
