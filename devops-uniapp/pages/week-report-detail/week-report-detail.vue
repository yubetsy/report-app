<template>
	<view>
		<view class="u-demo-block">
			<!-- 报告周期 -->
			<text class="u-demo-block__title">周报周期</text>
			<view class="u-demo-block__content_week">
				<u-text :text="report.week"></u-text>
			</view>
		</view>
		<view>
			<text class="u-demo-block__title">工作报告</text>
			<view v-for="(item, index) in report.taskReports" :key="index">
				<u-divider
				   textPosition="left"
					:text="index + 1"
				></u-divider>
				<view class="u-demo-block__content">
					<view class="u-page__text-item-process">
						<u--text type="success" text="工作内容" size="12"></u--text>
					</view>
					<view class="u-page__text-item-content">
						<u--text type="info" wordWrap="break-word" size="12" :text="item.content"></u--text>
					</view>
				</view>
				<view class="u-demo-block__content">
					<view class="u-page__text-item-process">
						<u--text type="success" text="进度" size="12"></u--text>
					</view>
					<view class="u-page__text-item-process">
						<u--text type="error" :text="item.process" size="12"></u--text>
					</view>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">工作计划</text>
			<view v-for="(item, index) in report.taskPlan" :key="index">
				<u-divider
					textPosition="left"
					:text="index + 1"
				></u-divider>
				<view class="u-demo-block__content">
					<view class="u-page__text-item-process">
						<u--text type="success" text="工作内容" size="12"></u--text>
					</view>
					<view class="u-page__text-item-content">
						<u--text type="info" wordWrap="break-word" size="12" :text="item.content"></u--text>
					</view>
				</view>
				<view class="u-demo-block__content">
					<view class="u-page__text-item-process">
						<u--text type="success" text="进度" size="12"></u--text>
					</view>
					<view class="u-page__text-item-process">
						<u--text type="error" :text="item.process" size="12"></u--text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				report: {
					week: '123',
					taskReports: [],
					taskPlan: []
				}
			}
		},
		onLoad() {
			this.report = uni.getStorageSync('current_report')
			console.log(this.report)
		},
		methods: {

		}
	}
</script>

<style>
	.u-page__text-item {
		margin-right: 10px;
		flex: 1;
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		display: inline-flex;
	}
	.u-demo-block__content_week{
		margin-bottom: 20rpx;
	}

	.u-demo-block__title {
		font-size: 16px;
		color: #005500;
		margin-bottom: 8px;
		display: flex;
		flex-direction: row;
		margin-top: 10rpx;
		font-weight: 600;
	}

	.task-content {
		display: inline-flex;
		margin: 0 20rpx;
	}

	.u-page__text-item {
		margin-right: 2px;
		flex: 1;
	}
	.u-page__text-item-content{
		width: 550rpx;
		margin-left: 10rpx;
	}
	.u-page__text-item-process{
		width: 130rpx;
		color: cornflowerblue;
		margin: 3rpx;
	}
</style>
