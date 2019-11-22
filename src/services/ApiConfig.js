import Axios from 'axios'
const BASE_URL = 'https://5dd1f74c15bbc2001448d506.mockapi.io'

export const api = Axios.create({
	baseURL: BASE_URL,
	headers: {
		// 'Access-Control-Allow-Origin': '*'
	}
})

const BASE_URL_DATAWORK = 'http://api.dataatwork.org/v1/jobs'

export const dataWorkApi = Axios.create({
	baseURL: BASE_URL_DATAWORK,
	headers: {
		// 'Access-Control-Allow-Origin': '*'
	}
})
