

const axios = require('axios').default
const {path}  = require('../lib/baseApi').default
const instance = axios.create({
  baseURL:'https://hblapi.yunfengsu.com.cn',
  timeout: 15000,
  contentType: 'application/json',
  complete: function (xhr, status) {
    if (status === 'timeout') {
      xhr.abort()
    }
  }
}) // 站点统一的配置// 注入请求拦截
export const  ajax = (P) => {
  return instance(
    {
      method: P.type || 'POST',
      url: path[P.url],
      params: P.params ? P.params : null,
      data: P.data ? P.data : null
    }
  ).then((res) => {
    // 状态码的处理
    P.success && P.success(res.data)
  }).catch(function (err) {
    P.error && P.error(err)
  })
} //web请求: ajax封装


