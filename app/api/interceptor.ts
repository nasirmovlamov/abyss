import { API_BASE_URL } from 'app/constants';
import { getCookie } from 'app/helpers/functions/CookieFunctions';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Router from 'next/router';

const config: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 30000,
}

const service: AxiosInstance = axios.create(config)
const ENTRY_ROUTE = '/'

// Intercept request
service.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('token')

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    } else {
      Router.push(ENTRY_ROUTE)
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// Intercept response
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.data
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  },
)

export default service
