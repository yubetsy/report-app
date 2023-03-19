import request from './request.js'

export function pushWeekReport(params) {
	return new Promise((resolve, reject) => {
		request.post("/api/ui-app/push-week-report", params)
		.then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export function getMyReports(username) {
	return new Promise((resolve, reject) => {
		request.post("/api/ui-app/week-reports/" + username)
		.then(res => {
			resolve(res)
		}).catch(error => {
			console.log('request res', res)
			reject(error)
		})
	})
}