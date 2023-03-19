import config from "@/config.js"

export default {
	send(options = {}){
		uni.showLoading({
			title:'加载中...'
		});
		options.url = config.uni_app_web_url + options.url;
	    options.method = options.method || 'GET';
		
		let user = uni.getStorageSync('username');
		if(user != null) {
			options.header = { 'Auth-Token': user};
		}
		options.fail = (res) => {
			uni.showToast({
				title:'网络故障，请稍后再试~',
				icon: 'error'
			})
		}
		options.complete = (res) => {
			uni.hideLoading()
		}
		return new Promise((resolve, reject) => {
			console.log('request 1', options)
			uni.showLoading({
				title:'加载中...'
			})
			uni.request(options).then(res => {
				if (res.error) {
					uni.hideLoading();
					reject(res.error)
				} else {
					uni.hideLoading();
					reject(res.data)
				}
			})
		})		
	},
	get(url='', data = {}) {
		return this.send({
			url: url,
			data: data
		})
	},
	post(url='', data = {}) {
		return this.send({
			url: url,
			data: data,
			method: 'POST'
		})
	}
}