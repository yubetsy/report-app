<template>
	<view>
		<view v-for="item in taskList">
			<task :task.sync="item" @update="updateTask"></task>
		</view>
		<view class="btn">
			<u-button @click="addTask" type="primary" size="small" icon="plus" color="#5ac725" custom-style="buttonStyle" />
			<u-button @click="delTask" type="primary" size="small" icon="minus" color="#5ac725" plain="true" v-if="taskList.length > 0" />
		</view>

	</view>
</template>

<script>
	export default {
		name: "task-list",
		data() {
			return {
				taskList: this.list,
				buttonStyle: {
					marginTop: '30rpx'
				}
			};
		},
		props: {
			list: {
				type: Array,
				default: []
			},
			text: {
				type: String,
				default: ''
			}
		},
		onLoad() {
			console.log(this.list)
			this.taskList = this.list;
		},
		methods: {
			addTask() {
				this.taskList.push({
					id: this.taskList.length + 1,
					content: '',
					process: 0
				})
				this.$emit("update", this.taskList)
			},
			delTask() {
				this.taskList = this.taskList.slice(0, -1)
				this.$emit("update", this.taskList)
			},
			updateTask(task) {
				var t = this.taskList.find(o => o.id == task.id)
				t.content = task.content
				t.process = task.process
				this.$emit("update", this.taskList)
			}
		}
	}
</script>

<style>
	.btn {
		width: 350rpx;
		height: 60rpx;
		display: inline-flex;
		/* background-color: #fff; */
		font-size: 20rpx;
		margin: 0 10rpx;
		padding: 0;
	}

	.mini-btn {
		font-size: 10rpx;
	}
</style>
