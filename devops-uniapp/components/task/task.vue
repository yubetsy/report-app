<template>
	<view class="task">
		<view class="task-content">
			<view class="task-sn">{{task.id}}</view>
			<view class="content"><u-textarea type="textarea" autoHeight v-model="data.content" placeholder="请输入工作内容"></u-textarea></view>
		</view>
		<view class="task-content">
			<view class="process">进度</view>
			<view class="content"><u-number-box v-model="data.process" :min="1" :max="100" integer></u-number-box></view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"task",
		data() {
			return {
				data: this.task
			};
		},
		props: {
			task: {
				type: Object,
				required: true
			}
		},
		watch: {
			data: {
				deep: true,
				handler(newvalue, oldvalue) {
					this.$emit("update", this.data)
				}
			}
		}
	}
</script>

<style>
.task {
	width: 740rpx;
	border: 2rpx sold red;
	background-color: #fff;
	display: block;
}
.task-content {
		display: inline-flex;
		width: 730rpx;
		margin: 20rpx;
	}
	.task-content .content{
		width: 630rpx;
	}
	.process{
		font-size: 25rpx;
		padding: 20rpx;
	}
.task-sn {
		font-size: 50rpx;
		margin: 10rpx;
	}
</style>