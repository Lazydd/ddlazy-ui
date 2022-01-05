<template>
    <div>
        <h2 class="_title">Layout 布局</h2>
        <p class="_descript">通过基础的 24 分栏，迅速简便地创建布局。</p>
        <dd-block title="基础布局" :code="code1">
            <template #source>
                <dd-row>
                    <dd-col :span="24">
                        <div class="grid-content bg-purple-dark"></div>
                    </dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="12">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="12">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="8">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                </dd-row>
            </template>
        </dd-block>
        <dd-block title="分栏间隔" :code="code2">
            <template #source>
                <dd-row :gutter="20">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
            </template>
        </dd-block>
        <dd-block title="混合布局" :code="code3">
            <template #source>
                <dd-row :gutter="20">
                    <dd-col :span="16">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="8">
                        <div class="grid-content bg-purple"></div> </dd-col
                ></dd-row>
                <dd-row :gutter="20">
                    <dd-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row :gutter="20">
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="16">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
            </template>
        </dd-block>
        <dd-block title="对齐方式" :code="code5">
            <template #source>
                <dd-row>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="center">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="end">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="space-between">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="space-around">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
			</template
        ></dd-block>
    </div>
</template>

<script>
export default {
    name: "Layout",
    data() {
        return {
            code1: `
		<dd-row>
                    <dd-col :span="24"><div class="grid-content bg-purple-dark"></div></dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="12"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="12"><div class="grid-content bg-purple-light"></div></dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="8"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="8"><div class="grid-content bg-purple-light"></div></dd-col>
                    <dd-col :span="8"><div class="grid-content bg-purple"></div></dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple-light"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple-light"></div></dd-col>
                </dd-row>
                <dd-row>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple-light"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple-light"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple-light"></div></dd-col>
                </dd-row>


		<style>
			.dd-row {
    			margin-bottom: 20px;
    			&:last-child {
        			margin-bottom: 0;
    			}
			}
			.grid-content {
				border-radius: 4px;
				min-height: 36px;
			}
			.bg-purple-dark {
				background: #99a9bf;
			}
			.bg-purple {
				background: #d3dce6;
			}
			.bg-purple-light {
				background: #e5e9f2;
			}
		</style>
		`,
            code2: `
		<dd-row :gutter="20">
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="6"><div class="grid-content bg-purple"></div></dd-col>
                </dd-row>

		<style>
			.dd-row {
    			margin-bottom: 20px;
    			&:last-child {
        			margin-bottom: 0;
    			}
			}
			.grid-content {
				border-radius: 4px;
				min-height: 36px;
			}
			.bg-purple-dark {
				background: #99a9bf;
			}
			.bg-purple {
				background: #d3dce6;
			}
			.bg-purple-light {
				background: #e5e9f2;
			}
		</style>
			`,
            code3: `
		<dd-row :gutter="20">
                    <dd-col :span="16"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="8"><div class="grid-content bg-purple"></div> </dd-col></dd-row>
                <dd-row :gutter="20">
                    <dd-col :span="8"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="8"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
            	</dd-row>
            	<dd-row :gutter="20">
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="16"><div class="grid-content bg-purple"></div></dd-col>
                    <dd-col :span="4"><div class="grid-content bg-purple"></div></dd-col>
            	</dd-row>

		<style>
			.dd-row {
    			margin-bottom: 20px;
    			&:last-child {
        			margin-bottom: 0;
    			}
			}
			.grid-content {
				border-radius: 4px;
				min-height: 36px;
			}
			.bg-purple-dark {
				background: #99a9bf;
			}
			.bg-purple {
				background: #d3dce6;
			}
			.bg-purple-light {
				background: #e5e9f2;
			}
		</style>
			`,
            code5: `
		<dd-row>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="center">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="end">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="space-between">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
                <dd-row justify="space-around">
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </dd-col>
                    <dd-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </dd-col>
                </dd-row>
			`,
        };
    },
};
</script>

<style lang="less" scoped>
.page-box {
    width: 100%;
}
.dd-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
</style>
