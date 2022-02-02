import { AUTH_TOKEN } from 'app/constants';
import Cookie from 'app/utils/Cookie';
import axios from 'axios';

import { BASE_API_URL } from '../urls/BaseUrl';

export const BASE_API_INSTANCE = axios.create({
  baseURL: 'https://api.abysshub.com/api',
})

// Request interceptor for API calls
BASE_API_INSTANCE.interceptors.request.use(
  async (config) => {
    const accessToken = Cookie.get(AUTH_TOKEN)

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    config.baseURL = BASE_API_URL
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)
