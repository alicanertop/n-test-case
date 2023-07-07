import axios from 'axios'

import { apiConfig } from 'config/api'

const instance = axios.create(apiConfig)

instance.interceptors.request.use(async (config) => config, Promise.reject)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default instance
