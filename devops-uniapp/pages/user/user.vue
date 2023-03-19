<template>
	<view class="me">
		<view class="me-user">
			<view class="login" @click="login">
				<image src="../../static/image/avatar.png"></image>
				<text>登录 / 注册</text>
			</view>
		</view>
		<view class="me-content">
			<view class="main-content">
				<u-cell-group>
					<u-cell title="修改个人信息" icon="edit-pen">
					</u-cell>
					<u-cell title="系统设置" icon="setting-fill">
					</u-cell>
					<u-cell title="版本" icon="info-circle">
					</u-cell>
				</u-cell-group>
			</view>
			<view class="logout" @click="logout">
				<text>退出登陆</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad() {
			// uni.getUserInfo({
			// 	success: res => {
			// 		this.userInfo = res.userInfo
			// 		console.log(this.userInfo)
			// 	}
			// })
		},
		methods: {
			login() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			logout() {
				uni.showToast({
					title:'退出成功'
				})
			}
		}
	}
</script>

<style>
	.login {
		display: inline-flex;
		width: 100%;
		height: 100rpx;
		margin-bottom: 10rpx;
	}

	.me-user {
		display: flex;
		align-items: center;
		width: 100%;
		height: 281rpx;
		background: linear-gradient(to top, #e0d5ee, #9298ff);
		border-radius: 0;
	}

	.login image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50;
		padding-left: 28rpx;
	}

	.login text {
		padding-left: 22rpx;
		padding-top: 34rpx;
	}

	.wrap {
		padding: 12px;
	}

	.demo-layout {
		height: 25px;
		border-radius: 4px;
	}

	.bg-purple {
		background: #CED7E1;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
	.logout {
		width: 100%;
		font-size: 20;
		text-align: center;
		position: absolute;
		bottom: 0;
		color: #99a9bf;
		margin-bottom: 50rpx;
	}
	/* .me-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */
</style>
