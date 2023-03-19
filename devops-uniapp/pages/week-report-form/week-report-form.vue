<template>
	<view class="form">
		<u-cell-group>
			<u-cell @click="showCalendar" icon="calendar" title="选择日期" sub-title="默认当天" showSubtitle rowHeight="40"
				:value="report.date" isLink>
			</u-cell>
		</u-cell-group>
		<u-form ref="form" :model="report" labelPosition="top">
			<u-form-item label="姓名" prop="username" borderBottom>
				<view class="ui-item">
					<u-input type="text	" v-model="report.username" placeholder="请输入姓名" />
				</view>
			</u-form-item>
			<u-form-item label="邮件" prop="useremail" borderBottom>
				<view class="ui-item">
					<u-input type="text" v-model="report.useremail" placeholder="请输入邮件地址" />
				</view>
			</u-form-item>
			<u-form-item label="本周工作报告" prop="currentWeekWorks" :label-width="200">
				<view class="ui-item">
					<task-list :list.sync="report.currentWeekWorks" @update="updateCurrentWeekTask"></task-list>
				</view>
			</u-form-item>
			<u-form-item label="下周工作计划" prop="nextWeekWorks" :label-width="200">
				<view class="ui-item">
					<task-list :list.sync="report.nextWeekWorks" @update="updateNextWeekTask"></task-list>
				</view>
			</u-form-item>
		</u-form>
		<view class="btn-submit">
			<button type="primary" @click="submitForm">Submit</button>
		</view>
		<u-calendar :show="showDate" mode="single" @confirm="selectDate" @close="closeDate" :minDate="minDate"
			showLunar></u-calendar>
	</view>
</template>

<script>
	import {
		pushWeekReport
	} from '@/utils/devops-api.js'
	export default {
		data() {
			return {
				showDate: false,
				report: {
					date: null,
					username: '',
					useremail: '',
					currentWeekWorks: [],
					nextWeekWorks: []
				},
				rules: {
					// 对name字段进行必填验证
					username: {
						// name 字段的校验规则
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					useremail: {
						type: 'string',
						required: true,
						pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/g,
						message: '请填写正确的邮件地址',
						trigger: ['blur', 'change']
					},
					nextWeekWorks: {
						validator: (rule, value, callback) => {
							var result= false
							if (value !== null && value.length > 0) {
								var emptyItems = value.find(o => o.content === '');
								console.log('emptyItems', emptyItems)
								result = emptyItems === undefined || (emptyItems !== null && emptyItems.length === 0)
							}
							return result
						},
						message: '工作计划未填写或者有未填写的工作计划，请仔细核对。'
					},
					currentWeekWorks: {
						validator: (rule, value, callback) => {
							var result= false
							if (value !== null && value.length > 0) {
								var emptyItems = value.find(o => o.content === '');
								console.log('emptyItems', emptyItems)
								result = emptyItems === undefined || (emptyItems !== null && emptyItems.length === 0)
							}
							return result
						},
						message: '工作报告未填写或者有未填写的工作报告，请仔细核对。'
					}
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		onLoad() {
			this.report.currentWeekWorks.push({
				id: 1,
				content: '',
				process: 0
			});
			this.report.nextWeekWorks.push({
				id: 1,
				content: '',
				process: 0
			});
		},
		computed: {
			minDate() {
				const d = new Date()
				const year = d.getFullYear()
				let month = d.getMonth() + 1
				month = month < 10 ? `0${month}` : month
				const date = d.getDate()
				return `${year}-${month}-${date - 14}`
			}
		},
		methods: {
			submitForm() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', this.report);
					pushWeekReport(this.report).then(res => {
						uni.showToast({
							title: '提交成功',
							icon: 'success'
						})
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}).catch(err => {
						uni.showToast({
							title: '提交失败',
							icon: 'error'
						})
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
					uni.hideLoading();
				})
			},
			updateCurrentWeekTask(tasks) {
				this.report.currentWeekWorks = tasks;
			},
			updateNextWeekTask(tasks) {
				this.report.nextWeekWorks = tasks;
			},
			selectDate(e) {
				this.report.date = e;
				this.showDate = false
			},
			closeDate() {
				this.showDate = false
			},
			showCalendar() {
				this.showDate = true
			}
		}
	}
</script>

<style>
	.form {
		width: 95%;
		margin: 0 20rpx;
		padding: 0;
	}

	.uni-mt-5 {
		margin-top: 5px;
	}

	/* .uni-forms-item {
		width: 100%;
		background-color: antiquewhite;
	} */
	.ui-item {
		padding: 10rpx
	}
</style>
