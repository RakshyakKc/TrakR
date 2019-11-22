import Axios from 'axios'
const BASE_URL = 'http://api.dataatwork.org/v1/jobs/'

export const dataWorkApi = Axios.create({
	baseURL: BASE_URL,
	headers: {
		// 'Access-Control-Allow-Origin': '*'
	}
})
