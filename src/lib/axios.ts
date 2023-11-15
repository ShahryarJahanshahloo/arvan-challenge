import axios, { AxiosError, AxiosResponse } from 'axios'

const baseURL = 'https://api.realworld.io/api'

const request = axios.create({
  baseURL,
  timeout: 50000,
})

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error as AxiosError)
  }
)

request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt')
    if (token) {
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + String(token)
      }
    }
    return config
  },
  error => Promise.reject(error)
)

export type RequestReturnType<T> = Promise<AxiosResponse<T>>

export default request
