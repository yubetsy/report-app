<template>
	<view class="task">
		<view>{{task.id}}</view>
		<uni-section title="请输入" subTitle="工作内容" type="line" padding>
			<uni-easyinput type="textarea" v-model="task.content"></uni-easyinput>
		</uni-section>
		<uni-section title="请输入" subTitle="完成进度" type="line" padding>
			<uni-number-box v-model="task.process" ></uni-number-box>
		</uni-section>		
	</view>
</template>

<script>
	export default {
		name:"task",
		data() {
			return {
			};
		},
		props: {
			task: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>
.task {
	width: 740rpx;
	border: 2rpx sold red;
	background-color: #fff
}
</style>