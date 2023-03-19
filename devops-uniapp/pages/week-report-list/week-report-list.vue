<template>
	<view>
		<view class="report_empty" v-show="reports.length === 0">
			<u-empty mode="data" title="数据为空" icon="https://cdn.uviewui.com/uview/demo/empty/history.png">
			</u-empty>
		</view>
		<view v-show="reports.length > 0">
			<u-list>
				<u-list-item v-for="(item, index) in reports" :key="index">
					<u-cell :title="index + 1 + '.' + item.week" @click="goDetail(item)" isLink></u-cell>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	import {
		getMyReports
	} from '@/utils/devops-api.js'
	export default {
		data() {
			return {
				userName: "132",
				reports: []
			}
		},
		onLoad() {
			getMyReports(this.userName).then(res => {
				this.reports = res.data
				console.log("shuju", this.reports)
			}).catch(err => {
				uni.hideLoading()
				uni.showToast({
					title:'网络故障，请稍后再试~'
				})
			})
		},
		methods: {
			goDetail(item) {
				uni.setStorageSync("current_report", item)
				uni.navigateTo({
					url:"/pages/week-report-detail/week-report-detail"
				})
			}
		}
	}
</script>

<style>
	.report_empty {
		text-align: center;
		margin-top: 300rpx;
	}
</style>
