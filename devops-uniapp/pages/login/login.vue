<template>
	<view>

		<view class="chat-button">
			<u-button text="微信登录" icon="weixin-fill" size="30" shape="circle" type="success" @click="wxLogin">
			</u-button>
		</view>
		<view class="otherLogin">
			<text class="other-text">其他方式登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: {}
			}
		},
		onLoad() {
			uni.login({
				provider: 'univerify',
				univerifyStyle: {
					fullScreen: true
				}
			})
		},
		methods: {
			wxLogin() {
				uni.showLoading({
					title: '微信登录中...'
				})
				uni.getUserInfo({
					success: res => {
						uni.login({
							success: loginRes => {
								uni.hideLoading()
								uni.reLaunch({
									url: "/pages/index/index"
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.chat-button {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		text-align: center;
		margin-top: 300rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
	}

	.otherLogin {
		align-items: center;
		margin-top: 400rpx;
	}

	.other-text {
		color: aliceblue;
	}
</style>
