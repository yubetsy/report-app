<template>
	<view>
		<uni-forms ref="form" :modelValue="report" :rules="rules" label-position="top">
			<uni-forms-item label="姓名" name="username" required>
				<view class="ui-item">
					<uni-easyinput type="text" v-model="report.username" placeholder="请输入姓名" />
				</view>
			</uni-forms-item>
			<uni-forms-item label="邮件" name="useremail" required>
				<view class="ui-item">
					<uni-easyinput type="text" v-model="report.useremail" placeholder="请输入邮件地址" />
				</view>
			</uni-forms-item>
			<uni-forms-item label="本周工作报告" name="currentWeekReport" :label-width="200">
				<view class="ui-item">
					<task-list :list.sync="report.currentWeekWorks" @update="updateCurrentWeekTask"></task-list>
				</view>
			</uni-forms-item>
			<uni-forms-item label="下周工作计划" name="nextWeekPlan" :label-width="200">
				<view class="ui-item">
					<task-list :list.sync="report.nextWeekWorks" @update="updateNextWeekTask"></task-list>
				</view>
			</uni-forms-item>
		</uni-forms>
		<view class="btn-submit">
			<button type="primary" @click="submitForm">Submit</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				report: {
					username: '',
					useremail: '',
					currentWeekWorks: [],
					nextWeekWorks: []
				},
				rules: {
					// 对name字段进行必填验证
					username: {
						// name 字段的校验规则
						rules: [
							// 校验 name 不能为空
							{
								required: true,
								errorMessage: '请填写姓名',
							}
						],
						// 当前表单域的字段中文名，可不填写
						label: '姓名',
						validateTrigger: 'blur'
					},
					useremail: {
						rules: [{
							required: true,
							errorMessage: '请输入邮件地址。'
						}],
						validateTrigger: 'blur'
					}
				}
			}
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
		methods: {
			submitForm() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			updateCurrentWeekTask(tasks) {
				this.report.currentWeekWorks = tasks;
			},
			updateNextWeekTask(tasks) {
				this.report.nextWeekWorks = tasks;
			}
		}
	}
</script>

<style>
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
