<template>
	<view>
		<view class="u-swiper">
			<u-swiper :list="list1"></u-swiper>
		</view>
		<view class="workspace-list">
			<view v-for="(workspace,index) in workspaceBanners" :key="index">
				<text class="workspace-title"> {{workspace.title}}</text>
				<u-scroll-list :indicator="false">
					<view class="tasks">
						<view v-for="(item, i) in workspace.tasks" :key="i">
							<view class="task-item" @click="taskLink(item.link)">
								<image :src="item.iconUrl"></image>
								<u-text size="10" align="center" :text="item.title"></u-text>
							</view>
						</view>
					</view>
				</u-scroll-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				workspaceBanners: [
					{
					title: '个人工作',
					tasks: [{
							icon: "edit-pen",
							iconUrl: '../../static/image/report-red.png',
							title: '周报填写',
							link: '/pages/week-report-form/week-report-form'
						},
						{
							icon: "list",
							iconUrl: '../../static/image/report.png',
							title: '周报历史记录',
							link: '/pages/week-report-list/week-report-list'
						},
						{
							icon: "calendar",
							iconUrl: '../../static/image/report.png',
							title: '行程',
							link: ''
						},
						{
							icon: "grid",
							iconUrl: '../../static/image/report.png',
							title: '服务器账号查询',
							link: ''
						}
					]
				},
				{
					title: '部门中心',
					tasks: [
						{
							icon: "calendar",
							iconUrl: '../../static/image/report.png',
							title: '行程',
							link: ''
						},
						{
							icon: "grid",
							iconUrl: '../../static/image/report.png',
							title: '服务器账号查询',
							link: ''
						}
					]
				}],
				swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
			};
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			taskLink(link) {
				if (link !== ''){
					uni.navigateTo({
						url: link
					})
				}				
			}
		}
	}
</script>

<style>
	.swiper {
		height: 720rpx;
		margin-bottom: 30rpx;
	}
	.workspace-list {
		margin-top: 10rpx;
	}

	.grid-text {
		font-size: 12px;
		color: #aa0000;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.tasks {
		width: 100%;
		float: left;
		display: flex;
		margin: 20rpx 10rpx;
	}

	.task-item {
		width: 200rpx;
		height: 150rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
		text-align: center;
	}

	.task-item image {
		width: 100rpx;
		height: 100rpx;
	}

	.task-item-text {
		text-align: center;
	}

	.workspace-title {
		font-size: 40rpx;
		color: #909399;
		margin-left: 10rpx;
	}
</style>
