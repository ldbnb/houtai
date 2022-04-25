/**
 * 项目业务请求接口
 */

import request from './request'

//封装登录接口
export function LoginApi(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

// 封装角色列表
export function getMenusApi(){
  return request({
    url: '/menus',
    method: 'GET',
   
  })
}


//
export function aaaa(params) {
  return request({
      url: '/users',
      method: 'GET',
      params,
  })
}

export default LoginApi