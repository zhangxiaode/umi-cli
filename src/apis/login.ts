/**
* 登录接口
* */
import request from '@/utils/request'

// 登录
export function login(data: any) {
  return request({
    url: `/admin/login`,
    method: 'post',
    data
  })
}