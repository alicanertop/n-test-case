import { AxiosRequestConfig } from 'axios'

import { baseApiUrl } from './env'

export const apiConfig: AxiosRequestConfig = {
  baseURL: baseApiUrl
  // headers: { 'Content-Type': 'application/json' },
  // timeout: 1000 * 60 * 30, //30 dk
}

export const API_URLS = { bets: '/bets' }

export const betsFulllink = 'https://nesine-case-study.onrender.com/bets'
