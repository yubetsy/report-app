<template>
	<view>
		<view v-for="item in taskList">
			<task :task="item"></task>
		</view>
		<view class="btn">
			<button @click="addTask" type="primary" size="mini" plain="true">添加</button>
			<button @click="delTask" type="primary" size="mini" plain="true" v-show="taskList.length > 0">删除</button>
		</view>

	</view>
</template>

<script>
	export default {
		name: "task-list",
		data() {
			return {
				taskList: this.list
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
			}
		}
	}
</script>

<style>
	.btn {
		width: 300rpx;
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
