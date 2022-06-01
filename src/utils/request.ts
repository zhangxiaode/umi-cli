import axios from 'axios'
import { history } from 'umi';
import {AxiosInstance} from 'axios'
import { message } from 'antd';

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 15000
})

service.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.status_code === 401) {
      sessionStorage.removeItem('userMsg')
      message.error('用户身份已失效，请重新登录', 2000)
      history.push(`/login?redirect=${window.location.href}`)
      return
    }
    return response.data
  },
  error => {
    message.error(error.message, 5000)
    return Promise.reject(error)
  }
)

// 封装axios---------------------------------------
function apiAxios(httpDefault: any, isLoad: boolean = false) {
  return new Promise((resolve, reject) => {
    isLoad && message.loading('', 0)
    service(httpDefault)
      .then((response: any) => {
        switch (response.status_code) {
          case 0:
            resolve(response.data)
            break
          default:
            message.error(response.message || 'error', 5000)
            reject(response.data)
        }
      }).catch((error) => {
        reject(error)
      }).finally(() => {
        isLoad && message.destroy()
      })
  })
}

export default apiAxios
