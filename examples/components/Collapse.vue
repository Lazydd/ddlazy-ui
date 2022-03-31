<template>
    <div class="page-box">
        <h2 class="_title">Collapse 折叠面板</h2>
        <p class="_descript">通过折叠面板收纳内容区域</p>
        <dd-block title="基础用法" :code="code1">
            <template #source>
                <dd-collapse v-model="activeNames" @change="handleChange">
                    <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            </template>
        </dd-block>
        <dd-block title="手风琴效果" :code="code2">
            <template #source>
                <dd-collapse v-model="activeNames1" accordion>
                    <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            </template>
        </dd-block>
        <dd-block title="自定义面板标题" :code="code3">
            <template #source>
                <dd-collapse v-model="activeNames2" accordion>
                    <dd-collapse-item>
                        <template slot="title"  name="1">
                            一致性 Consistency
                            <dd-icon
                                icon="icon-remind-fill"
                                style="margin-left: 5px"
                            ></dd-icon>
                        </template>
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback"  name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency"  name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability"  name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            </template>
        </dd-block>
        <dd-block title="禁用" :code="code4">
            <template #source>
                <dd-collapse v-model="activeNames3" accordion>
                    <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" disabled name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            </template>
        </dd-block>
        <dd-describe title="Collapse Attributes" :data="Attributes"></dd-describe>
        <dd-describe title="Collapse Events" :data="Attributes2" events></dd-describe>
        <dd-describe title="Collapse Item Attributes" :data="Attributes3"></dd-describe>
        <dd-footer left="Carousel 走马灯" right="Timeline 时间线"></dd-footer>
    </div>
</template>

<script>
export default {
    name: "Collapse",
    data() {
        return {
            activeNames: ["1"],
            activeNames1: "1",
            activeNames2: ["1"],
            activeNames3: "2",
            code1: `
                <dd-collapse v-model="activeNames" @change="handleChange">
                    <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            `,
            code2: `
                <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
            `,
            code3: `
                <dd-collapse v-model="activeNames2" accordion>
                    <dd-collapse-item>
                        <template slot="title"  name="1">
                            一致性 Consistency
                            <dd-icon
                                icon="icon-remind-fill"
                                style="margin-left: 5px"
                            ></dd-icon>
                        </template>
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback"  name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency"  name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability"  name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            `,
            code4: `
                <dd-collapse v-model="activeNames3" accordion>
                    <dd-collapse-item title="一致性 Consistency" name="1">
                        <div>
                            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        </div>
                        <div>
                            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="反馈 Feedback" disabled name="2">
                        <div>
                            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        </div>
                        <div>
                            页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>
                            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        </div>
                        <div>
                            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                        </div>
                    </dd-collapse-item>
                    <dd-collapse-item title="可控 Controllability" name="4">
                        <div>
                            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        </div>
                        <div>
                            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                        </div>
                    </dd-collapse-item>
                </dd-collapse>
            `,
            Attributes: [
                {
                    parameter: "value / v-model",
                    explain: "当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)",
                    type: "string / array",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "accordion",
                    explain: "是否手风琴模式",
                    type: "boolean",
                    optional: "—",
                    default: "false",
                },
            ],
            Attributes2: [
                {
                    name: "change",
                    explain: "当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)",
                    backParameter: "(activeNames: array / string)",
                },
            ],
            Attributes3: [
                {
                    parameter: "name",
                    explain: "唯一标志符",
                    type: "string / number",
                    optional: "—",
                    default: "—",
                },
                {
                    parameter: "title",
                    explain: "面板标题",
                    type: "string",
                    optional: "—",
                    default: "	—",
                },
                {
                    parameter: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    optional: "—",
                    default: "	—",
                },
            ],
        };
    },
    methods: {
        handleChange(item) {
            console.log(item);
        },
    },
};
</script>

<style lang="less" scoped></style>
