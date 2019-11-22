import { api, dataWorkApi } from './ApiConfig'

export const getData = async () => {
	try {
        const resp = await api.get('/user')
        return resp
	} catch (error) {
		throw error
	}
}
export const getJobId = async (jobName) => {
	try {
        const resp = await dataWorkApi.get(`/autocomplete?contains="${jobName}"`)
        return resp
	} catch (error) {
		throw error
	}
}
export const getRelatedJobs = async (jobId) => {
	try {
		const resp = await dataWorkApi.get(`/${jobId}/related_jobs`)
		return resp
	} catch (error) {
		throw error
	}
}

export const getSingleFood = async (food_id) => {
	try {
		const resp = await dataWorkApi.get(`/food/${food_id}`)
		return resp.data
	} catch (error) {
		throw error
	}
}

export const removeFood = async (food_id) => {
	try {
		const resp = await api.delete(`/food/${food_id}`)
		return resp.data
	} catch (error) {
		throw error
	}
}

export const editFood = async (food_id, foodData) => {
	try {
		const resp = await api.put(`/food/${food_id}`, foodData)
		return resp
	} catch (error) {
		throw error
	}
}

export const createData = async (jobData) => {
	try {
		const resp = await api.post('/user/1/jobs', jobData)
		return resp
	} catch (error) {
		console.log(error)
	}
}