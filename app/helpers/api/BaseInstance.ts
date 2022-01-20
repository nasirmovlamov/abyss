import axios from 'axios';

import { getCookie } from '../functions/CookieFunctions';
import { decryptUserToken } from '../functions/Cryption';
import { BASE_API_URL } from '../urls/BaseUrl';

export const BASE_API_INSTANCE = axios.create({
  baseURL: 'https://api.abysshub.com/api',
})

// Request interceptor for API calls
BASE_API_INSTANCE.interceptors.request.use(
  async (config) => {
    const cryptedToken = await getCookie('token')
    let accessToken = null
    if (cryptedToken !== null) {
      accessToken = decryptUserToken(cryptedToken)
    }

    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    config.baseURL = BASE_API_URL
    if (accessToken !== null && accessToken !== '') {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    } else {
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)
